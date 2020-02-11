import React from 'react'
import './overview-render.scss'
import Status from "../status";
import Params from "../params";

const OverviewRender  =({FaceImg}) =>{
    return (
            <div className='overview'>
                <Status FaceImg={FaceImg}/>
                <Params/>

            </div>
    )
};

export default OverviewRender
