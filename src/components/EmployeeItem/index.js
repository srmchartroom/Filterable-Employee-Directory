import React from "react";
import "./style.css";

function EmployeeItem(props) {
    //"this" only exists inside a class component.
    console.log(props.employee);
    return (
        <div className="row">
            <div className="col">
                <img alt={props.employee.name} className="img-fluid" src={props.employee.picture} style={{ margin: "0 auto" }} />
            </div>
            <div className="col">
                {`${props.employee.name}`}
            </div>
            <div className="col">
                {props.employee.phone}
            </div>
            <div className="col">
                {props.employee.email}
            </div>
            <div className="col">
                {props.employee.dob}
            </div>
        </div>
    )
}


export default EmployeeItem;


// import React from "react";
// import "./style.css";


// function EmployeeItem(props) {
//     //"this" only exists inside a class component.
//     console.log("EmployeeItem:");
//     console.log(props.employee);
//     console.log(props.employee.key);
//     return (
//         <div className="row" key={props.employee.key}>
//             <div className="col" >
//                 <img alt={props.employee.name} className="img-fluid" src={props.employee.picture} style={{ margin: "0 auto" }} />
//             </div>
//             <div className="col" >
//                 {props.employee.name}
//             </div>
//             <div className="col" >
//                 {props.employee.phone}
//             </div>
//             <div className="col" >
//                 {props.employee.email}
//             </div>
//             <div className="col" >
//                 {props.employee.dob}
//             </div>
//         </div>
//     )
// }


// export default EmployeeItem;