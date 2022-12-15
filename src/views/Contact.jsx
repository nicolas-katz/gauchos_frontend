import React from 'react';
import styled from 'styled-components';

const StyledContact = styled.div`
    width: 100%;
    height: max-content;
    padding: 120px 20px 40px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: white;

    h2 {
        color: black;
        font-size: 36px;
        line-height: 46px;
        font-weight: 400;
    }

    p {
        margin-top: 20px;

        color: black;
        font-size: 18px;
        line-height: 28px;
        font-weight: 300;
        text-align: center;
    }

    form {
            width: 100%;
            height: max-content;
            margin-top: 40px;

            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;

            div {
                width: 100%;
                margin-bottom: 20px;

                label {
                    color: black;
                    font-size: 16px;
                    font-weight: 300;
                }

                input,
                textarea {
                    width: 100%;
                    height: 54px;
                    margin-top: 10px;
                    padding: 0 20px;

                    background-color: white;
                    border: 1px solid gainsboro;
                    border-radius: 2px;
                    outline: none;
                    cursor: pointer;
                    transition: all .6s;

                    color: black;
                    font-size: 16px;
                    line-height: 26px;
                    font-weight: 300;

                    &::placeholder {
                        color: gray;
                    }
                }

                textarea {
                    height: 108px;
                    padding-top: 20px;
                }
            }

            button {
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
                outline: none;
                cursor: pointer;
                transition: all .6s;

                color: white;
                font-size: 14px;
                font-weight: 400;
                text-align: center;
                text-transform: uppercase;
                letter-spacing: 2px;
            }
    }

    @media only screen and (min-width: 768px) {
        padding: 120px 40px 40px 40px;

        form {
            div.input__name {
                width: 49%;
            }
        }
    }
`;

export default function Contact() {
    return (
        <StyledContact>
            <h2>Contacto</h2>
            <p>¿Quéres revender nuestros productos o ver nuestro catalogo mayorista? Te invitamos a escribirnos en cualquiera de nuestros puntos de contacto o rellenando el siguiente formulario y nuestros asesores se pondran en contacto con vos.</p>
            <form>
                <div className='input__name'>
                    <label htmlFor='name'>Tu nombre</label>
                    <input type='text' name='name' id='name' minLength='4' maxLength='40' placeholder='Tu nombre' required />
                </div>
                <div className='input__name'>
                    <label htmlFor='company'>Tu empresa</label>
                    <input type='text' name='company' id='company' minLength='4' maxLength='40' placeholder='Tu empresa' required />
                </div>
                <div>
                    <label htmlFor='name'>Tu email</label>
                    <input type='email' name='email' id='email' minLength='4' maxLength='40' placeholder='Tu email' required />
                </div>
                <div>
                    <label htmlFor='message'>Tu mensaje</label>
                    <textarea name='message' id='message' minLength='8' maxLength='200' placeholder='Tu mensaje' required></textarea>
                </div>
                <button type='submit'>Enviar</button>
            </form>
        </StyledContact>
    );
};