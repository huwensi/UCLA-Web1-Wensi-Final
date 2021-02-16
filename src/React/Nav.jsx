import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBars,
} from '@fortawesome/free-solid-svg-icons';





const Nav = () => {
    return (
        <NavStyled className='Nav'>
        <FontAwesomeIcon icon={ faBars } /> 

            <NavLink to="/"exact>Welcome</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`
    a {
        background: teal;
        color: white;
        text-decoration: none;

        padding: 10px;
        margin: 10px;

        &.active {
            background-color: #0a5656
        }
    

    
    }
`;