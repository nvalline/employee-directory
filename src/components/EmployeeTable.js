import React from 'react';
import Employee from './Employee';

function EmployeeTable(props) {
    console.log("PROPS:", props)
    return (
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map(employee => (
                    <Employee
                        id={employee.login.uuid}
                        image={employee.picture.medium}
                        firstName={employee.name.first}
                        lastName={employee.name.last}
                        phone={employee.phone}
                        email={employee.email}
                        dob={employee.dob.date}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default EmployeeTable;
