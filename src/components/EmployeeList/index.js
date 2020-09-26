import React, { useState, useEffect } from "react";
import "./style.css";
import EmployeeItem from "../EmployeeItem";
// import API from "../../utils/API";

function EmployeeList(props) {
    const [nameSortDirection, setNameSortDirection] = useState('ascend');
    const [dobSortDirection, setDobSortDirection] = useState('ascend');
    const [sortedEmployees, setSortedEmployees] = useState(props.presortEmployees);

    useEffect(() => {
        setSortedEmployees(props.presortEmployees);
    }, [props]);

    const handleNameSortArrow = () => {
        if (nameSortDirection === "descend") {
            setNameSortDirection('ascend');
            setSortedEmployees(props.descendNameEmployees);
            return;
        } else {
            // if (nameSortDirection === "ascend") {
            setNameSortDirection('descend');
            setSortedEmployees(props.ascendNameEmployees);
            return;
        }
    }

    const handleDobSortArrow = () => {
        if (nameSortDirection === "descend") {
            setDobSortDirection('ascend');
            setSortedEmployees(props.descendNameEmployees);

            return;
        } else {
            // if (dobSortDirection === "ascend") {
            setDobSortDirection('descend');
            setSortedEmployees(props.ascendNameEmployees);
            return;
        }
    }

    const renderEmployees = () => {
        console.log(sortedEmployees);
        console.log(props.presortEmployees);

        return sortedEmployees.map(employee => (
            <EmployeeItem
                key={employee.id.value}
                employee={employee}
            />
        ))
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <span><strong>Employee Image</strong></span>
                </div>
                <div className="col-5">
                    <button onClick={handleNameSortArrow} className="btn btn-primary mt-3" sort={nameSortDirection}>
                        <span>{nameSortDirection === 'ascend' ? <i className="fas fa-caret-up"></i> : <i className="fas fa-caret-down"></i>}</span>
                    </button>
                    {' '}
                    <span><strong>Employee Name</strong></span>
                </div>
                <div className="col-5">
                    <span><strong>Phone</strong></span>
                </div>
                <div className="col-5">
                    <span><strong>Email</strong></span>
                </div>
                <div className="col-5">
                    <button onClick={handleDobSortArrow} className="btn btn-primary mt-3" sort={dobSortDirection}>
                        <span>{dobSortDirection === 'ascend' ? <i className="fas fa-caret-up"></i> : <i className="fas fa-caret-down"></i>}</span>
                    </button>
                    {' '}
                    <span><strong>Date of Birth</strong></span>
                </div>
            </div>
            <div>
                {renderEmployees()}
            </div>
        </div>
    );
}


export default EmployeeList;