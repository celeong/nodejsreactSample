import React, { useState } from 'react';
import {
    Button
} from "@material-ui/core";
import { createAppointment } from '../../services/appointmentService';
import { useHistory } from "react-router-dom";

export const NewAppointment = () => {

    const [state, setState] = useState({
        date: "",
        time: "",
        name: "",
        details: "",
    });
    const history = useHistory();

    const handleInputChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleAdd = async e => {
        if (state.date === '' ||
            state.time === '' ||
            state.name === '') {
                alert('Please key in all values!');
                return;
            }

        await createAppointment(state);

        history.push("/appointment");
    };

    return (
        <div>
            <h1>Create new appointment</h1>
            <form>
            <ul>
                <li>
                    <label> Date: </label>
                    <input name="date" type="date"  value={state.date} onChange={ handleInputChange } />
                </li>
                <li>
                    <label>Time: </label>
                    <input name="time" type="time" value={state.time} onChange={ handleInputChange } />
                </li>
                <li>
                    <label>Name: </label>
                    <input name="name" type="text" value={state.name} onChange={ handleInputChange } />
                </li>
                <li>
                    <label>Details: </label>
                    <textarea name="details" value={state.details} onChange={ handleInputChange } />
                </li>
            </ul>
            </form>

            <Button onClick={() => handleAdd()}>Add</Button>

            <ul>
                <li>Date: {state.date}</li>
                <li>Time: {state.time}</li>
                <li>Name: {state.name}</li>
                <li>Details: {state.details}</li>
            </ul>
        </div>
    );
};
