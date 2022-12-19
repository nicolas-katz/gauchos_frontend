import React, { useState, useEffect, useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import styled from 'styled-components';
import { NavLink, useParams } from 'react-router-dom';

const StyledColection = styled.div`
    width: 100%;
    height: max-content;
    padding: 120px 20px 60px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: white;

    h1 {
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
        justify-content: space-between;

        a {
            width: 48%;
            height: max-content;
            margin: 10px 0;

            display: flex;
            flex-direction: column;

            text-decoration: none;

            img {
                width: 100%;
                height: 180px;

                border-radius: 2px;

                object-fit: cover;
            }

            h4 {
                margin-top: 10px;
                
                color: black;
                font-size: 18px;
                line-height: 28px;
                font-weight: 400;
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
    const { getAll } = useContext(ProductsContext);
    const [products, setProducts] = useState(null);
    const { categoria } = useParams();

    useEffect(()=> {
        getAll(setProducts);
    }, []);

    return (
        <StyledColection>
            <h1>{!categoria ? 'Colección' : categoria}</h1>
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
                                <h4>{product.name}</h4>
                            </NavLink>
                        )
                    })
                }
            </div>
        </StyledColection>
    );
};