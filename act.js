{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "hashedPassword",
    "role": "Admin",
    "permissions": ["permission1", "permission2"]
  }
  


  Get All Users:
Endpoint: GET /api/users
Description: Retrieves a list of all users in the system.
Response: Status 200 with an array of user objects.
Get User by ID:
Endpoint: GET /api/users/:id
Description: Retrieves a specific user by their ID.
Response: Status 200 with the user object corresponding to the ID.
Update User:
Endpoint: PUT /api/users/:id
Description: Updates a specific user's information.
Request Body: Same as the 'Create User' endpoint.
Response: Status 200 with the updated user object.
Delete User:
Endpoint: DELETE /api/users/:id
Description: Deletes a specific user from the system.
Response: Status 204 (No Content) on successful deletion.
Login:
Endpoint: POST /api/login
Description: Authenticates users based on credentials.
Request Body:
{
    "email": "john@example.com",
    "password": "hashedPassword"
  }
  