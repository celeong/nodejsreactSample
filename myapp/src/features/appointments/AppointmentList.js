import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {
    Button
} from "@material-ui/core";
import { getAllAppointments, deleteAppointment } from '../../services/appointmentService';

export const AppointmentList = () => {
    const [state, setState] = useState([]);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        getAllAppointments().then(
            res => {
                if (res === undefined)
                    return;
                setState(res);
                console.log(res);
            }
        ).catch(err => setHasError(true));
    }, []);

    async function handleDelete(id) {
        const item = await deleteAppointment(id);
        if (item.ok) {
            let filteredArray = state.filter(item => item._id !== id);
            setState(filteredArray);
        }
    };

    const AppointmentRow = (item, index) => {
        const link = `appointment/${item._id}`;
        return (
              <tr key = {index} className={index % 2 === 0 ? 'odd' : 'even'}>
                  <td><Link to={link} >{index + 1}</Link></td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td>{item.name}</td>
                  <td>
                      <Button onClick={() => handleDelete(item._id)}>Delete</Button>
                  </td>
              </tr>
          );
    };

    const table = state.map((item, index) => AppointmentRow(item, index));

    return (
        <div className="container">
            <h2>Appointments</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th/>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Name</th>
                    <th/>
                </tr>
                </thead>
                <tbody>
                    {table}
                </tbody>
            </table>

            <Button 
                {...{
                    color: "inherit",
                    to: "/appointment/new",
                    component: Link,
                }}>
                Add new
            </Button>

        </div>
    );
};

