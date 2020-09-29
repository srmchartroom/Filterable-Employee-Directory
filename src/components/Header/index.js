import React from "react";
import "./style.css";

// Header is a static, stateless functional component
function Header(props) {
    return (
        <div className="jumbotron jumbotron-fluid shadow pb-3 mx-0 px-0">
            <div className="container">
                <h1 className="display-4">
                    Employee Directory
                </h1>
                <p className="lead">
                    Search &amp; Sort Employee Listings<br />
                </p>
            </div>
        </div>
    );
}

export default Header;