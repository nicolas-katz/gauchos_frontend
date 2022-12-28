import React from 'react';
import styled from 'styled-components';

const StyledContact = styled.div`
    width: 100%;
    height: max-content;
    padding: 120px 20px 60px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: white;

    div.contact__information {
        width: 100%;
        margin-bottom: 120px;
        padding-bottom: 120px;

        border-bottom: 1px solid gainsboro;

        display: flex;
        flex-direction: column;

        div.contact__description {
            margin-bottom: 40px;

            display: flex;
            flex-direction: column;

            h2 {
                margin-bottom: 14px;

                color: black;
                font-size: 32px;
                line-height: 42px;
                font-weight: 400;
            }

            p {
                color: black;
                font-size: 18px;
                line-height: 28px;
                font-weight: 300;
            }

            div.contact__data {
                margin-top: 32px;
                padding-top: 32px;

                border-top: 1px solid gainsboro;

                h5 {
                    width: 100%;
                    margin-bottom: 14px;

                    &:last-child {
                        margin-bottom: 0;
                    }

                    display: flex;
                    flex-direction: row;
                    align-items: center;

                    color: black;
                    font-size: 18px;
                    font-weight: 400;

                    a {
                        margin-left: 20px;

                        transition: all .6s;

                        color: var(--colorPrincipal);
                        text-decoration: none;

                        &:hover {
                            color: var(--colorPrincipal);
                            text-decoration: underline;
                        }
                    }
                }
            }
        }

        div.contact__map {
            width: 100%;
            height: max-content;

            display: flex;
            flex-direction: column;

            iframe {
                width: 100%;
                height: 320px;

                border: none;
                border-radius: 2px;
            }

            h4 {
                width: 100%;
                margin-top: 28px;

                color: gray;
                font-size: 18px;
                line-height: 28px;
                font-weight: 300;

                span {
                    display: block;

                    color: black;
                    font-size: 24px;
                    line-height: 34px;
                }
            }
        }
    }

    div.contact__form {
        display: flex;
        flex-direction: column;

        h3 {
            color: black;
            font-size: 36px;
            line-height: 46px;
            font-weight: 400;

            span {
                display: block;
            }
        }

        form {
            width: 100%;
            height: max-content;
            margin-top: 60px;

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
                    height: 136px;
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
    }

    @media only screen and (min-width: 768px) {
        padding: 140px 20px 80px 20px;

        div.contact__information {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            
            div.contact__description,
            div.contact__map {
                width: 48%;
            }

            div.contact__description {
                margin: 0;

                h2 {
                    font-size: 36px;
                    line-height: 46px;
                }
            }

            div.contact__map iframe {
                height: 420px;
            }
        }

        div.contact__form {
            h3 {
                font-size: 42px;
                line-height: 52px;
            }
            
            form {
                div.input__row {
                    width: 49%;
                }
            }
        }
    }

    @media only screen and (min-width: 1024px) {
        padding: 160px 20px 100px 20px;

        div.contact__information {
            div.contact__description,
            div.contact__map {
                width: 42%;
            }

            div.contact__description {
                h2 {
                    font-size: 42px;
                    line-height: 52px;
                }
            }
        }

        div.contact__form {
            padding: 0 160px;

            h3 {
                font-size: 48px;
                line-height: 58px;
            }
        }
    }

    @media only screen and (min-width: 1200px) {
        padding: 160px 120px 100px 120px;
    }
`;

export default function Contact() {
    return (
        <StyledContact>
            <div className='contact__information'>
                <div className='contact__description'>
                    <h2>Interesado en nuestros productos? Contactanos!</h2>
                    <p>Si te interesa vender nuestros productos, no dudes en pedirnos el catálogo y la lista de precios mayoristas por WhatsApp. Estamos para asesorarte!</p>
                    <div className='contact__data'>
                        <h5>Email <a href='mailto:info@miltex.com.ar'>info@miltex.com.ar</a></h5>
                        <h5>Mayorista <a href='tel:+5491162715898'>+54 (11) 62715898</a></h5>
                        <h5>Minorista <a href='tel:+5491125610827'>+54 (11) 25610827</a></h5>
                    </div>
                </div>
                <div className='contact__map'>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.197119651726!2d-58.43995432477176!3d-34.59917665725756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9fd60fbd9f9%3A0xa8f2c4547e2e009b!2sGaucho%20Store%20-%20Ropa%20de%20Trabajo!5e0!3m2!1ses-419!2sar!4v1671206362622!5m2!1ses-419!2sar" 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                    <h4><span>Horarios de atención</span>Lunes a Viernes de 8hs a 18hs y Sabados de 8hs a 13hs.</h4>
                </div>
            </div>
            <div className='contact__form'>
                <h3>Obtene tus productos <span>en Miltex Indumentaria.</span></h3>
                <form>
                    <div className='input__row'>
                        <label htmlFor='name'>Tu nombre</label>
                        <input type='text' name='name' id='name' minLength='4' maxLength='40' placeholder='Tu nombre' required />
                    </div>
                    <div className='input__row'>
                        <label htmlFor='company'>Tu empresa</label>
                        <input type='text' name='company' id='company' minLength='4' maxLength='40' placeholder='Tu empresa' required />
                    </div>
                    <div className='input__row'>
                        <label htmlFor='name'>Tu email</label>
                        <input type='email' name='email' id='email' minLength='4' maxLength='40' placeholder='Tu email' required />
                    </div>
                    <div className='input__row'>
                        <label htmlFor='name'>Tu asunto</label>
                        <input type='text' name='issue' id='issue' minLength='4' maxLength='40' placeholder='Tu asunto' required />
                    </div>
                    <div>
                        <label htmlFor='message'>Tu mensaje</label>
                        <textarea name='message' id='message' minLength='8' maxLength='200' placeholder='Tu mensaje' required></textarea>
                    </div>
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        </StyledContact>
    );
};