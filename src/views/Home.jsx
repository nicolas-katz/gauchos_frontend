import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import main from '../assets/main_ejemplo.jpg';
import { ProductsContext } from '../context/ProductsContext';
import { BsBuilding, BsCart, BsTruck } from 'react-icons/all';

const StyledMain = styled.div`
    position: relative;

    width: 100%;
    height: 640px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & img {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;

        width: 100%;
        height: 100%;

        object-fit: cover;
    }

    & a {
        width: max-content;
        height: 54px;
        margin-top: 60px;
        padding: 0 28px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        background-color: var(--colorPrincipal);
        border: none;
        border-radius: 2px;
        cursor: pointer;
        transition: all .6s;

        color: white;
        font-size: 14px;
        font-weight: 400;
        text-align: center;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 2px;
    }
`;

const StyledInformation = styled.div`
    width: 100%;
    height: max-content;
    padding: 0 20px 60px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;

    div {        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        span {
            margin-bottom: 24px;

            &:last-child {
                margin-bottom: 0;
            }

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            svg {
                margin-bottom: 12px;

                color: var(--colorPrincipal);
                font-size: 42px;
            }

            h5 {
                color: black;
                font-size: 14px;
                line-height: 24px;
                font-weight: 500;
                text-align: center;
                text-transform: uppercase;
                letter-spacing: 2px;
            }

            p {
                margin: 0;
                margin-top: 10px;

                color: gray;
                font-size: 18px;
                line-height: 28px;
                font-weight: 300;
            }
        }
    }
`;

const StyledColletions = styled.div`
    width: 100%;
    height: max-content;
    padding: 60px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;

    h2 {
        color: black;
        font-size: 36px;
        line-height: 46px;
        font-weight: 400;
    }

    div.colection__container {
        margin-top: 40px;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        a {
            position: relative;

            width: 100%;
            height: 200px;
            margin: 2%;

            display: flex;
            flex-direction: column;

            text-decoration: none;

            img {
                width: 100%;
                height: 100%;

                image-rendering: optimizeQuality;

                border-radius: 2px;

                object-fit: cover;
            }

            h4 {
                position: absolute;
                bottom: 20px;
                left: 20px;

                width: max-content;
                max-width: 80%;
                height: max-content;
                padding: 8px 12px;

                display: flex;
                align-items: center;
                justify-content: center;

                background-color: var(--colorPrincipal);
                border-radius: 2px;

                color: white;
                font-size: 14px;
                line-height: 24px;
                font-weight: 400;
                text-align: left;
                text-transform: uppercase;
                letter-spacing: 2px;
            }
        }
    }
`;

const StyledProducts = styled.div`
    width: 100%;
    height: max-content;
    padding: 0 20px 60px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;

    h2 {
        color: black;
        font-size: 36px;
        line-height: 46px;
        font-weight: 400;
    }

    div.products__container {
        margin-top: 40px;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;

        a {
            width: 48%;
            height: max-content;
            margin: 14px 0;

            display: flex;
            flex-direction: column;

            text-decoration: none;

            img {
                width: 100%;
                height: 240px;

                border-radius: 2px;

                object-fit: cover;
                image-rendering: optimizeQuality;
            }

            h5 {
                margin-top: 10px;

                color: gray;
                font-size: 10px;
                line-height: 20px;
                font-weight: 400;
                text-align: left;
                text-transform: uppercase;
                letter-spacing: 2px;
            }

            h4 {
                margin-top: 2px;

                color: black;
                font-size: 16px;
                line-height: 26px;
                font-weight: 400;
                text-align: left;
            }

            span {
                margin-top: 2px;

                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                align-items: center;

                label {
                    width: 24px;
                    height: 24px;
                    margin-right: 6px;

                    background-color: red;
                    border: 2px solid gainsboro;
                    border-radius: 50%;

                    &:last-child {
                        background-color: blue;
                    }
                }
            }
        }
    }

    a.all__products {
        width: max-content;
        height: 54px;
        margin-top: 20px;
        padding: 0 28px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: var(--colorPrincipal);
        border-radius: 2px;
        outline: none;
        cursor: pointer;
        transition: all .6s;

        color: white;
        font-size: 14px;
        font-weight: 400;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
`;

export default function Home() {
    const { getHomeProducts } = useContext(ProductsContext);
    const [products, setProducts] = useState(null);

    useEffect(() => {
        getHomeProducts(setProducts);
    }, []);

    return (
        <div>
           <StyledMain>
                <img src={main} alt='Miltex Indumentaria' />
                <NavLink to='/coleccion'>Comprar ahora</NavLink>
           </StyledMain> 
           <StyledColletions>
                <h2>Colecciones populares</h2>
                <div className='colection__container'>
                    <NavLink to='/coleccion/verano'>
                        <img 
                            src={main}
                            alt='Miltex Indumentaria' 
                        />
                        <h4>Verano</h4>
                    </NavLink>
                    <NavLink to='/coleccion/invierno'>
                        <img 
                            src={main}
                            alt='Miltex Indumentaria' 
                        />
                        <h4>Invierno</h4>
                    </NavLink>
                    <NavLink to='/coleccion/dama'>
                        <img 
                            src={main}
                            alt='Miltex Indumentaria' 
                        />
                        <h4>Dama</h4>
                    </NavLink>
                    <NavLink to='/coleccion/seguridad'>
                        <img 
                            src={main}
                            alt='Miltex Indumentaria' 
                        />
                        <h4>Trabajo y Seguridad Industrial</h4>
                    </NavLink>
                </div>
           </StyledColletions>
           <StyledProducts>
                <h2>Nuestros productos</h2>
                <div className='products__container'>
                    {
                        products !== null && 
                        products.map(( product ) => {
                            return(
                                <NavLink 
                                    key={product.id} 
                                    to={`/coleccion/producto/${product.id}`}
                                >
                                    <img src={product.image} alt={product.name} />
                                    <h5>Colección</h5>
                                    <h4>{product.name}</h4>
                                    <span>
                                        <label></label>
                                        <label></label>
                                    </span>
                                </NavLink>
                            )
                        })
                    }
                </div>
                <NavLink className='all__products' to='/coleccion'>Ver todos</NavLink>
           </StyledProducts>
           <StyledInformation>   
                <div>
                    <span>
                        <BsBuilding />
                        <h5>Somos fabricantes</h5>
                        <p>Somos fabricantes directos de Indumentaria Gaucho.</p>    
                    </span>
                    <span>  
                        <BsCart />                   
                        <h5>Venta por mayor y menor</h5>
                        <p>Consulta por nuestro catalogo mayorista y minorista.</p>
                    </span>
                    <span>  
                        <BsTruck />                    
                        <h5>Envíos a todo el país</h5>
                        <p>Ofrecemos servicio de envio de producto para todo el país.</p>
                    </span>
                </div>
            </StyledInformation>
        </div>
    );
};