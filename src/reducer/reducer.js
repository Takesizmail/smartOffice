

const initialState = {
    switchState: 'overview',
    actionFloor: '3',
    showInformation: false,
    informationData:{},
    paramsOfRoom:{},
    paramsOfSensors:[],
    floorsData:[],
    floorSvd: '',
    svgId : 1,
    floorsRoomsData:[],

    paramsHumidity: [],
    paramsTemperature: [],
    paramsCo2: [{ "timestamp": "2020-02-07T02:00:00", "value": 18.870614035087719 },
        { "timestamp": "2020-02-07T03:00:00", "value": 18.843201754385966 },
        { "timestamp": "2020-02-07T04:30:00", "value": 18.644736842105264 },
        { "timestamp": "2020-02-07T04:00:00", "value": 18.705043859649123 },
        { "timestamp": "2020-02-07T05:00:00", "value": 18.599780701754387 },
        { "timestamp": "2020-02-07T03:30:00", "value": 18.748903508771932 },
        { "timestamp": "2020-02-07T05:30:00", "value": 18.516447368421051 },
        { "timestamp": "2020-02-07T06:00:00", "value": 18.355263157894736 },
        { "timestamp": "2020-02-07T07:00:00", "value": 18.3125 },
        { "timestamp": "2020-02-07T08:30:00", "value": 19.729166666666668 },
        { "timestamp": "2020-02-07T08:00:00", "value": 19.463815789473685 },
        { "timestamp": "2020-02-07T09:30:00", "value": 20.144736842105264 },
        { "timestamp": "2020-02-07T06:30:00", "value": 18.31469298245614 },
        { "timestamp": "2020-02-07T07:30:00", "value": 18.771929824561404 },
        { "timestamp": "2020-02-07T09:00:00", "value": 19.912280701754387 },
        { "timestamp": "2020-02-07T12:00:00", "value": 20.271929824561404 },],
    paramsBrightness:[ { "timestamp": "2020-02-04T20:30:00", "value": 20.234649122807017 },
        { "timestamp": "2020-02-04T21:00:00", "value": 20.163377192982455 },
        { "timestamp": "2020-02-04T22:30:00", "value": 19.99232456140351 },
        { "timestamp": "2020-02-04T23:00:00", "value": 19.928728070175438 },
        { "timestamp": "2020-02-04T19:30:00", "value": 20.418859649122808 },
        { "timestamp": "2020-02-04T20:00:00", "value": 20.32017543859649 },
        { "timestamp": "2020-02-04T21:30:00", "value": 20.106359649122808 },
        { "timestamp": "2020-02-04T22:00:00", "value": 20.042763157894736 },
        { "timestamp": "2020-02-05T16:30:00", "value": 20.440789473684209 },
        { "timestamp": "2020-02-05T14:30:00", "value": 19.107456140350877 },
        { "timestamp": "2020-02-05T15:00:00", "value": 17.589912280701753 },
        { "timestamp": "2020-02-05T02:00:00", "value": 19.700657894736842 },
        { "timestamp": "2020-02-05T00:30:00", "value": 19.799342105263158 },
        { "timestamp": "2020-02-05T01:30:00", "value": 19.718201754385966 },
        { "timestamp": "2020-02-05T02:30:00", "value": 19.623903508771932 },
        { "timestamp": "2020-02-05T11:30:00", "value": 21.42982456140351 },
        { "timestamp": "2020-02-04T23:30:00", "value": 19.876096491228068 },
        { "timestamp": "2020-02-05T00:00:00", "value": 19.848684210526315 },
        { "timestamp": "2020-02-05T01:00:00", "value": 19.74780701754386 },
        { "timestamp": "2020-02-05T03:30:00", "value": 19.571271929824562 },
        { "timestamp": "2020-02-05T04:00:00", "value": 19.5625 },
        { "timestamp": "2020-02-05T05:00:00", "value": 19.5 },
        { "timestamp": "2020-02-05T05:30:00", "value": 19.342105263157894 },],
    activeParamsChart : {
        value: 'temperature',
        label: 'Temperature'
    },

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

        case 'FLOOR_SVG_LOADED':
            return {
                ...state,
                floorSvd: actions.payload,
                floorsRoomsData:[],
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

        case 'ACTIVE_PARAMS_LOADED':
            return {
                ...state,
                activeParamsChart: actions.payload
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