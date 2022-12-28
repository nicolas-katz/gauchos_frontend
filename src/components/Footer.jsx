import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { BsInstagram, FaFacebookF } from 'react-icons/all';
import logo from '../assets/logo.png';
import meli from '../assets/meli.png';

const StyledFooter = styled.footer`
    width: 100%;
    height: max-content;

    display: flex;
    flex-direction: column;

    background-color: #1F1F1F;

    div.footer__information {
        width: 100%;
        padding: 20px;
        padding-bottom: 0;

        display: flex;
        flex-direction: column;

        div.footer__brand {
            a img {
                width: 56px;
                margin-bottom: 20px;

                object-fit: contain;
            }

            h4 {
                display: flex;
                flex-direction: column;

                color: white;
                font-size: 18px;
                font-weight: 400;

                a {
                    width: 100%;
                    margin-top: 10px;

                    transition: all .6s;

                    color: white;
                    font-size: 16px;
                    font-weight: 300;
                    text-decoration: none;

                    &:hover {
                        color: var(--colorPrincipal);
                    }
                }
            }
        }

        div.footer__links {
            width: 100%;
            margin-top: 32px;

            display: flex;
            flex-direction: row;
            justify-content: space-between;

            div {
                display: flex;
                flex-direction: column;

                h4 {
                    margin-bottom: 10px;

                    color: white;
                    font-size: 18px;
                    font-weight: 400;
                }

                a {
                    width: max-content;
                    margin: 4px 0;

                    &:first-child {
                        margin-top: 0;
                    }

                    transition: all .6s;

                    color: white;
                    font-size: 16px;
                    font-weight: 300;
                    text-decoration: none;

                    &:hover {
                        color: var(--colorPrincipal);
                    }
                }
            }
        }

        div.footer__media {
            width: 100%;
            margin-top: 32px;

            h4 {
                margin-bottom: 20px;

                color: white;
                font-size: 18px;
                font-weight: 400;
            }

            div {
                margin-bottom: 20px;
                
                display: flex;
                flex-direction: row;
                align-items: center;

                a {
                    width: 28px;
                    height: 28px;
                    margin-right: 10px;
                    
                    &:last-child {
                        margin-right: 0;
                    }

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    border: 1px solid gainsboro;
                    border-radius: 50%;

                    svg {
                        color: white;
                        font-size: 14px;
                    }
                }
            }

            a.meli {
                width: 160px;
                height: 56px;
                margin-top: 20px;

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                background-color: yellow;
                border-radius: 2px;

                img {
                    width: 80%;
                    height: 80%;

                    object-fit: contain;
                }
            }
        }
    }

    div.footer__copyright {
        width: 100%;
        height: max-content;
        margin-top: 40px;
        padding: 10px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background-color: ghostwhite;

        text-align: center;

        h6 {
            color: #1F1F1F;
            font-size: 14px;
            line-height: 24px;
            font-weight: 400;

            a {
                transition: all .6s;

                color: #1F1F1F;
                text-decoration: none;

                &:hover {
                    color: var(--colorPrincipal);
                }
            }

            span {
                display: block;
            }
        }
    }

    @media only screen and (min-width: 768px) {
        div.footer__information {
            flex-direction: row;
            justify-content: space-between;

            div.footer__brand,
            div.footer__links {
                margin-top: 0;
            }

            div.footer__links {
                margin: 0 10px;

                justify-content: center;

                div {
                    margin: 0 12px;
                }
            }

            div.footer__media {
                width: max-content;
                margin-top: 0;
            }
        }     
        
        div.footer__copyright {
            h6 {
                span {
                    display: inline;
                }
            }
        }
    }

    @media only screen and (min-width: 1024px) {
        div.footer__information {
            div.footer__brand {
                min-width: 240px;
            }

            div.footer__links {
                margin: 0 20px;

                div {
                    margin: 0 40px;
                }
            }
        }
    }

    @media only screen and (min-width: 1200px) {
        div.footer__information {
            padding: 40px 120px;
            padding-bottom: 0;
        }
    }
`;

export default function Footer() {
    return (
        <StyledFooter>
            <div className='footer__information'>
                <div className='footer__brand'>
                    <NavLink to='/'><img src={logo} alt='Miltex Indumentaria' /></NavLink>
                    <h4>
                        Estamos en
                        <a href='https://goo.gl/maps/D1D9rFJGrmerEmVg6' target='_blank' rel='noopener noreferrer'>Av. Scalabrini Ortiz 401, Ciudad Autonoma de Buenos Aires, Argentina.</a>
                    </h4>
                </div>
                <div className='footer__links'>
                    <div>
                        <h4>Productos</h4>
                        <NavLink to='/coleccion'>Colección</NavLink>
                        <NavLink to='/coleccion/verano'>Verano</NavLink>
                        <NavLink to='/coleccion/invierno'>Invierno</NavLink>
                        <NavLink to='/galeria'>Galería</NavLink>
                    </div>
                    <div>
                        <h4>Nosotros</h4>
                        <NavLink to='/empresa'>Empresa</NavLink>
                        <a href='https://www.instagram.com/akamasoa_argentina/?hl=es-la' target='_blank' rel='noopener noreferrer'>Akamasoa</a>
                        <NavLink to='/faqs'>FAQ's</NavLink>
                        <NavLink to='/contacto'>Contacto</NavLink>
                    </div>
                    <div>
                        <h4>Contacto</h4>
                        <a href='tel:+5491162715898' target='_blank' rel='noopener noreferrer'>Tel. Mayorista</a>
                        <a href='tel:+5491125610827' target='_blank' rel='noopener noreferrer'>Tel. Minorista</a>
                        <a href='tel:+541148545800' target='_blank' rel='noopener noreferrer'>Tel. Rotativas</a>
                        <a href='mailto:info@miltex.com.ar' target='_blank' rel='noopener noreferrer'>Email</a>
                    </div>
                </div>
                <div className='footer__media'>
                    <h4>Redes sociales</h4>
                    <div>
                        <a href='https://www.instagram.com/gauchotiendaoficial/?hl=es-la' target='_blank' rel='noopener noreferrer'><BsInstagram /></a>
                        <a href='https://www.facebook.com/profile.php?id=100064187136448' target='_blank' rel='noopener noreferrer'><FaFacebookF /></a>
                    </div>
                    <h4>Compra online</h4>
                    <a className='meli' href='https://listado.mercadolibre.com.ar/_CustId_220794390' target='_blank' rel='noopener noreferrer'>
                        <img src={meli} alt='Acceso a Mercado Libre - Miltex Indumentaria' />
                    </a>
                </div>
            </div>
            <div className='footer__copyright'>
                <h6>Copyright © 2023 MILTEX S.A. | <span>Desarrollado por <a href='https://www.linkedin.com/in/nicokatz/' target='_blank' rel='noopener noreferrer'>Nicolas Katz</a></span></h6>
            </div>
        </StyledFooter>
    );
};