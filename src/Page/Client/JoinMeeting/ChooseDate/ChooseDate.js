import React from "react";
import {Link} from "react-router-dom";

export default function ChooseDate() {
    return(
        <div>
            <h1>Choose Date</h1>
            <Link to="/choose-hour">to choose hour</Link>
        </div>
    );
}