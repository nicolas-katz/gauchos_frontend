import React from 'react';
import styled from 'styled-components';

const StyledAbout = styled.div`
    width: 100%;
    height: max-content;
    padding: 140px 20px 60px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        color: black;
        font-size: 36px;
        line-height: 46px;
        font-weight: 400;
        text-align: center;
    }
`;

export default function About() {
    return (
        <StyledAbout>
            <h1>Sobre Nosotros</h1>
        </StyledAbout>
    );
};