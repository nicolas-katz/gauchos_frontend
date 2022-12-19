import React, { createContext, useState, useEffect } from 'react';
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

    return (
        <ProductsContext.Provider 
            value={{
                getAll,
                getById
            }}>
            {props.children}
        </ProductsContext.Provider>
    );
};