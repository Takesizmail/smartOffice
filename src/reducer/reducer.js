

const initialState = {
    switchState: 'overview',
    actionFloor: '3',
    showInformation: false,
    informationData:{},
    paramsOfRoom:{},
    paramsOfSensors:[],
    floorsData:[],
    svgId : 1,
    floorsRoomsData:[],

    paramsHumidity: [],
    paramsTemperature: [],
    paramsCo2: [{value: 666}],
    paramsBrightness:[ { value : 666}],

    loadingParams : true



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
            return{
                ...state,
                paramsOfRoom: actions.payload,
                floorsRoomsData:[],
            };
        case 'CHANGE_ACTION_FLOOR':
            return {
                ...state,
                actionFloor: actions.payload
            };
        case 'PARAMS_SENSORS_LOADED':
            return {
                ...state,
                paramsOfSensors: actions.payload
            };
        case 'FLOORS_DATA_LOADED':
            return {
                ...state,
                floorsData: actions.payload
            };
        case 'SVG_ID_LOADED':
            return {
                ...state,
                svgId: actions.payload
            };
        case 'FLOORS_ROOMS_LOADED':
            return {
                ...state,
                floorsRoomsData:actions.payload
            };
        case 'HUMIDITY_LOADED' :
            return {
                ...state,
                paramsHumidity: actions.payload
            };
        case 'TEMPERATURE_LOADED':
            return{
                ...state,
                paramsTemperature: actions.payload
            };
        case 'CO2_LOADED':
            return {
                ...state,
                paramsCo2 : actions.payload
            };
        case 'BRIGHTNESS_LOADED':
            return {
                ...state,
                paramsBrightness : actions.payload
            };
        case 'CHANGE_LOADING_PARAMS' :
            return {
                ...state,
                loadingParams: actions.payload
            };
        case 'ZEROING_OVERVIEW':
            return{
                ...state,
                paramsHumidity: [],
                paramsTemperature: [],
                paramsCo2: [{value: 666}],
                paramsBrightness:[ { value : 666}],
                switchState: 'overview',
                loadingParams: true
            };

        default: return  state
    }


};
export default reducer