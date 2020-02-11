import React,{Component} from 'react'
import RoomDashboardRender from "../room-dashboard-render";
import {connect} from 'react-redux'
import OverviewContainer from "../../overview/overview-container";
import Analysis from "../../analysis";

class RoomDashboardContainer extends Component{


    render() {
        const {switchState} = this.props;
        const contentType = switchState === 'overview' ? <OverviewContainer/> : <Analysis/>;
        return(
            <RoomDashboardRender contentType={contentType}/>
        )
    }
}

const mapStateToProps = ({switchState}) =>{
    return {
        switchState
    }
};
const mapDispatchToProps = {

};
export default connect(mapStateToProps)(RoomDashboardContainer)