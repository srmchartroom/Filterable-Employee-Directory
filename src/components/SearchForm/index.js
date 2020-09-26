import React from "react";
import "./style.css";

function SearchForm(props) {

    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="search">Search for a specific employee...</label>
                    <input
                        onChange={props.handleInputChange}
                        value={props.search}
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Search for a specific employee..."
                        id="search"
                    />
                    <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SearchForm;