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



export {
    switchStateChange,
    changeShowInformation,
    paramsRoomLoaded,
    changeActionFloor
}