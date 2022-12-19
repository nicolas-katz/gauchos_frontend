import React, { useContext } from 'react';
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
        width: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;

        svg {
            cursor: pointer;

            color: white;
            font-size: 18px;
        }
    }

    div.filter__body {
        width: 100%;
        margin-top: 60px;

        display: flex;
        flex-direction: column;

        div {
            margin: 10px 0;

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
        }
    }
`;

export default function FilterProducts() {
    const { showFilterBar } = useContext(ProductsContext);

    const handleClose = () => {
        showFilterBar(false);
    };

    document.querySelectorAll('.filter__body div a').forEach(( item ) => {
        item.addEventListener('click', handleClose());
    });

    return (
        <StyledFilters>
            <div className='filter__header'>
                <IoMdClose onClick={handleClose} />
            </div>
            <div className='filter__body'>
                <div>
                    <h4>Buscar por nombre</h4>
                </div>
                <div>
                    <h4>Buscar por colección</h4>
                    <NavLink to='/coleccion/verano'>Verano</NavLink>
                    <NavLink to='/coleccion/invierno'>Invierno</NavLink>
                    <NavLink to='/coleccion/dama'>Dama</NavLink>
                    <NavLink to='/coleccion/seguridad'>Trabajo y Seguridad Industrial</NavLink>
                </div>
                <div>
                    <h4>Buscar por categoría</h4>
                    <NavLink to='/coleccion/alpargatas'>Alpargatas</NavLink>
                    <NavLink to='/coleccion/bermudas'>Bermudas</NavLink>
                    <NavLink to='/coleccion/bombachas'>Bombachas</NavLink>
                    <NavLink to='/coleccion/calzado'>Calzado de Trabajo</NavLink>
                    <NavLink to='/coleccion/camisas'>Camisas</NavLink>
                    <NavLink to='/coleccion/pantalones'>Pantalones</NavLink>
                    <NavLink to='/coleccion/cargos'>Pantalones Cargo</NavLink>
                </div>
            </div>
        </StyledFilters>
    );
};