# xcelore-upgraded-waddle

User Management API Documentation

<h1>Start The Local Server To Connect The Database In Server Folder To Front-End In Client Folder  </h1>

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
