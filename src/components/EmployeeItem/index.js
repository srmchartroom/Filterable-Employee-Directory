import React from "react";
import "./style.css";

function EmployeeItem(props) {
    //"this" only exists inside a class component.
    console.log(props.employee);
    return (
        <div className="row">
            <div className="col-5">
                <img alt={`${props.employee.name.first} ${props.employee.name.last}`} className="img-fluid" src={props.employee.picture.thumbnail} style={{ margin: "0 auto" }} />
            </div>
            <div className="col-5">
                {`${props.employee.name.first} ${props.employee.name.last}`}
            </div>
            <div className="col-5">
                {props.employee.phone}
            </div>
            <div className="col-5">
                {props.employee.email}
            </div>
            <div className="col-5">
                {props.employee.dob.date}
            </div>
        </div>
    )
}


export default EmployeeItem;