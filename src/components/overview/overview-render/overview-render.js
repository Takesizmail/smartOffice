import React from 'react'
import './overview-render.scss'
import Status from "../status";

const OverviewRender  =({FaceImg}) =>{
    return (
            <div className='overview'>
                <Status FaceImg={FaceImg}/>

            </div>
    )
};

export default OverviewRender
