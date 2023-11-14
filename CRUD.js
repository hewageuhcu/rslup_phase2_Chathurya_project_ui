function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Login successful:', data);
        // Save the token in a secure way (e.g., localStorage) for future requests
        localStorage.setItem('token', data.token);
    })
    .catch(error => console.error('Error logging in:', error));
}

// Function to set the Authorization header with the saved token
function setAuthHeader() {
    const token = localStorage.getItem('token');
    if (token) {
        return { 'Authorization': token };
    }
    return {};
}

function createUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...setAuthHeader(), // Include the Authorization header
        },
        body: JSON.stringify({
            username,
            password,
        }),
    })
    .then(response => response.json())
    .then(data => console.log('User created:', data))
    .catch(error => console.error('Error creating user:', error));
}

function readUsers() {
    fetch('/api/users', {
        headers: setAuthHeader(), // Include the Authorization header
    })
    .then(response => response.json())
    .then(data => console.log('Users:', data))
    .catch(error => console.error('Error fetching users:', error));
}

function updateUser() {
    const userId = prompt('Enter user ID to update:');
    const newPassword = prompt('Enter new password:');

    fetch(`/api/users/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            ...setAuthHeader(), // Include the Authorization header
        },
        body: JSON.stringify({
            password: newPassword,
        }),
    })
    .then(response => response.json())
    .then(data => console.log('User updated:', data))
    .catch(error => console.error('Error updating user:', error));
}

function deleteUser() {
    const userId = prompt('Enter user ID to delete:');

    fetch(`/api/users/${userId}`, {
        method: 'DELETE',
        headers: setAuthHeader(), // Include the Authorization header
    })
    .then(response => response.json())
    .then(data => console.log('User deleted:', data))
    .catch(error => console.error('Error deleting user:', error));
}
