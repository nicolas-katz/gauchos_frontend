import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import main from '../assets/main_ejemplo.jpg';

const StyledMain = styled.div`
    position: relative;

    width: 100%;
    height: 700px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & img {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;

        width: 100%;
        height: 100%;

        object-fit: cover;
    }

    & a {
        width: max-content;
        height: 54px;
        padding: 0 28px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        background-color: var(--colorPrincipal);
        border: none;
        border-radius: 2px;
        cursor: pointer;
        transition: all .6s;

        color: white;
        font-size: 14px;
        font-weight: 400;
        text-align: center;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 2px;
    }
`;

export default function Home() {
    return (
        <div>
           <StyledMain>
                <img src={main} alt='Miltex Indumentaria' />
                <NavLink to='/coleccion'>Comprar ahora</NavLink>
           </StyledMain> 
        </div>
    );
};