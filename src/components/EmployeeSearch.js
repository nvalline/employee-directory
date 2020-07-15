import React from 'react'

function EmployeeSearch(props) {
    return (
        <form>
            <div className="form-group my-5 mx-auto">
                <input
                    type="text"
                    placeholder="Enter Employee Name"
                    name="search"
                    value={props.value}
                    onChange={props.handleInputChange}
                    className="form-control"
                />
            </div>
        </form>
    )
}

export default EmployeeSearch;
