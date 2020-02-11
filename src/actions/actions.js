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

export {
    switchStateChange,
    changeShowInformation
}