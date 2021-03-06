import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import '../../style/index.scss';
import './app.scss';
import Header from "../header";
import {
    OfficeMapPage, OfficeRoomPage,
    ProfilePage,
    RoomDashboardPage
} from '../pages'
import Footer from "../footer";
import Information from "../overview/information";

const App = ({showInformation}) =>{

    // if (showInformation){
    //     return <Information>
    // }
  const show = showInformation ? <Information/> : null;
    return(
        <React.Fragment>
            { show}
            <div className="main_container">
                <Header/>
                <div className="container">
                <Switch>
                    <Route path='/room-dashboard/' component={RoomDashboardPage} exact/>
                    <Route path='/office-map/' component={OfficeMapPage} exact/>
                    <Route path='/office-map/:id/' component={OfficeRoomPage} exact/>
                    <Route path='/profile/' component={ProfilePage} exact/>
                    <Redirect to='/' exact/>
                </Switch>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
};

const mapStateToProps = ({showInformation}) =>{
    return {
        showInformation
    }
};

export default connect(mapStateToProps)(App)