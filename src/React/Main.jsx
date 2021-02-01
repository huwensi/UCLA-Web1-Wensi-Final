import React from 'react';
import { Switch, Route } from 'react-router-dom';


/* Components ---------------------*/
import Contact from './Pages/Contact.jsx';
import Login from './Pages/Login.jsx';
import Services from './Pages/Services.jsx';
import Welcome from './Pages/Welcome.jsx';


const Main = () => {
    return (
    <main>
        <Switch>
            <Route path='/contact' component={ Contact } />
            <Route path='/login' component={ Login } />
            <Route path='/service' component={ Services } />
            <Route path='/welcome' component={ Welcome } exact />
        </Switch>
    </main>
    
    )
}

export default Main;