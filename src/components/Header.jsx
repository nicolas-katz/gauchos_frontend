import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { HiMenu, MdOutlineClose, BiSearch } from 'react-icons/all';
import logo from '../assets/logo.png';

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    width: 100%;
    height: max-content;
    padding: 10px 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background-color: white;

    nav {
        width: 100%;
        margin-right: 20px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        a img {
            width: 56px;
            
            object-fit: contain;
        }

        ul {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 11;

            width: 100%;
            height: 100vh;
            padding: 20px;

            display: none;

            background-color: white;

            a {
                width: max-content;
                margin: 20px 0;

                transition: all .6s;

                color: black;
                font-size: 16px;
                font-weight: 500;
                text-align: center;
                text-decoration: none;

                &:hover,
                &.active {
                    color: var(--colorPrincipal);
                }

                li {
                    list-style: none;
                }
            }
        }

        .open__menu {
            cursor: pointer;

            color: black;
            font-size: 16px;
        }

        .close__menu {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 12;

            display: none;

            cursor: pointer;

            color: black;
            font-size: 18px;
        }

        .search__icon { 
            cursor: pointer;
           
            color: black;
            font-size: 18px;
        }
    }

    &.menu__active {
        nav {
            ul {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
        }

        .open__menu {
            display: none;            
        }

        .close__menu {
            display: flex;
        }
    }

    @media only screen and (min-width: 1024px) {
        nav {
            ul {
                position: unset;

                width: 100%;
                height: max-content;

                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;

                background-color: transparent;

                a {
                    margin: 0 20px;
                }
            }
        }

        .open__menu,
        .close__menu {
            display: none;
        }
    }

    @media only screen and (min-width: 1200px) {
        padding: 10px 80px;
    }
`;

export default function Header() {
    const handleOpenMenu = () => {
        document.querySelector('header').classList.add('menu__active');
    };

    const handleCloseMenu = () => {
        document.querySelector('header').classList.remove('menu__active');
    };
    
    return (
        <StyledHeader>
            <nav>
                <NavLink to='/'><img src={logo} alt='Miltex Indumentaria' /></NavLink>
                <ul>
                    <NavLink to='/coleccion' onClick={handleCloseMenu}><li>Colección</li></NavLink>
                    <NavLink to='/galeria' onClick={handleCloseMenu}><li>Galería</li></NavLink>
                    <NavLink to='/empresa' onClick={handleCloseMenu}><li>Empresa</li></NavLink>
                    <NavLink to='/contacto' onClick={handleCloseMenu}><li>Contacto</li></NavLink>
                </ul>
                <HiMenu onClick={handleOpenMenu} className='open__menu' />
                <MdOutlineClose onClick={handleCloseMenu} className='close__menu' />
            </nav>
            <BiSearch className='search__icon' />
        </StyledHeader>
    );
};