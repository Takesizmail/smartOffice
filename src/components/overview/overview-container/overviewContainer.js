import React,{Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {withSmartOfficeApi} from "../../hoc";

import OverviewRender from "../overview-render";
import normalFave from '../../../image/status/Normal Face.png'
import {paramsSensorsLoaded} from "../../../actions/actions";

class OverviewContainer extends Component{

    componentDidMount() {
        const {paramsSensorsLoaded,services,match} = this.props;
        services.getApiRoomsSensors(match.params.id).then(el => paramsSensorsLoaded(el.data))
    }

    render() {

        console.log(this.props.paramsOfSensors);
        return(
            <OverviewRender FaceImg={normalFave}/>
        )
    }
}

const mapStateToProps = ({paramsOfSensors}) =>{
    return{
        paramsOfSensors
    }
};
const mapDispatchToProps = {
    paramsSensorsLoaded
};


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(withSmartOfficeApi()(OverviewContainer)))