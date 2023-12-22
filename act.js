User Management:
Create User: POST /api/users
Get All Users: GET /api/users
Get User by ID: GET /api/users/:id
Update User: PUT /api/users/:id
Delete User: DELETE /api/users/:id
Login: POST /api/login
Passenger Management:
Create Passenger Profile: POST /api/passengers
Get Passenger Profile: GET /api/passengers/:id
Update Passenger Profile: PUT /api/passengers/:id
Delete Passenger Profile: DELETE /api/passengers/:id
Reservation and Ticketing:
Search Flights: GET /api/flights
Get Available Seats for a Flight: GET /api/flights/:id/seats
Make Reservation: POST /api/reservations
Issue Ticket: POST /api/tickets
Handle Refunds: PUT /api/tickets/:id/refund
Manage Bookings: PUT /api/bookings/:id
Flight Management:
Create Flight: POST /api/flights
Get All Flights: GET /api/flights
Get Flight by ID: GET /api/flights/:id
Update Flight: PUT /api/flights/:id
Delete Flight: DELETE /api/flights/:id