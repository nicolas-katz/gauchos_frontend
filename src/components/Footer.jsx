import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { BsInstagram, FaFacebookF, AiOutlineMail } from 'react-icons/all';
import logo from '../assets/logo.png';
import meli from '../assets/meli.png';
import datafiscal from '../assets/datafiscal.png';

const StyledFooter = styled.footer`
    width: 100%;
    height: max-content;
    padding: 20px;

    display: flex;
    flex-direction: column;

    background-color: #1F1F1F;

    div.footer__information {
        width: 100%;

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

            a.data__fiscal img {
                width: 80px;
                margin-top: 20px;
                margin-bottom: 0;

                object-fit: contain;
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
                width: 240px;
                height: 72px;
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

    @media only screen and (min-width: 768px) {
        div.footer__information {
            flex-direction: row;
            justify-content: space-between;

            div.footer__brand,
            div.footer__links {
                margin-top: 0;

                margin-right: 20px;
            }

            div.footer__media {
                margin-top: 0;
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
            font-size: 16px;
            line-height: 26px;
            font-weight: 500;

            a {
                transition: all .6s;

                color: #1F1F1F;
                text-decoration: none;

                &:hover {
                    color: var(--colorPrincipal);
                }
            }
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
                        <a href='https://goo.gl/maps/D1D9rFJGrmerEmVg6' target='_blank' rel='noopener noreferrer'>Av. Scalabrini Ortiz 401, Ciudad Autonoma de Buenos Aires.</a>
                    </h4>
                    <a className='data__fiscal' href='https://serviciosweb.afip.gob.ar/clavefiscal/qr/publicInfoD.aspx' target='_blank' rel='noopener noreferrer'><img src={datafiscal} alt='Data fiscal (AFIP) - Miltex Indumentaria' /></a>
                </div>
                <div className='footer__links'>
                    <div>
                        <h4>Productos</h4>
                        <NavLink to='/coleccion'>Colección</NavLink>
                        <NavLink to='/coleccion/verano'>Verano</NavLink>
                        <NavLink to='/coleccion/invierno'>Invierno</NavLink>
                    </div>
                    <div>
                        <h4>Nosotros</h4>
                        <NavLink to='/empresa'>Empresa</NavLink>
                        <NavLink to='/galeria'>Galería</NavLink>
                        <NavLink to='/contacto'>Contacto</NavLink>
                    </div>
                    <div>
                        <h4>Lineas</h4>
                        <a href='tel:+5491162715898' target='_blank' rel='noopener noreferrer'>Mayorista</a>
                        <a href='tel:+5491125610827' target='_blank' rel='noopener noreferrer'>Minorista</a>
                        <a href='tel:+541148545800' target='_blank' rel='noopener noreferrer'>Rotativas</a>
                    </div>
                </div>
                <div className='footer__media'>
                    <h4>Redes sociales</h4>
                    <div>
                        <a href='https://www.instagram.com/gauchotiendaoficial/?hl=es-la' target='_blank' rel='noopener noreferrer'><BsInstagram /></a>
                        <a href='https://www.facebook.com/profile.php?id=100064187136448' target='_blank' rel='noopener noreferrer'><FaFacebookF /></a>
                        <a href='mailto:info@miltex.com.ar' target='_blank' rel='noopener noreferrer'><AiOutlineMail /></a>
                    </div>
                    <h4>Compra en</h4>
                    <a className='meli' href='' target='_blank'>
                        <img src={meli} alt='Acceso a Mercado Libre - Miltex Indumentaria' />
                    </a>
                </div>
            </div>
            <div className='footer__copyright'>
                <h6>Copyright © 2023 MILTEX S.A. | Desarrollado por <a href='https://www.linkedin.com/in/nicokatz/' target='_blank' rel='noopener noreferrer'>Nicolas Katz</a></h6>
            </div>
        </StyledFooter>
    );
};