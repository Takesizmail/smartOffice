import React from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
const BreadCrumbs = ({paramsOfRoom,match}) =>{

    const linkList = [{
        name: paramsOfRoom.unitName,
        to : '/',
    },{
        name: `floor ${paramsOfRoom.floor}`,
        to : '/office-map/',
    },{
        name : `room ${paramsOfRoom.roomName}`,
        to : `${match.url}`
    }];
    // остання силка на сaмого себе

    return(
        <div className='bread_crumbs'>
            {linkList.map(({name,to}) =>
                <Link
                    className='bread_crumbs_link'
                    key={name}
                        to={to}
                >

                    {name}
                </Link>)}
        </div>
    )
};
const mapStateToProps = ({paramsOfRoom})=>{
    return{
        paramsOfRoom
    }
};
export default connect(mapStateToProps)(withRouter(BreadCrumbs))