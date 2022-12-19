import React from 'react';
import styled from 'styled-components';
import {
    BsWhatsapp
} from 'react-icons/all';

const StyledChat = styled.a`
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 2;

    @media only screen and (min-width: 1200px) {
      right: 120px;
    }

    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #48da48;
    border-radius: 50%;
    transition: all .6s;

    color: white;
    font-size: 24px;
    text-decoration: none;

    &:hover {
        opacity: .7;

        color: white;
    }
`;

export default function WhatsappButton() {
    return (
        <StyledChat 
            href='https://web.whatsapp.com/send?phone=5491162715898&text=Hola!%0D%0AVi%20su%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20tener%20m%C3%A1s%20informaci%C3%B3n.' 
            target='_blank'
            rel='noopener noreferrer'>
            <BsWhatsapp />
        </StyledChat>
    );
};