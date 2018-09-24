import React from "react";
import "./Wrapper.css";
// import Navbar from "../Navbar"

const Wrapper = props => <div className="wrapper container-fluid">
    <div className='row'>
        {props.children}
    </div>
</div>;

export default Wrapper;
