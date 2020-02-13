const initialState = {
    switchState: 'overview',
    actionFloor: 'Floor 3',
    showInformation: false,
    informationData:{},
    paramsOfRoom:{}

};
const reducer = (state=initialState,actions) =>{
    switch(actions.type){
        case 'SWITCH_STATE':
            return {
                ...state,
                switchState: actions.payload
            };
        case 'CHANGE_SHOW_INFORMATION':
            return {
                ...state,
                showInformation: !state.showInformation
            };
        case 'PARAMS_ROOM_LOADED':
            console.log('aaaa');
            return{
                ...state,
                paramsOfRoom: actions.payload
            };
        case 'CHANGE_ACTION_FLOOR':
            return {
                ...state,
                actionFloor: actions.payload
            };
        default: return  state
    }

};
export default reducer