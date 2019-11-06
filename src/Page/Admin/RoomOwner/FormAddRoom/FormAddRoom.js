import React from "react";
import {Link} from "react-router-dom";

export default function FormAddRoom() {
    return(
        <div>
            <h1>Form add room</h1>
            <Link to="/create-floor-plan">Create floor plan</Link>
        </div>
    );
}