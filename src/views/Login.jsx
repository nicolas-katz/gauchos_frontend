import React from 'react';
import styled from 'styled-components';

const StyledLogin = styled.div`
    width: 100%;
    height: max-content;
    padding: 140px 20px 80px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: whitesmoke;

    form {
        width: 100%;
        height: max-content;
        padding: 40px;

        display: flex;
        flex-direction: column;

        background-color: white;
        border-radius: 2px;

        h1 {
            margin-bottom: 40px;

            color: black;
            font-size: 28px;
            line-height: 38px;
            font-weight: 400;
            text-align: center;
        }

        label {
            color: black;
            font-size: 16px;
            font-weight: 400;
        }

        input,
        button {
            width: 100%;
            height: 54px;
            margin: 10px 0 20px 0;
            padding: 0 20px;

            background-color: white;
            border: 1px solid gainsboro;
            border-radius: 2px;
            outline: none;
            cursor: pointer;
            transition: all .6s;

            color: black;
            font-size: 16px;
            font-weight: 400;
        }

        input::placeholder {
            color: gray;
            font-size: 16px;
            font-weight: 300;
        }

        div {
            display: flex;
            flex-direction: column;
        }

        button {
            width: 100%;
            padding: 0 28px;

            background-color: var(--colorPrincipal);
            border: none;

            color: white;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        h5 {
            margin-top: 8px;

            cursor: pointer;
            transition: all .6s;

            color: black;
            font-size: 16px;
            line-height: 26px;
            font-weight: 400;
            text-align: center;

            &:hover {
                color: var(--colorPrincipal);
            }
        }
    }

    @media only screen and (min-width: 768px) {
        padding: 160px 100px 100px 100px;

        form {
            padding: 60px;

            h1 {
                font-size: 36px;
                line-height: 46px;
            }

            div {
                flex-direction: row;
                align-items: center;
                justify-content: space-between;

                h5 {
                    margin-top: -6px;

                    text-align: left;
                }
            }

            button {
                width: max-content;
            }
        }
    }

    @media only screen and (min-width: 1024px) {
        padding: 160px 120px 100px 120px;

        form {
            width: 60%;

            h1 {
                font-size: 42px;
                line-height: 52px;
            }
        }
    }
`;

export default function Login() {
    return (
        <StyledLogin>
            <form>
                <h1>Cuenta de Administrador</h1>
                <label htmlFor='email'>Tu email</label>
                <input type='email' name='email' id='email' minLength='4' maxLength='40' placeholder='Tu email' required />
                <label htmlFor='password'>Tu contraseña</label>
                <input type='password' name='password' id='password' minLength='4' maxLength='40' placeholder='Tu contraseña' required />
                <div>
                    <button type='submit'>Iniciar sesión</button>
                    <h5>¿Has olvidado tu contraseña?</h5>
                </div>
            </form>
        </StyledLogin>
    );
};