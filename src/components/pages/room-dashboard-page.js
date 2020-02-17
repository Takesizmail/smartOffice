import React from 'react'
import RoomDashboard from "../room-dashboard";
import Loader from "../loader";


const RoomDashboardPage = () =>{
    return(
        <React.Fragment>
            <RoomDashboard/>
            <Loader/>
        </React.Fragment>
    )
};
export default RoomDashboardPage