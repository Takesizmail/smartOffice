const switchStateChange =(switchState) => {
    return{
        type: 'SWITCH_STATE',
        payload:  switchState
    }
};
const changeShowInformation = () =>{
    return {
        type:'CHANGE_SHOW_INFORMATION'
    }
};
const paramsRoomLoaded = (info) =>{
    return {
        type : 'PARAMS_ROOM_LOADED',
        payload:  info
    }
};
const changeActionFloor = (actionFloor) =>{
    return{
        type: 'CHANGE_ACTION_FLOOR',
        payload: actionFloor
    }
};

const paramsSensorsLoaded = (data) =>{
    return {
        type: 'PARAMS_SENSORS_LOADED',
        payload: data
    }
};
const floorsDataLoaded = (data) =>{
    return{
        type: 'FLOORS_DATA_LOADED',
        payload: data,
    }
};

const floorSvgLoaded = (svg) =>{
    return{
        type: 'FLOOR_SVG_LOADED',
        payload: svg
    }
};

const svgIdLoaded = (id) =>{
    return{
        type: 'SVG_ID_LOADED',
        payload: id
    }
};
const floorsRoomsLoaded = (data)=>{
    return{
        type: 'FLOORS_ROOMS_LOADED',
        payload: data
    }
};
const humidityLoaded = (data) =>{
    return{
        type: 'HUMIDITY_LOADED',
        payload: data
    }
};
const temperatureLoaded = (data) =>{
    return{
        type: 'TEMPERATURE_LOADED',
        payload: data
    }
};
const co2Loaded = (data) =>{
    return{
        type: 'CO2_LOADED',
        payload: data
    }
};
const brightnessLoaded = (data) =>{
    return{
        type: 'BRIGHTNESS_LOADED',
        payload: data
    }
};
const changeLoadingParams = (boolean) =>{
    return{
        type: 'CHANGE_LOADING_PARAMS',
        payload: boolean
    }
};
const activeParamsLoaded = (params)=>{
    return{
        type: 'ACTIVE_PARAMS_LOADED',
        payload: params
    }
};

const zeroingOverview = () =>{
    return{
        type : 'ZEROING_OVERVIEW'
    }
};

export {
    switchStateChange,
    changeShowInformation,
    paramsRoomLoaded,
    changeActionFloor,
    paramsSensorsLoaded,
    floorsDataLoaded,
    svgIdLoaded,
    floorsRoomsLoaded,
    humidityLoaded,
    temperatureLoaded,
    co2Loaded,
    brightnessLoaded,changeLoadingParams,
    zeroingOverview,
    floorSvgLoaded,
    activeParamsLoaded
}