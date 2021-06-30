export async function getAllAppointments() {
    try {
        const response = await fetch('/api/appointments');
        return await response.json();
    } catch(error) {
        console.log('failed to get all appointments: ', error);
    }
}

export async function getAppointment(id) {
    try {
        const response = await fetch(`/api/appointments/${id}`);
        return await response.json();
    } catch(error) {
        console.log(`failed to get appointment with id [${id}]: `, error);
    }
}

export async function deleteAppointment(id) {
    try {
        const response = await fetch(`/api/appointments/${id}`, {
            method: 'DELETE'
        });
        return await response.json();
    } catch(error) {
        console.log(`failed to delete appointment with id [${id}]: `, error);
    }
}

export async function createAppointment(newAppointment) {
    try {
        const response = await fetch('/api/appointment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ appointment: newAppointment })
        });
        return await response.json();
    } catch(error) {
        console.log('failed to create appointment: ', error);
    }
}