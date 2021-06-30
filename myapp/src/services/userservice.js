export async function getAllUsers() {
    try {
        const response = await fetch('/api/users');
        return await response.json();
    } catch(error) {
        console.log('failed to get all users: ', error);
    }
}

export async function getUser(userid) {
    try {
        const response = await fetch(`/api/users/${userid}`);
        return await response.json();
    } catch(error) {
        console.log(`failed to get user with id [${userid}]: `, error);
    }
}

export async function createUser(newUser) {
    try {
        const response = await fetch('/api/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user: newUser })
        });
        return await response.json();
    } catch(error) {
        console.log('failed to create user: ', error);
    }
}