const initialState = {
    switchState: 'overview',
    showInformation: false,
    informationData:{}

};
const reducer = (state=initialState,actions) =>{
    switch(actions.type){
        case 'SWITCH_STATE':
            return {
                ...state,
                switchState: actions.payload
            };
        case 'CHANGE_SHOW_INFORMATION':{
            return {
                ...state,
                showInformation: !state.showInformation
            }
        }
        default: return  state
    }

};
export default reducer