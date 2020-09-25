import React, { Component } from "react";
import API from "../../utils/API"
import "./style.css";
import EmployeeRow from "../EmployeeRow";
// import Wrapper from "../Wrapper";

// function EmployeeRow(props) {
class EmployeeGrid extends Component {
    state = {
        result: {}
    };


    // <div>Employee Data here...</div>
    componentDidMount() {
        this.listEmployees()
        // console.log(this.state.result);
    };

    listEmployees = () => {
        API.getEmployees()
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };



    /* <EmployeeRow employees={this.state.result} /> */

    // console.log(this.state.result);
    // renderEmployees = () => {
    //     employeeList.map(employee => (
    //         <EmployeeRow
    //             id={employee.[4[1]]}
    //             key={employee.[4[1]]}
    //             picture={employee.[5[2]]}
    //             first={employee.[0[1]]}
    //             last={employee.[0[2]]}
    //             phone={employee.[3]}
    //             email={employee.[1]}
    //             dob={employee.[2[0]]}
    //         />
    //     ))
    // }

    render() {
        return (
            {
                renderEmployees() {
                    this.state.result.map(employee => (
                        <EmployeeRow
                            id={employee.id.value}
                            key={employee.id.value}
                            picture={employee.picture.thumbnail}
                            first={employee.name.first}
                            last={employee.name.last}
                            phone={employee.phone}
                            email={employee.email}
                            dob={employee.dob.date}
                        />
                    ))
                }
            }
        )


    };
};



export default EmployeeGrid;