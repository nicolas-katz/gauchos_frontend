import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNotFound = styled.div`
    width: 100%;
    height: 100vh;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: ghostwhite;

    text-align: center;

    h1 {
        color: black;
        font-size: 42px;
        font-weight: 500;
    }

    h2 {
        margin: 20px 0;

        color: black;
        font-size: 18px;
        line-height: 28px;
        font-weight: 400;
    }

    a {
        width: max-content;
        height: 54px;
        padding: 0 28px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background-color: var(--colorPrincipal);
        border: none;
        border-radius: 2px;
        outline: none;
        cursor: pointer;
        transition: all .6s;

        color: white;
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
`;

export default function NotFound() {
    return (
        <StyledNotFound>
            <h1>404</h1>
            <h2>La página que estabas buscando no existe.</h2>
            <NavLink to='/'>Volver al inicio</NavLink>
        </StyledNotFound>
    );
};