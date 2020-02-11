import React from 'react'

const Status = ({FaceImg}) =>{

    return(
        <div className='status'>
            <img src={FaceImg} alt="face"/>
            <div className="status_title">Unhealthy</div>
            <div className="status_text">Getting headaches? That might be due to the high temperature.
                Why not chill the toom a little?</div>
        </div>
    )
};
export default Status