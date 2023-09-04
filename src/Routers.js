import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./core/Home";
import Signup from "./user/signup";
import PrivateRouters from "./auth/helper/privateRouters";
import UserDashboard from "./user/UserDashboard";
import Signin from "./user/Signin";




  
function App() {
    return(
        <Router>
            <Fragment>
            <Routes>
                <Route exact path='/' element={<PrivateRouters/>}>
                <Route path="/" exact Component={Home} />
                </Route>
                <Route path="/signup" exact Component={Signup} />
                <Route path="/signin" exact Component={Signin} />

                {/* <PrivateRouters path="user/dashboard" exact Component={UserDashboard} /> */}
                <Route exact path='user/dashboard' element={<UserDashboard/>}/>

            </Routes>
            </Fragment>
        </Router>
    );
};

export default App;