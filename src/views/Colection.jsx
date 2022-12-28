import React, { useState, useEffect, useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import styled from 'styled-components';
import { NavLink, useParams } from 'react-router-dom';
import { CiFilter } from 'react-icons/all';
import FilterProducts from '../components/FilterProducts';

const StyledColection = styled.div`
    width: 100%;
    height: max-content;
    padding: 120px 20px 60px 20px;

    display: flex;
    flex-direction: column;

    background-color: white;

    h1 {
        color: black;
        font-size: 36px;
        line-height: 46px;
        font-weight: 400;
        text-align: center;
        text-transform: capitalize;
    }

    label {
        margin-top: 10px;

        color: gray;
        font-size: 14px;
        line-height: 24px;
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    div.colection__filters {
        margin-top: 40px;

        button.filter__button {
            width: 100%;
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
            text-transform: uppercase;
            letter-spacing: 2px;

            svg {
                margin-left: 14px;

                color: white;
                font-size: 16px;
            }
        }
    }

    div.colection__container {
        margin-top: 20px;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
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
                text-transform: uppercase;
                letter-spacing: 2px;
            }

            h4 {
                margin-top: 2px;
                
                color: black;
                font-size: 18px;
                line-height: 28px;
                font-weight: 400;
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

    @media only screen and (min-width: 768px) {
        div.colection__container {
            a {
                margin: 20px 0;

                img {
                    height: 360px;
                }
            }
        }    
    }

    @media only screen and (min-width: 1024px) {
        div.colection__container {
            a {
                width: 32%;

                img {
                    height: 420px;
                }
            }
        }    
    }
`;

export default function Colection() {
    const { category } = useParams();
    const { getAll, showFilterBar, showFilter } = useContext(ProductsContext);
    const [products, setProducts] = useState(null);
    const [title, setTitle] = useState('');
    
    const handleChange = () => {
        showFilterBar(true);
    };

    useEffect(()=> {
        getAll(setProducts);
        setTitle(category ? category : 'Colección');
    }, [category]);

    return (
        <StyledColection>
            <h1>{title}</h1>
            <div className='colection__filters'>
                <button className='filter__button' onClick={handleChange}>Filtrar <CiFilter /></button>
                {
                    showFilter && <FilterProducts state={setProducts} state2={setTitle} products={products} />
                }
            </div>
            <label>Productos encontrados: {products?.length}</label>
            <div className='colection__container'>
                {
                    products !== null &&
                    products.map((product) => {
                        return(
                            <NavLink key={product.id} to={`/coleccion/producto/${product.id}`}>
                                <img    
                                    src={product.image} 
                                    alt={product.name} 
                                />
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
        </StyledColection>
    );
};