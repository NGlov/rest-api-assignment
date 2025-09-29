// src/index.js
const express = require('express');
const { randomUUID } = require('crypto'); // built-in UUID, avoids ESM issues in Jest

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory stored
/** @type {{ id: string, name: string, email: string }[]} */
const users = [];

// Helpers
function badRequest(res, msg = 'Bad Request') {
  return res.status(400).json({ error: msg });
}
function notFound(res, msg = 'Not Found') {
  return res.status(404).json({ error: msg });
}

/**
 * 1) Create a User
 * POST /users
 * body: { name, email }
 * 201 -> { id, name, email }
 * 400 if missing name or email
 */
app.post('/users', (req, res) => {
  const { name, email } = req.body || {};
  if (!name || !email) return badRequest(res, 'name and email are required');

  const user = { id: randomUUID(), name, email };
  users.push(user);
  return res.status(201).json(user);
});

/**
 * 2) Retrieve a User
 * GET /users/:id
 * 200 -> user
 * 404 if not found
 */
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) return notFound(res, 'user not found');
  return res.json(user);
});

/**
 * 3) Update a User
 * PUT /users/:id
 * body: { name, email } (both required)
 * 200 -> updated user
 * 400 if missing fields
 * 404 if not found
 */
app.put('/users/:id', (req, res) => {
  const { name, email } = req.body || {};
  if (!name || !email) return badRequest(res, 'name and email are required');

  const idx = users.findIndex(u => u.id === req.params.id);
  if (idx === -1) return notFound(res, 'user not found');

  users[idx] = { ...users[idx], name, email };
  return res.json(users[idx]);
});

/**
 * 4) Delete a User
 * DELETE /users/:id
 * 204 no body
 * 404 if not found
 */
app.delete('/users/:id', (req, res) => {
  const idx = users.findIndex(u => u.id === req.params.id);
  if (idx === -1) return notFound(res, 'user not found');

  users.splice(idx, 1);
  return res.status(204).send();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server (only if not in test mode)
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

module.exports = app; // Export the app for testing
