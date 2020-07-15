import React from 'react';
import Employee from './Employee';

function EmployeeTable({ result, search, sortAscending, sortDescending }) {
    let filteredEmployees = result.filter(
        (employee) => {
            let fullName = employee.name.first + " " + employee.name.last;
            return fullName.toLowerCase().indexOf(search) !== -1;
        }
    )

    return (
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name
                        <i onClick={() => (sortDescending())} className="fas fa-caret-down"></i>
                        <i onClick={() => (sortAscending())} className="fas fa-caret-up"></i>
                    </th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
            </thead>
            <tbody>
                {filteredEmployees.map(employee => (
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
