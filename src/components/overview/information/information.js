import React from 'react';
 import './indormation.scss';
 import {connect} from 'react-redux'
import {changeShowInformation} from "../../../actions/actions";

import co2icon from '../../../image/params/co2.png'
import smile_1 from '../../../image/smile/Smile_1.png'
import smile_2 from '../../../image/smile/Smile_2.png'
import smile_3 from '../../../image/smile/Smile_3.png'
import smile_4 from '../../../image/smile/Smile_4.png'
import smile_5 from '../../../image/smile/Smile_5.png'



const Information = ({changeShowInformation}) =>{

     const smileArr = [{
         img: smile_1,
         id: 'smile_1'
     },{
         img: smile_2,
         id: 'smile_2'
     },{
         img: smile_3,
         id: 'smile_3'
     },{
         img: smile_4,
         id: 'smile_4'
     },{
         img: smile_5,
         id: 'smile_5'
     },
     ];


     return(
         <div className="information">
            <div className="information_wrap">
                <div className="information_img"><img src={co2icon} alt="co2"/></div>
                <div className="information_title">CO2 Level</div>
                <div className="information_text">Carbon dioxide at levels that are unusually high indoors may cause occupants to grow drowsy, to get headaches, or to function at lower activity levels.
                </div>
                <div className="information_text"> Outdoor CO2 levels are usually 350-450 ppm whereas the maximum indoor CO2 level considered acceptable is 1000 ppm. Keep this value lowe as possible. </div>
                <div className="information_status_value">
                    1220 ppm
                </div>
                <div className="information_status">

                    {smileArr.map(({img,id}) =>{
                    return (
                        <div key={id} className={`information_status_icon ${id}`}>
                            <img src={img} alt="smile"/>
                        </div>
                    )}
                    )}
                </div>
                <div
                    className="information_button"
                    onClick={()=>changeShowInformation()}
                >Got it </div>
            </div>
         </div>
     )
};
 const mapStateToProps =({informationData}) =>{
     return{
         informationData
     }
 };
 const mapDispatchToProps ={
     changeShowInformation
 };

 export default connect(mapStateToProps,mapDispatchToProps)(Information)