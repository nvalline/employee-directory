import React, { Component } from 'react'

export class EmployeeSearch extends Component {
    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Enter Employee Name"
                    name="employeeName"
                // onChange={}
                />
            </form>
        )
    }
}

export default EmployeeSearch;
