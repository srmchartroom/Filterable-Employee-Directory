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
        if (dobSortDirection === "descend") {
            setDobSortDirection('ascend');
            setSortedEmployees(props.descendDobEmployees);
            return;
        } else {
            // if (dobSortDirection === "ascend") {
            setDobSortDirection('descend');
            setSortedEmployees(props.ascendDobEmployees);
            return;
        }
    }

    const renderEmployees = () => {
        console.log(sortedEmployees);
        console.log(props.presortEmployees);

        return sortedEmployees.map(employee => (
            <EmployeeItem
                key={employee.key}
                employee={employee}
            />
        ))
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <span><strong>Employee Image</strong></span>
                </div>
                <div className="col">
                    <button onClick={handleNameSortArrow} className="btn" sort={nameSortDirection}>
                        <span>{nameSortDirection === 'ascend' ? <i className="fas fa-caret-up"></i> : <i className="fas fa-caret-down"></i>}</span>
                    </button>
                    {' '}
                    <span><strong>Employee Name</strong></span>
                </div>
                <div className="col">
                    <span><strong>Phone</strong></span>
                </div>
                <div className="col">
                    <span><strong>Email</strong></span>
                </div>
                <div className="col">
                    <button onClick={handleDobSortArrow} className="btn" sort={dobSortDirection}>
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

// import React, { useState, useEffect } from "react";
// import "./style.css";
// import EmployeeItem from "../EmployeeItem";
// // import EmployeeContext from "../../utils/EmployeeContext";


// function EmployeeList(props) {
//     const [filteredEmployees, setFilteredEmployees] = useState([]);
//     const [filteredByName, setFilteredByName] = useState([]);
//     const [filteredByDob, setFilteredByDob] = useState([]);

//     console.log("useState:filteredEmployees");
//     console.log(filteredEmployees);
//     console.log("useState:filteredByName");
//     console.log(filteredByName);
//     console.log("useState:filteredByDob");
//     console.log(filteredByDob);


//     useEffect(() => {
//         setFilteredEmployees(props.presortEmployees);
//         setFilteredByName(props.presortEmployees);
//         setFilteredByDob(props.dobFiltered);

//     }, [filteredEmployees, props.presortEmployees, props.dobFiltered, props.revDobFiltered]);


//     // const ascendBtn = "fas fa-caret-up"
//     // const descendBtn = "fas fa-caret-down"

//     // const nameFiltered = (() => {
//     //     return (
//     //         [props.presortEmployees].sort((a, b) => {
//     //             return b.alphaOrder - a.alphaOrder;
//     //         })
//     //     )
//     // });

//     // console.log("NameFiltered");
//     // console.log(nameFiltered());

//     // const revNameFiltered = [nameFiltered()].reverse();
//     // console.log("revNameFiltered");
//     // console.log(revNameFiltered);


//     console.log("dobFiltered");
//     console.log(props.dobFiltered);

//     // const revDobFiltered = (() => {
//     //     let dobEmp = props.presortEmployees
//     //     let dobEmpSort = [dobEmp].sort((a, b) => {
//     //         return a.compareDob < b.compareDob ? 1 : (a.compareDob > b.compareDob ? -1 : 0)
//     //     });
//     //     return dobEmpSort;
//     // })



//     console.log("revDobFiltered");
//     console.log(props.revDobFiltered);


//     // console.log('filteredByDOB:');
//     // console.log([state.filteredByDob]);
//     // console.log("filteredByName:");
//     // console.log([state.filteredByName]);
//     // console.log("filteredEmployees:");
//     // console.log([state.filteredEmployees]);



//     const renderEmployees = (() => {
//         [filteredEmployees].map(employee => (
//             <EmployeeItem
//                 key={employee.key}
//                 employee={employee}
//             />
//         ))
//     })

//     return (
//         <div className="container container-fluid" >
//             <div className="row">
//                 <div className="col">
//                     <span><strong>Employee Image</strong></span>
//                 </div>
//                 <div className="col">
//                     <button onClick={() => setFilteredByName("setName")} className="btn mt-3" id="nameArrowBtn" >
//                         {/* <span>{state.filteredEmployees === revNameFiltered ? <i className="fas fa-caret-up"></i> : <i className="fas fa-caret-down"></i>}</span> */}
//                         <span><i className="fas fa-caret-up"></i></span>
//                     </button>
//                     {' '}
//                     <span><strong>Employee Name</strong></span>
//                 </div>
//                 <div className="col">
//                     <span><strong>Phone</strong></span>
//                 </div>
//                 <div className="col">
//                     <span><strong>Email</strong></span>
//                 </div>
//                 <div className="col">
//                     <button onClick={() => setFilteredByDob(filteredEmployees === props.dobFiltered ? props.revDobFiltered : props.dobFiltered)} className="btn mt-3" id="dobArrowBtn" >
//                         {/* <span>{state.filteredEmployees === [revDobFiltered] ? <i className="fas fa-caret-up"></i> : <i className="fas fa-caret-down"></i>}</span> */}
//                         <span><i className="fas fa-caret-up"></i></span>
//                     </button>
//                     {' '}
//                     <span><strong>Date of Birth</strong></span>
//                 </div>
//             </div>
//             <div>
//                 {renderEmployees()}

//             </div>
//         </div >
//     );
// }
// // }


// export default EmployeeList;