# xcelore-upgraded-waddle

User Management API Documentation

<h1>Backend Tech Stack </h1>
Node.js: Server-side JavaScript runtime environment.
Express: Web application framework for Node.js.
MongoDB: NoSQL database for storing user data.
Mongoose: ODM (Object Data Modeling) library for MongoDB.
JWT (JSON Web Tokens): Used for user authentication.
bcrypt: Hashing library for securely storing passwords.
<h1>Frontend Tech Stack</h1>
React: JavaScript library for building user interfaces.
Tailwind CSS: Utility-first CSS framework for styling.
Context API: State management for sharing data across components.
Axios: HTTP client for making API requests.
<h1>Getting Started</h1>
Clone this repository.
Set up your MongoDB database.
Install dependencies using npm install.
Configure environment variables (e.g., JWT secret, MongoDB connection string).
Run the backend server using npm run start.
Navigate to the client directory and run the React app using npm start.

<br/>

Introduction The User Management API allows you to manage user accounts within your application. You can perform actions such as creating new users, updating user profiles, and deactivating or deleting accounts.

Authentication Before using the API, you’ll need to authenticate. Obtain an API key or token by following the authentication process outlined in the official documentation.

The User Base Url:- /api/v1/user
<br/>

For The Auth Base Url :-/api/v1/auth

<H1>AUTH Endpoints </H1>
<br/>

1 Register user

Endpoint POST /register

2 Login User

Endpoint POST /login

<h1> USER Endpoints </h1>

Get User Profile Retrieve information about a specific user.
Endpoint:

GET /get-profile

GET /get-all-profile

Create User
Endpoint:

POST /create-profile

Update User Profile
Endpoint:

PUT /update-profile/:id

Delete User Profile
Endpoint:

DELETE /delete-profile/:id

This documentation provides an overview of the User Management API and its endpoints.
