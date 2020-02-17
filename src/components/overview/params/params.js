import React,{Component} from 'react'
import {connect} from 'react-redux'
import {changeShowInformation,changeLoadingParams} from "../../../actions/actions";

import alertIcon from '../../../image/params/iconAlert.png'
import dangerIcon from '../../../image/params/iconDanger.png'
import temperatureIcon from '../../../image/params/temperature.png'
import co2Icon from '../../../image/params/co2.png'
import brightnessIcon from '../../../image/params/co2.png'
import humidityIcon from '../../../image/params/humidity.png'
import {withSmartOfficeApi} from "../../hoc";
import Loader from "../../loader";


class Params extends  Component{


    paramsDate = [{
        id: 'temperature_1',
        img: temperatureIcon,
        title: 'Temperature',
        value: '30.16',
        param: '°C',
        status:'danger'
    },
        {
            id:'humidity_1',
            img:humidityIcon,
            title: 'Humidity',
            value: '40.12',
            param: '%',
            status:'excellent'
        },
        {
            id:'CO2_1',
            img:co2Icon,
            title: 'CO2 Level',
            value: '1220.16',
            param: 'ppm',
            status:'excellent'
        },
        {
            id:'brightness_1',
            img:brightnessIcon,
            title: 'Brightness',
            value: '40',
            param: 'lx',
            status: 'alert'
        },
    ];

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {paramsTemperature,changeLoadingParams} = this.props;
        if(prevProps.paramsTemperature !== paramsTemperature){
            changeLoadingParams(false)

        }
    }

    render() {
        const {paramsHumidity,paramsTemperature,paramsCo2,paramsBrightness,loadingParams} = this.props;


        if(loadingParams){
            console.log('omg');
            return (
                <Loader/>
            );
        }


        return(
            <div className='params'>

                {this.paramsDate.map(({id,img,title,value,params,status}) =>{
                    let item, _value;
                    switch (status) {
                        case 'excellent':
                            item = (<div className="params_alert excellent"> Excellent </div>);
                            break;
                        case 'alert':
                            item = (<div className="params_alert alert"><img src={alertIcon} alt=""/> Alert </div>);
                            break;
                        case 'danger':
                            item = (<div className="params_alert danger "><img src={dangerIcon} alt=""/> Danger </div>);
                            break;
                        default:   item = null
                    }
                    switch (title) {
                        case 'Temperature':
                            _value = paramsTemperature[paramsTemperature.length-1].value;
                            break;
                        case 'Humidity':
                            _value = paramsHumidity[paramsHumidity.length-1].value;
                            break;
                        case 'CO2 Level':
                            _value = paramsCo2[paramsCo2.length-1].value;
                            break;
                        case 'Brightness':
                           _value =  paramsBrightness[paramsBrightness.length-1].value;
                            break;
                        default : _value = 666
                    }

                    return (
                        <div className="params_item" key={id}
                             onClick={()=>changeShowInformation()}
                        ><div className="params_details">
                            <div className="params_title">{title} </div>
                            <div className="params_value">{Math.floor(_value)} <span>{params}</span></div>
                            {item}
                        </div>
                            <div className="params_img">
                                <img src={img} alt="temperature"/>
                            </div>
                        </div>
                    )
                })}
            </div>
        )}
}

const mapStateToProps = ({paramsOfSensors,paramsHumidity,paramsTemperature,paramsCo2,paramsBrightness,loadingParams}) =>{
    return {
        paramsOfSensors,paramsHumidity,paramsTemperature,paramsCo2,paramsBrightness,loadingParams
    }
};

const mapDispatchToProps = {
    changeShowInformation,changeLoadingParams
};


export default connect(mapStateToProps,mapDispatchToProps)(withSmartOfficeApi()(Params))