import React from 'react';
import Employee from './Employee';

function EmployeeTable(props) {
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
                    <tr key={employee.login.uuid}>
                        <Employee
                            image={employee.picture.medium}
                            firstName={employee.name.first}
                            lastName={employee.name.last}
                            phone={employee.phone}
                            email={employee.email}
                            dob={employee.dob.date}
                        />
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default EmployeeTable;
