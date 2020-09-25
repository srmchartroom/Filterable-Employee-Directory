import React from "react";
import "./style.css";

function Header() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">
                    Employee Directory
                </h1>
                <p className="lead">
                    Filter and Search the Employee Listings
                </p>
            </div>
        </div>
    );
}

export default Header;