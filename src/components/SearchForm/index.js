import React from "react";
import "./style.css";

function SearchForm(props) {

    return (
        <div>
            <form className="pl-0 ml-0">
                <div className="form-row align-items-center mb-4">
                    <div className="col-9 mb-auto mt-auto pt-3">{/* <label htmlFor="search"></label> */}
                        <input
                            onChange={props.handleInputChange}
                            value={props.search}
                            name="search"
                            type="text"
                            className="form-control"
                            placeholder="Search for a specific employee..."
                            id="search"
                        />
                    </div>
                    <div className="col-1 mb-auto mt-auto">
                        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                    <div className="col-2 mb-auto mt-auto">
                        <button onClick={props.handleFormReset} className="btn btn-primary mt-3">
                            Reset
                            </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SearchForm;