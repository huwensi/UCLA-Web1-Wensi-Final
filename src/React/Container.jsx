import React from 'react'
import { BrowserRouter } from 'react-router-dom'


import Main from './Main.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Nav from './Nav.jsx';



const Container = () => {

    return (
        <BrowserRouter>
            <div className='Container'>
                <Footer />
                <Header />
                <Nav />
                <Main />
            </div>
        </BrowserRouter>
    );
}

export default Container;
