import React from 'react'

function EmployeeSearch(props) {
    return (
        <form>
            <input
                type="text"
                placeholder="Enter Employee Name"
                name="search"
                value={props.value}
                onChange={props.handleInputChange}
            />
        </form>
    )
}

export default EmployeeSearch;
