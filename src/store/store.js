import {creacteStore} from 'redux'
import reducer from "../reducer/reducer";

const store = creacteStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store