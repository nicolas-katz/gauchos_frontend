import React, { createContext, useState } from 'react';
import axios from 'axios';

export const ProductsContext = createContext();

export function ProductsContextProvider(props) {
    const getAll = async (state) => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(( res ) => {
                state(res.data.results);
            })
            .catch(( error ) => {
                console.error(error);
            });
    };

    const getById = async (id, state) => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(( res ) => {
                state(res.data);
            })
            .catch(( error ) => {
                console.error(error);
            });
    };

    const searchByName = async (input, state) => {
        axios.get(`https://rickandmortyapi.com/api/character`)
            .then(( res ) => {
                state(res.data.results.filter(( product ) => product.name.toUpperCase().includes(input.toUpperCase())));
            })
            .catch(( error ) => {
                console.error(error);
            });
    };

    const [show, setShow] = useState(false);

    const showSearchBar = (value) => {
        setShow(value);
    };

    return (
        <ProductsContext.Provider 
            value={{
                getAll,
                getById,
                searchByName,
                showSearchBar,
                show
            }}>
            {props.children}
        </ProductsContext.Provider>
    );
};