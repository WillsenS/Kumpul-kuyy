import React from "react";
import {Link} from "react-router-dom";

export default function FormRoom() {
    return(
        <div>
            <h1>Form Room</h1>
            <Link to="/form-calendar">to calendar room</Link>
        </div>
    );
}