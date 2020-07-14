import React, { Component } from 'react';
import EmployeeSearch from './EmployeeSearch';
import EmployeeTable from './EmployeeTable';
import API from '../utils/API';

export class EmployeeContainer extends Component {
    state = {
        result: [],
        search: ""
    }

    componentDidMount() {
        this.getEmployees();
    };

    getEmployees() {
        API.search()
            .then(res => {
                this.setState({ result: res.data.results })
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <EmployeeSearch />
                <EmployeeTable
                    data={this.state.result}
                />
            </div>
        )
    }
}

export default EmployeeContainer;