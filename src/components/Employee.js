import React from 'react'
import Moment from 'react-moment';

function Employee(props) {
    return (
        <tr key={props.id}>
            <td><img src={props.image} alt="Profile" /></td>
            <td>{props.firstName} {props.lastName}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td><Moment format="LL">{props.dob}</Moment></td>
        </tr>
    )
}

export default Employee
