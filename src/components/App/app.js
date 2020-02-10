import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import '../../style/index.scss';
import './app.scss';

import Header from "../header";
import RoomDashboard from "../room-dashboard";
import OfficeMap from "../office-map";
import Profile from "../profile";

const App = () =>{

    return(
        <React.Fragment>
            <Header/>
            <div className="main-content">
                <Switch>
                    <Route path='/room-dashboard' component={RoomDashboard} exact/>
                    <Route path='/office-map' component={OfficeMap} exact/>
                    <Route path='/profile' component={Profile} exact/>
                    <Redirect to='/' exact/>
                </Switch>
            </div>
        </React.Fragment>
    )
};
export default App