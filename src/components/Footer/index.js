import React from "react";
import "./style.css";

// Footer is a static, stateless functional component
function Footer() {
    return (
        <footer className="footer">
            <span>Employee Directory &copy; 2020&nbsp;&nbsp;|&nbsp;&nbsp;<em>A <i className="fab fa-react"></i> React.JS Proof-of-Concept from ChartRoom Creative</em></span>
        </footer>
    );
}

export default Footer;