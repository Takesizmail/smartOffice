import React from 'react'
import alertIcon from '../../../image/VectorAlert.png'
import temperatureIcon from '../../../image/temperature.png'
const Params = () =>{

    const paramsDate = [{
        id:1,
        title: 'Temperature',
        value: '30.16',
        param: '°C',
    }];

    return(
        <div className='params'>
            <div className="params_item">
                <div className="params_details">
                    <div className="params_title">Temperature </div>
                    <div className="params_value">30.16 <span>°C</span></div>
                    <div className="params_alert"><img src={alertIcon} alt=""/> Too hot </div>
                </div>
                <div className="params_img">
                    <img src={temperatureIcon} alt="temperature"/>
                </div>


            </div>
            <div className="params_item">
                <div className="params_details">
                    <div className="params_title">Temperature </div>
                    <div className="params_value">30.16 <span>°C</span></div>
                    <div className="params_alert"><img src={alertIcon} alt=""/> Too hot </div>
                </div>
                <div className="params_img">
                    <img src={temperatureIcon} alt="temperature"/>
                </div>


            </div>
            <div className="params_item">
                <div className="params_details">
                    <div className="params_title">Temperature </div>
                    <div className="params_value">30.16 <span>°C</span></div>
                    <div className="params_alert"><img src={alertIcon} alt=""/> Too hot </div>
                </div>
                <div className="params_img">
                    <img src={temperatureIcon} alt="temperature"/>
                </div>


            </div>
            <div className="params_item">
                <div className="params_details">
                    <div className="params_title">Temperature </div>
                    <div className="params_value">30.16 <span>°C</span></div>
                    <div className="params_alert"><img src={alertIcon} alt=""/> Too hot </div>
                </div>
                <div className="params_img">
                    <img src={temperatureIcon} alt="temperature"/>
                </div>


            </div>

        </div>
    )
};
export default Params