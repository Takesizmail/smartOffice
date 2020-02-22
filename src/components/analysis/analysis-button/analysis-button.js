import React from 'react'
import './analysis-button.scss'
import {withSmartOfficeApi} from "../../hoc";

const AnalysisButton = ({services}) =>{
    const today = new Date();
    const allMonth =['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    let day =  today.getDate();
    if(day <10 ) day = '0' + day ;

    let month = today.getMonth() ;

    const value = [{
        title: '6 months',
        link : '6_month'
    },{
        title: '1 month',
        link : '1_month'
    },{
        title: '2 weeks',
        link : '2_week'
    },{
        title: '1 weeks',
        link : '1_week'
    }
    ];
    // getApiLengthOfTime

    return(
        <div className='buttons'>
            {value.map(({title,link}) =>{
                return (
                    <div className="buttons_switch"
                         key={link}
                        onClick={()=>services.getApiLengthOfTime(link)}

                    >{title}</div>
                )
            })}
            <div className="buttons_data">{`${allMonth[month]}. ${day},   ${today.getFullYear()}`}</div>
        </div>
    )
};
export default withSmartOfficeApi()(AnalysisButton)