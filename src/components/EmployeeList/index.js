import React, { useState, useEffect } from "react";
import "./style.css";
import EmployeeItem from "../EmployeeItem";
import Header from "../Header";
import SearchForm from "../SearchForm";
// import API from "../../utils/API";

function EmployeeList(props) {
    const [nameSortDirection, setNameSortDirection] = useState('descend');
    const [dobSortDirection, setDobSortDirection] = useState('descend');
    const [sortedEmployees, setSortedEmployees] = useState([]);
    const [search, setSearch] = useState('');

    const renderEmployees = (sortedEmployees) => {
        return sortedEmployees.map(employee => (
            <EmployeeItem
                key={employee.key}
                employee={employee}
            />
        ))
    }

    useEffect(() => {
        setSortedEmployees(props.presortEmployees);
        // setSearch('')
        // renderEmployees(sortedEmployees);
    }, [props]);

    const handleNameSortArrow = () => {
        if (nameSortDirection === "descend" && !search) {
            setNameSortDirection('ascend');
            setSortedEmployees(props.descendNameEmployees);
            return;
        }
        else if (nameSortDirection === "descend" && search) {
            setNameSortDirection('ascend');
            const descSort = props.namesortDesc;
            const descSorted = descSort(sortedEmployees);
            return setSortedEmployees(descSorted);
        } else if (nameSortDirection === "ascend" && !search) {
            setNameSortDirection('descend');
            setSortedEmployees(props.ascendNameEmployees);
            return;
        } else if (nameSortDirection === "ascend" && search) {
            setNameSortDirection('descend');
            const ascSort = props.namesortAsc;
            const ascSorted = ascSort(sortedEmployees);
            return setSortedEmployees(ascSorted);
        } else {
            return;
        }
    }

    const handleDobSortArrow = () => {
        if (dobSortDirection === "descend" && !search) {
            setDobSortDirection('ascend');
            setSortedEmployees(props.descendDobEmployees);
            return;
        } else if (dobSortDirection === "descend" && search) {
            setDobSortDirection('ascend');
            const descSort = props.dobsortDesc;
            const descSorted = descSort(sortedEmployees);
            return setSortedEmployees(descSorted);
        } else if (dobSortDirection === "ascend" && !search) {
            setDobSortDirection('descend');
            setSortedEmployees(props.ascendDobEmployees);
            return;
        } else if (dobSortDirection === "ascend" && search) {
            setDobSortDirection('descend');
            const ascSort = props.dobsortAsc;
            const ascSorted = ascSort(sortedEmployees);
            return setSortedEmployees(ascSorted);
        }
    }


    const handleInputChange = ((event) => {
        setSearch(event.target.value);
        // console.log("handleFormSubmit > sortedEmployees: " + [sortedEmployees]);
        // if (search === "") {
        //     return renderEmployees(props.presortEmployees);
        // } else {
        //     return renderEmployees(sortedEmployees);
    });


    const handleSearch = (search) => {
        console.log("handleSearch > search: " + search);
        const newSort = sortedEmployees.filter(employee => {
            return employee.name.includes(search);
        })
        if (newSort.length < 1) {
            alert("No employees match. Please reset and try again.")
            setSearch("");
            return setSortedEmployees(props.presortEmployees);
        }
        return setSortedEmployees(newSort);
    };

    const handleFormSubmit = ((event) => {
        event.preventDefault();
        handleSearch(search);
        console.log("handleFormSubmit > sortedEmployees: " + [sortedEmployees]);
        return renderEmployees(sortedEmployees);
    });

    const handleFormReset = ((event) => {
        event.preventDefault();
        setSearch("");
        setSortedEmployees(props.presortEmployees);
        return renderEmployees(props.presortEmployees);
    })

    return (
        <div className="container-fluid mx-0 px-0">
            <div className="container-fluid mx-0 px-0">
                <Header />
            </div>
            <div className="container">
                <SearchForm handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} handleFormReset={handleFormReset} search={search} />
                <div className="row mt-0 border-top">
                    <div className="col col-md-2 py-3 text-center">
                        <span><strong>Employee Image</strong></span>
                    </div>
                    <div className="col col-md-3 py-3 text-center border-left">
                        <button onClick={handleNameSortArrow} className="btn p-0 m-0 sortBtn" sort={nameSortDirection}>
                            <span><strong>Employee Name&nbsp;&nbsp;</strong>{nameSortDirection === 'ascend' ? <i className="fas fa-caret-up"></i> : <i className="fas fa-caret-down"></i>}</span>
                        </button>
                    </div>
                    <div className="col col-md-2 py-3 text-center border-left">
                        <span><strong>Phone</strong></span>
                    </div>
                    <div className="col col-md-3 py-3 text-center border-left">
                        <span><strong>Email</strong></span>
                    </div>
                    <div className="col col-md-2 py-3 text-center border-left">
                        <button onClick={handleDobSortArrow} className="btn p-0 m-0 sortBtn" sort={dobSortDirection}>
                            <span><strong>Date of Birth&nbsp;&nbsp;</strong></span><span>{dobSortDirection === 'ascend' ? <i className="fas fa-caret-up"></i> : <i className="fas fa-caret-down"></i>}</span>
                        </button>
                    </div>
                </div>

                {renderEmployees(sortedEmployees)}
            </div>
        </div>
    );
}

export default EmployeeList;