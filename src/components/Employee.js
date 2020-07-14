import React from 'react'

function Employee(props) {
    console.log("PROPS:", props)
    return (
        <tr>
            <td>{props.firstName}</td>
        </tr>
    )
}

export default Employee
