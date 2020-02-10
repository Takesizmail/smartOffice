import React from 'react'
import './room-dashboard-render.scss'
import BreadCrumbs from "../bread-crumbs";
import RoomSwitch from "../room-switch";
import OverviewContainer from "../../overview/overview-container";
const RoomDashboardRender = () =>{
    const room = ['room 301'];
    return(
        <div className='room'>
            <div className="room_navigation">
                <BreadCrumbs/>
                <div className="room_number">
                    {room}
                </div>
                <RoomSwitch/>
            </div>
            <OverviewContainer/>

        </div>
    )
};
export default RoomDashboardRender