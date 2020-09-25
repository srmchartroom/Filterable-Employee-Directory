import React from "react";
import "./style.css";

function EmployeeRow(props) {

    const handleNameConcat = (first, last) => {
        return (first + "" + last);
    };


    return (
        <div className="row">
            <div className="col-5">
                <img alt={handleNameConcat(props.first, props.last)} className="img-fluid" src={props.picture} style={{ margin: "0 auto" }} />
            </div>
            <div className="col-5">
                {handleNameConcat(props.first, props.last)}
            </div>
            <div className="col-5">
                {props.phone}
            </div>
            <div className="col-5">
                {props.email}
            </div>
            <div className="col-5">
                {props.dob}
            </div>
        </div>
    )

}

export default EmployeeRow;