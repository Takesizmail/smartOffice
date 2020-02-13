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





export {
    switchStateChange,
    changeShowInformation,
    paramsRoomLoaded,
    changeActionFloor,
    paramsSensorsLoaded,
    floorsDataLoaded,
    svgIdLoaded,
    floorsRoomsLoaded
}