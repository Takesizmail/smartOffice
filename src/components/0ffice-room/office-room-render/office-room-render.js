import React from 'react'
import './office-room-render.scss'
import BreadCrumbs from "../bread-crumbs";
import RoomSwitch from "../room-switch";
import {connect} from 'react-redux'

const OfficeRoomRender = ({contentType,paramsOfRoom}) =>{
    return(
        <div className='room'>
            <div className="room_navigation">
                <BreadCrumbs/>
                <div className="room_number">
                    {`room ${paramsOfRoom.roomName}`}
                </div>
                <RoomSwitch/>
            </div>
            {contentType}
        </div>
    )
};
const mapStateToProps = ({paramsOfRoom})=>{
    return{
        paramsOfRoom
    }
};



export default connect(mapStateToProps)(OfficeRoomRender)