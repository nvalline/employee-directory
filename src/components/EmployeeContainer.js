import React, { Component } from 'react';
import EmployeeSearch from './EmployeeSearch';
import EmployeeTable from './EmployeeTable';
import API from '../utils/API';

export class EmployeeContainer extends Component {
    state = {
        result: [],
        search: []
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

    handleInputChange = (event) => {
        const value = event.target.value;
        this.setState({
            search: value
        })
    }

    render() {
        return (
            <div>
                <EmployeeSearch
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                />
                <EmployeeTable
                    data={this.state.result}
                />
            </div>
        )
    }
}

export default EmployeeContainer;
