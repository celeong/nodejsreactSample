import React, { useState, useEffect } from 'react';
import { getAppointment } from '../../services/appointmentService';

export const AppointmentDetail = (appointment) => {
    const [state, setState] = useState({});
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        getAppointment(appointment.appointment).then(
            res => {
                setState(res[0]);
                console.log(res[0]);
            }
        ).catch(err => setHasError(true));
    }, []);

    return (
        <div>
            <h1>Appointment</h1>
            <ul>
                <li>Date: {state.date}</li>
                <li>Time: {state.time}</li>
                <li>Name: {state.name}</li>
                <li>Details: {state.details}</li>
            </ul>
        </div>
    );
};
