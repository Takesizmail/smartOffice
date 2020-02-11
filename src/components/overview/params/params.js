import React from 'react'
import {connect} from 'react-redux'
import {changeShowInformation} from "../../../actions/actions";

import alertIcon from '../../../image/params/iconAlert.png'
import dangerIcon from '../../../image/params/iconDanger.png'
import temperatureIcon from '../../../image/params/temperature.png'
import co2Icon from '../../../image/params/co2.png'
import brightnessIcon from '../../../image/params/co2.png'
import humidityIcon from '../../../image/params/humidity.png'
const Params = ({changeShowInformation}) =>{

    const paramsDate = [{
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

    return(
        <div className='params'>

            {paramsDate.map(({id,img,title,value,params,status}) =>{
                console.log(img);
                let item;
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

                return (
                    <div className="params_item" key={id}
                    onClick={()=>changeShowInformation()}
                    ><div className="params_details">
                            <div className="params_title">{title} </div>
                            <div className="params_value">{value} <span>{params}</span></div>
                            {item}
                        </div>
                        <div className="params_img">
                            <img src={img} alt="temperature"/>
                        </div>


                    </div>
                )
            })}


        </div>
    )
};

const mapDispatchToProps = {
    changeShowInformation
};

export default connect(null,mapDispatchToProps)(Params)