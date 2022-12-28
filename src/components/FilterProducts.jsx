import React, { useState, useContext } from 'react';
import { BiSearch } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ProductsContext } from '../context/ProductsContext';

const StyledFilters = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    width: 100%;
    height: 100vh;
    padding: 20px;

    display: flex;
    flex-direction: column;

    overflow-y: scroll;

    background-color: #1F1F1F;

    div.filter__header {
        position: relative;
        
        width: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;

        svg {
            position: fixed;
            top: 20px;
            right: 20px;

            cursor: pointer;

            color: white;
            font-size: 18px;
        }
    }

    div.filter__body {
        width: 100%;
        margin: 60px 0;

        display: flex;
        flex-direction: column;

        div {
            width: 100%;
            margin: 10px 0;

            form {
                width: 100%;

                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;

                span {
                    display: flex;
                    flex-direction: row;
                    align-items: center;

                    svg {
                        margin-top: 2px;
                        margin-right: 10px;

                        color: gainsboro;
                        font-size: 14px;
                    }

                    input {
                        width: 100%;
                        height: max-content;

                        background-color: transparent;
                        border: none;
                        border-radius: 0;
                        outline: none;
                        cursor: pointer;
                        transition: all .6s;

                        color: white;
                        font-size: 14px;
                        font-weight: 300;
                        text-transform: uppercase;
                        letter-spacing: 2px;

                        &::placeholder {
                            color: white;
                        }
                    }
                }

                button {
                    width: max-content;
                    height: 42px;
                    padding: 0 20px;

                    display: flex;
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
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }
            }

            h4 {
                margin-bottom: 8px;

                color: var(--colorPrincipal);
                font-size: 18px;
                line-height: 28px;
                font-weight: 400;
            }

            a {
                width: max-content;
                margin: 6px 0;

                display: block;

                color: white;
                font-size: 16px;
                line-height: 26px;
                font-weight: 300;
                text-decoration: none;
            }

            &:last-child {
                display: flex;
                flex-direction: column;

                button {
                    width: max-content;
                    height: max-content;
                    margin-bottom: 6px;

                    &:last-child {
                        margin-bottom: 0;
                    }

                    background-color: transparent;
                    border: none;
                    border-radius: 0;
                    outline: none;
                    cursor: pointer;
                    transition: all .6s;

                    color: white;
                    font-size: 16px;
                    line-height: 26px;
                    font-weight: 300;
                    text-align: left;
                }
            }
        }
    }
`;

export default function FilterProducts({ state, state2, products }) {
    const { showFilterBar, searchByName, searchByCategory, searchByColection, sortProducts } = useContext(ProductsContext);
    const [input, setInput] = useState('');

    const handleClose = () => {
        showFilterBar(false);
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        searchByName(input, state);  
        
        handleClose();

        state2(`Resultado para busqueda: ${input}`);
    };

    const handleSort = (sorter) => {
        sortProducts(products, sorter);

        handleClose();
    };

    return (
        <StyledFilters>
            <div className='filter__header'>
                <IoMdClose onClick={handleClose} />
            </div>
            <div className='filter__body'>
                <div>
                    <h4>Buscar por nombre</h4>
                    <form onSubmit={handleSubmit}>
                        <span>
                            <BiSearch />
                            <input 
                                onChange={handleChange}
                                type='text' 
                                name='search' 
                                id='search' 
                                minLength='1' 
                                placeholder='Buscar nombre'
                                value={input}
                                required 
                            />
                        </span>
                        <button type='submit'>Buscar</button>
                    </form>
                </div>
                <div>
                    <h4>Buscar por colección</h4>
                    <NavLink to='/coleccion' onClick={handleClose}>Todas las colecciones</NavLink>
                    <NavLink to='/coleccion/verano' onClick={handleClose}>Verano</NavLink>
                    <NavLink to='/coleccion/invierno' onClick={handleClose}>Invierno</NavLink>
                    <NavLink to='/coleccion/dama' onClick={handleClose}>Dama</NavLink>
                    <NavLink to='/coleccion/seguridad' onClick={handleClose}>Trabajo y Seguridad Industrial</NavLink>
                </div>
                <div>
                    <h4>Buscar por categoría</h4>
                    <NavLink to='/coleccion' onClick={handleClose}>Todas las categorías</NavLink>
                    <NavLink to='/coleccion/alpargatas' onClick={handleClose}>Alpargatas</NavLink>
                    <NavLink to='/coleccion/bermudas' onClick={handleClose}>Bermudas</NavLink>
                    <NavLink to='/coleccion/bombachas' onClick={handleClose}>Bombachas</NavLink>
                    <NavLink to='/coleccion/calzado' onClick={handleClose}>Calzado de Trabajo</NavLink>
                    <NavLink to='/coleccion/camisas' onClick={handleClose}>Camisas</NavLink>
                    <NavLink to='/coleccion/pantalones' onClick={handleClose}>Pantalones</NavLink>
                    <NavLink to='/coleccion/cargos' onClick={handleClose}>Pantalones Cargo</NavLink>
                </div>
                <div>
                    <h4>Ordenar por</h4>
                    <button onClick={() => handleSort(1)}>Nombre (A - Z)</button>
                    <button onClick={() => handleSort(-1)}>Nombre (Z - A)</button>
                </div>
            </div>
        </StyledFilters>
    );
};