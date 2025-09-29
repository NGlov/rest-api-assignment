## **🚀 Assignment: Build a Simple REST API Microservice**
### **Objective**
The goal of this assignment is to help you understand how a RESTful API works on the server-side using **Node.js** and **Express**. You will implement a microservice that allows users to be **created, retrieved, updated, and deleted**. The user data will be stored in memory (**no database required**).

---

## **📌 Getting Started: Create Your Repository from the Template**
Instead of forking, you will **create a new repository using this template**.

**Important** You will need NodeJS for this assignment. Be sure to install it if you have not already.

### ✅ **Follow These Steps**
1. Go to the **original assignment repository** on GitHub https://github.com/njit-prof-bill/microservice-api-js-template.
2. Click the **"Use this template"** button (green button at the top of the page).
3. Enter a **name for your new repository** (e.g., `rest-api-assignment`).
4. **Make sure the new repository is public** unless instructed otherwise.
5. Click **"Create repository from template"**.
6. Clone your new repository to your device.
7. Run `npm install` in your project folder.
8. Implement the API by following the specifications below. Use JavaScript on NodeJS.
9. Test your code; when done push your changes. Be sure you have merged to main.
10. ✅ GitHub Actions is **already enabled**, and your tests will run automatically when you push changes.
11. Post the URL to your repository on Canvas to submit your work.

---

## **📜 API Specification**
Your task is to implement the following API endpoints in `src/index.js`:

### **1. Create a User**
#### **POST `/users`**
##### **Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```
##### **Response (201 Created):**
```json
{
  "id": "a1b2c3d4",
  "name": "John Doe",
  "email": "john@example.com"
}
```
- The `id` must be **a unique string** (e.g., use `uuid`).
- Returns `400 Bad Request` if `name` or `email` is missing.

---

### **2. Retrieve a User**
#### **GET `/users/:id`**
##### **Example Request:**
```
GET /users/a1b2c3d4
```
##### **Response (200 OK):**
```json
{
  "id": "a1b2c3d4",
  "name": "John Doe",
  "email": "john@example.com"
}
```
- Returns `404 Not Found` if the user ID does not exist.

---

### **3. Update a User**
#### **PUT `/users/:id`**
##### **Request Body:**
```json
{
  "name": "John Updated",
  "email": "john.updated@example.com"
}
```
##### **Response (200 OK):**
```json
{
  "id": "a1b2c3d4",
  "name": "John Updated",
  "email": "john.updated@example.com"
}
```
- Returns `404 Not Found` if the user ID does not exist.
- Returns `400 Bad Request` if `name` or `email` is missing.

---

### **4. Delete a User**
#### **DELETE `/users/:id`**
##### **Example Request:**
```
DELETE /users/a1b2c3d4
```
##### **Response (204 No Content)**
- If the user is found and deleted, **no response body** is returned.
- Returns `404 Not Found` if the user ID does not exist.

---

## **⚙️ Implementation Requirements**
- Use an **in-memory array** to store users.
- Follow RESTful conventions for **HTTP methods and status codes**.
- Handle errors properly (`400`, `404`, etc.).
- Ensure all API responses are **structured correctly** as shown above.

---

## **🛠 Testing Your API**
### **Manual Testing**
Use **Postman**, **cURL**, or any HTTP client to test your API.

#### **Example cURL Request:**
```bash
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name":"Alice","email":"alice@example.com"}'
```

### **Automated Testing**
- The repository includes **automated tests** using **Jest** and **Supertest**.
- Run the tests with:
  ```bash
  npm test
  ```
- Ensure **all tests pass** before submitting your assignment.

---

## **📡 GitHub Actions & Hidden Tests**
- Your repository is configured with **GitHub Actions** to **automatically test your code when you push changes**.
- **Hidden test cases** will only run when your code is submitted (pushed to GitHub).
- Locally, you will only see public tests. If your submission fails hidden tests, you will need to debug based on test logs.

---

## **📤 Submission Instructions**
1. **Ensure your final implementation is pushed to the `main` branch of your repository**.
2. **Submit your GitHub repository URL** via the designated submission form.

Your repository should include:
✅ All required API endpoints
✅ Passing public tests (`npm test` runs locally)
✅ Clean, well-structured code

---

## **📊 Grading Rubric (Total: 5 Points)**
| **Criteria** | **Points** | **Description** |
|-------------|-----------|----------------|
| ✅ **POST /users works correctly** | **1 point** | API successfully creates users and returns correct responses. |
| ✅ **GET /users/:id works correctly** | **1 point** | Retrieves a user by ID and returns correct responses. |
| ✅ **PUT /users/:id works correctly** | **1 point** | Updates user details correctly and handles errors properly. |
| ✅ **DELETE /users/:id works correctly** | **1 point** | Successfully deletes users and returns correct responses. |
| ✅ **Error handling & correct HTTP status codes** | **1 point** | Returns proper status codes (`400`, `404`) when required. |

### **🔹 Notes on Grading**
- **Partial credit is possible** if an endpoint works but has minor issues.
- **If an endpoint does not function at all**, the student will receive **zero points for that endpoint**.
- **Tests must pass on GitHub Actions** for points to be awarded.

---

## **🔔 Additional Notes**
- Follow **good coding practices** (descriptive variable names, proper indentation, and clear structure).
- API should **use correct HTTP methods and status codes**.
- Your implementation **must not modify the test files (`user.test.js` and `.github/workflows/test.yml`)**.
- You are allowed to **add files and folders** if needed.

🚀 **Good luck!** 🎯
