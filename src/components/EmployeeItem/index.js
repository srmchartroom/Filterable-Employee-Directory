import React from "react";
import "./style.css";

function EmployeeItem(props) {
    //"this" only exists inside a class component.
    // console.log(props.employee);
    return (
        <div key={props.employee.key} className="row mt-0 border-top">
            <div className="col col-md-2 h-100 text-center empColPicture">
                <div className="mt-3 mb-3">
                    <img alt={props.employee.name} className="img-fluid rounded-circle border border-dark" src={props.employee.picture} style={{ margin: "0 auto" }} />
                </div>
            </div>
            <div className="col col-md-3 text-center border-left min-h-100 empColName">
                <div className="pt-5">
                    <h6 className="">
                        {`${props.employee.name}`}
                    </h6>
                </div>
            </div>
            <div className="col col-md-2 text-center border-left min-h-100 empColTel">
                <div className="pt-5">
                    <a href={`tel:${props.employee.phone}`}><h6>{props.employee.phone}</h6></a>
                </div>
            </div>
            <div className="col col-md-3 text-center border-left min-h-100 empColEmail">
                <div className="pt-5">
                    <h6><a href={`mailto:${props.employee.email}`}> {props.employee.email}</a></h6>
                </div>
            </div>
            <div className="col col-md-2 text-center border-left min-h-100 empColDob">
                <div className="pt-5">
                    <h6>{props.employee.dob}</h6>
                </div>
            </div>
        </div>
    )
}


export default EmployeeItem;