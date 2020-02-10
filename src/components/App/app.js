import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import '../../style/index.scss';
import './app.scss';

import Header from "../header";
import {OfficeMapPage,
    ProfilePage,
    RoomDashboardPage} from '../pages'

const App = () =>{

    return(
        <React.Fragment>
            <Header/>
            <div className="main_container">
                <div className="container">


                <Switch>
                    <Route path='/room-dashboard' component={RoomDashboardPage} exact/>
                    <Route path='/office-map' component={OfficeMapPage} exact/>
                    <Route path='/profile' component={ProfilePage} exact/>
                    <Redirect to='/' exact/>
                </Switch>
                </div>
            </div>
        </React.Fragment>
    )
};
export default App