import React from 'react'
import './drop-list.scss'
import Select from "react-select";
import {connect} from 'react-redux'
import {activeParamsLoaded} from "../../../actions/actions";

const DropList = ({activeParamsChart,activeParamsLoaded}) =>{
    const options = [
        { value: 'temperature', label: 'Temperature' },
        { value: 'humidity', label: 'Humidity' },
        { value: 'co2', label: 'CO2 Level' },
        { value: 'brightness', label: 'Brightness' }
    ];
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            fontSize: '20px',
            border: 'none',
        }),
        control: (provided) => ({
            ...provided,
            // border: 'none',
            // width: '200px',
            outline: 'none',
            fontSize: '20px',
            border: '0 !important',
            // This line disable the blue border
            boxShadow: '0 !important',
            '&:hover': {
                border: '0 !important'
            }
        }),
    };
    const changeValue = (value) =>{
        activeParamsLoaded(value)
    };
    return(
        <div className='drop-list'>
            <Select  options = {options}
                     onChange={(value)=>changeValue(value)}
                     blurInputOnSelect={false}
                     styles = { customStyles }
                     defaultValue ={activeParamsChart}
                     className='react-select-container'
                     classNamePrefix="react-select"
                     components={{
                         IndicatorSeparator: () => null
                     }}
                     autoFocus={false}
                     theme={(theme) => ({
                         ...theme,
                         borderRadius: 3,
                         colors: {
                             ...theme.colors,
                             text: 'black',
                             primary25: 'white',
                             primary: '#aab4c3',
                             neutral0: ''
                         },
                     })}
            />
        </div>
    )
};
const mapDispatchToProps = {
    activeParamsLoaded
};
const mapStateToProps = ({activeParamsChart}) =>{
    return {
        activeParamsChart
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(DropList)