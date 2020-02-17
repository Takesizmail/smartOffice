import React,{Component} from 'react'
import RoomDashboardRender from "../office-room-render";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {withSmartOfficeApi} from "../../hoc";
import OverviewContainer from "../../overview/overview-container";
import Analysis from "../../analysis";
import {paramsRoomLoaded} from "../../../actions/actions";

class OfficeRoomContainer extends Component{

    componentDidMount() {
        const {services,match,paramsRoomLoaded} = this.props;

        services.getApiRooms(match.params.id).then(el=> paramsRoomLoaded(el.data));

    }

    render() {
        const {switchState} = this.props;
        const contentType = switchState === 'overview' ? <OverviewContainer/> : <Analysis/>;
        return(
            <RoomDashboardRender contentType={contentType}/>
        )
    }
}

const mapStateToProps = ({switchState,paramsOfRoom}) =>{
    return {
        switchState,paramsOfRoom
    }
};
const mapDispatchToProps = {
    paramsRoomLoaded
};
export default connect(mapStateToProps,mapDispatchToProps)(withSmartOfficeApi()(withRouter(OfficeRoomContainer)))