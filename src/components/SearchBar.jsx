import React, { useState, useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import styled from 'styled-components';
import { MdOutlineClose, BiSearch } from 'react-icons/all';
import { useNavigate, NavLink } from 'react-router-dom';

const StyledSearchBar = styled.form`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;

    width: 100%;
    height: max-content;
    padding: 20px;

    display: flex;
    flex-direction: column;

    background-color: white;
    border-radius: 2px;

    overflow-y: auto;

    div.searchbar__container {
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

                color: gray;
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

                color: black;
                font-size: 14px;
                font-weight: 300;
                text-transform: uppercase;
                letter-spacing: 2px;
            }
        }

        div {
            display: flex;
            flex-direction: row;
            align-items: center;

            button {
                width: max-content;
                height: 42px;
                padding: 0 20px;

                display: flex;
                flex-direction: column;
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

            svg {
                margin-left: 10px;

                color: black;
                font-size: 18px;
            }
        }
    }

    div.searchbar__products {
        width: 100%;
        height: max-content;
        margin-top: 20px;

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
                height: 120px;

                object-fit: cover;
            }

            h4 {
                margin-top: 4px;

                color: black;
                font-size: 14px;
                line-height: 24px;
                font-weight: 400;
            }
        }
    }

    @media only screen and (min-width: 768px) {
        div.searchbar__products {
            a {
                width: 32%;
                margin: 14px 0;

                img {
                    height: 180px;
                }
            }
        }
    }
`;

export default function SearchBar({ setSearchBar }) {
    const { searchByName, showSearchBar } = useContext(ProductsContext);
    const [input, setInput] = useState('');
    const [products, setProducts] = useState(null);
    const nav = useNavigate();

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleClose = () => {
        showSearchBar(false);
        setInput('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        searchByName(input, setProducts);  
    };

    const handleSearch = () => {
        handleClose();
    };

    return (
        <StyledSearchBar onSubmit={handleSubmit}>
            <div className='searchbar__container'>
                <span>
                    <BiSearch />
                    <input 
                        onChange={handleChange}
                        type='search' 
                        name='search' 
                        id='search' 
                        minLength='1' 
                        placeholder='Buscar nombre' 
                        value={input}
                        required 
                    />
                </span>
                <div>
                    <button type='submit'>Buscar</button>
                    <MdOutlineClose onClick={handleClose} />
                </div>
            </div>
            {
                products !== null && 
                <div className='searchbar__products'>

                {
                    products.map(( product ) => {
                        return(
                            <NavLink key={product.id} onClick={handleSearch} to={`/coleccion/producto/${product.id}`}>
                                <img src={product.image} alt={product.name} />
                                <h4>{product.name}</h4>
                            </NavLink>
                        )
                    })
                }

                </div>
            }
        </StyledSearchBar>
    );
};