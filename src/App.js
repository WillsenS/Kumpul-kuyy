import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavbarKuy from "./Component/Navbar/NavbarKuy";


import FormRoom from "./Page/Client/CreateMeeting/FormRoom/FormRoom";
import ChooseDate from "./Page/Client/JoinMeeting/ChooseDate/ChooseDate";
import FormCreateRoom from "./Page/Admin/RoomOwner/FormAddRoom/FormAddRoom";
import FormCalendar from "./Page/Client/CreateMeeting/FormCalendar/FormCalendar";
import URLShare from "./Page/Client/CreateMeeting/URLShare/URLShare";
import ChooseHour from "./Page/Client/JoinMeeting/ChooseHour/ChooseHour";
import ChooseUser from "./Page/Client/JoinMeeting/ChooseUser/ChooseUser";
import CreateFloorPlan from "./Page/Admin/RoomOwner/CreateFloorPlan/CreateFloorPlan";
import RoomStatus from "./Page/Admin/OrderRoom/RoomStatus/RoomStatus";
import RoomFloorPlan from "./Page/Admin/OrderRoom/RoomFloorPlan/RoomFloorPlan";

export default function App() {
  return (
      <Router>
        <div>
          <NavbarKuy />

          <Switch>

            {/*Functional 1: Johanes*/}
            <Route exact path="/form-room">
              <FormRoom />
            </Route>
            <Route path="/form-calendar">
              <FormCalendar/>
            </Route>
            <Route path="/url-sharing">
              <URLShare />
            </Route>


            {/*Functional 4: Leonardo*/}
            <Route path="/choose-date">
              <ChooseDate />
            </Route>
            <Route path="/choose-hour">
              <ChooseHour />
            </Route>
            <Route path="/choose-user">
              <ChooseUser />
            </Route>

            {/*Functional 2: Wilsen*/}
            <Route path="/order-room">
              <RoomStatus />
            </Route>
            <Route path="/room-floor-plan">
              <RoomFloorPlan />
            </Route>


            {/*Functional 3: Ferdi*/}
            <Route path="/create-room">
              <FormCreateRoom />
            </Route>
            <Route path="/create-floor-plan">
              <CreateFloorPlan />
            </Route>

          </Switch>

        </div>
      </Router>
  );
}
