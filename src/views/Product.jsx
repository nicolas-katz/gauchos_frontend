import React, { useState, useEffect, useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';
import {
    BsWhatsapp,
    BsCart
} from 'react-icons/all';

const StyledProduct = styled.div`
    width: 100%;
    height: max-content;
    padding: 140px 20px 60px 20px;

    display: flex;
    flex-direction: column;

    background-color: white;

    div.product__container {
        width: 100%;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;

        div.product__images {
            width: 100%;
            height: max-content;

            img {
                width: 100%;
                height: 420px;

                border-radius: 2px;

                object-fit: cover;
                image-rendering: optimizeQuality;
            }
        }

        div.product__information {
            width: 100%;
            height: max-content;
            margin-top: 20px;

            display: flex;
            flex-direction: column;

            span {
                display: flex;
                flex-direction: row;
                align-items: center;

                color: black;
                font-size: 14px;
                line-height: 34px;
                font-weight: 300;

                p {
                    margin-left: 10px;
                }

                a {
                    margin: 0 10px;

                    &:first-child {
                        margin-left: 0;
                    }
                    
                    color: var(--colorPrincipal);
                    text-decoration: none;
                }
            }

            h3 {
                margin-top: 20px;

                color: black;
                font-size: 28px;
                line-height: 38px;
                font-weight: 400;
            }

            div.product__buttons {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                align-items: center;

                a {
                    width: 100%;
                    height: 54px;
                    margin-top: 20px;
                    padding: 0 28px;

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;

                    background-color: #48da48;
                    border: none;
                    border-radius: 2px;
                    cursor: pointer;
                    transition: all .6s;

                    color: white;
                    font-size: 14px;
                    font-weight: 400;
                    text-decoration: none;
                    text-transform: uppercase;
                    letter-spacing: 2px;

                    svg {
                        margin-left: 12px;

                        color: white;
                        font-size: 14px;
                    }

                    &:last-child {
                        margin-top: 20px;

                        background-color: var(--colorPrincipal);
                    }
                }
            }
        }
    }

    @media only screen and (min-width: 768px) {
        div.product__container {
            div.product__images,
            div.product__information {
                width: 48%;
            }

            div.product__images {
                img {
                    height: 520px;
                }
            }

            div.product__information {
                margin-top: 0;

                h3 {
                    margin-top: 40px;

                    font-size: 32px;
                    line-height: 42px;
                }
            }
        }
    }
`;

export default function Product() {
    const { getById } = useContext(ProductsContext);
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getById(id, setProduct);
    }, [id]);

    return (
        <StyledProduct>
            {
                product !== null && 
                <div className='product__container'>
                    <div className='product__images'>
                        <img src={product.image} />
                    </div>
                    <div className='product__information'>
                        <span>
                            <NavLink to='/'>Inicio</NavLink>/<NavLink to='/coleccion'>Colección</NavLink>/<p>{product.name}</p>
                        </span>
                        <h3>{product.name}</h3>
                        <div className='product__buttons'>
                            <a 
                                href={`https://web.whatsapp.com/send?phone=5491168760961&text=Hola! Quiero más información acerca del producto ${product.name}. Gracias!`}
                                target='_blank' 
                                rel='noopener noreferrer'
                            >
                                Consultar stock <BsWhatsapp />
                            </a>
                            <NavLink 
                                to='/contacto'
                            >
                                Realizar pedido <BsCart />
                            </NavLink>
                        </div>
                    </div>
                </div>
            }
        </StyledProduct>
    );
};