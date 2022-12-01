import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = styled.div`
    z-index: 1000;
    position: absolute;
    bottom: 20px;
    right: 40px;
    a {
        margin-left: 30px;
    }
`;

const CoolTransitions = () => {
    return (
        <>
            <Navigation>
                <NavLink to='/cool-transitions'>Demo 1</NavLink>
                <NavLink to='/cool-transitions/demo-2'>Demo 2</NavLink>
                <NavLink to='/cool-transitions/demo-3'>Demo 3</NavLink>
                <NavLink to='/cool-transitions/demo-4'>Demo 4</NavLink>
            </Navigation>
            <Outlet />
        </>
    );
}

export default CoolTransitions;
