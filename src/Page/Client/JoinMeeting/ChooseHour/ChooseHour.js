import React from "react";
import {Link} from "react-router-dom";

export default function ChooseHour() {
    return(
        <div>
            <h1>Choose Hour</h1>
            <Link to="/choose-user">to choose user</Link>
        </div>
    );
}