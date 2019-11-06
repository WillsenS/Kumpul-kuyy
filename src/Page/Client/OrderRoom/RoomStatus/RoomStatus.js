import React from "react";
import {Link} from "react-router-dom";

export default function RoomStatus() {
    return(
        <div>
            <h1>Room Status</h1>
            <Link to="/room-floor-plan">to room floor plan</Link>
        </div>
    );
}