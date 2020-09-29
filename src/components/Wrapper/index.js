import React from "react";
import "./style.css";

function Wrapper(props) {
    return <div className="wrapper mx-0 px-0">{props.children}</div>;
}

export default Wrapper;