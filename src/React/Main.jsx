import React from 'react';
import { Switch, Route } from 'react-router-dom';


/* Components ---------------------*/
import Contact from './Pages/Contact/Contact.jsx';
import Login from './Pages/Login/Login.jsx';
import Services from './Pages/Services/Services.jsx';
import Welcome from './Pages/Welcome/Welcome.jsx';


const Main = () => {
    return (
    <main>
        <Switch>
            <Route path='/contact' component={ Contact } />
            <Route path='/login' component={ Login } />
            <Route path='/services' component={ Services } />
            <Route path='/' component={ Welcome } exact />
        </Switch>
    </main>
    
    )
} 

export default Main;