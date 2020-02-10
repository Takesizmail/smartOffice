import React from 'react'
// import '../../style/index.scss'
import './app.scss'
import '../../style/index.scss'
import Header from "../header";

const App = () =>{

    return(
        <React.Fragment>
            <Header/>
            <div className="main-content">


                <Switch>
                    <Route path='/room-dashboard' component={Body} exact/>
                    <Route path='/office-map' component={OfficeMap} exact/>
                    <Route path='/profile' component={Profile} exact/>
                    <Redirect to='/' exact/>
                </Switch>
            </div>
        </React.Fragment>
    )
};
export default App