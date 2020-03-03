import React,{Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {withSmartOfficeApi} from "../../hoc";

import OverviewRender from "../overview-render";
import normalFave from '../../../image/status/Normal Face.png'
import {paramsSensorsLoaded,humidityLoaded,
    temperatureLoaded,
    co2Loaded,
    brightnessLoaded,zeroingOverview} from "../../../actions/actions";

class OverviewContainer extends Component{

    componentDidMount() {
        const {paramsSensorsLoaded,services,match} = this.props;
        services.getApiRoomsSensors(match.params.id).then(el => paramsSensorsLoaded(el.data));
        this.sortingData()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.paramsOfSensors !== prevProps.paramsOfSensors){

            this.sortingData();
        }
    }
    sortingData = () =>{
        const {services,paramsOfSensors,humidityLoaded, temperatureLoaded, co2Loaded, brightnessLoaded} = this.props;
        paramsOfSensors.forEach(({valueTypes,sensorId}) =>{
                switch (valueTypes[0]) {
                    case 0 :
                        services.getApiParams(sensorId).then((el) => humidityLoaded(el.data) );
                        break;
                    case 2 :
                        services.getApiParams(sensorId).then((el) => temperatureLoaded(el.data) );
                        break;
                    default: console.log('something wrong dont have sensors ');
                }
            });
    };

    render() {
        return(
            <OverviewRender FaceImg={normalFave}/>
        )
    }
}

const mapStateToProps = ({paramsOfSensors}) =>{
    return{
        paramsOfSensors,
    }
};
const mapDispatchToProps = {
    paramsSensorsLoaded,humidityLoaded,
    temperatureLoaded,
    co2Loaded,
    brightnessLoaded,zeroingOverview
};


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(withSmartOfficeApi()(OverviewContainer)))