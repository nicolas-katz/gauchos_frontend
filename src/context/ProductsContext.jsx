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

    const getHomeProducts = async (state) => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(( res ) => {
                state(res.data.results.filter(( product, index ) =>  { 
                    if(index < 8) {
                        return product;
                    }; 
                }));
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

    const searchByCategory = async (cat, state) => {
        axios.get(`https://rickandmortyapi.com/api/character`)
            .then(( res ) => {
                state(res.data.results.filter(( product ) => product.category.toUpperCase() === cat.toUpperCase()));
            })
            .catch(( error ) => {
                console.error(error);
            });
    };

    const searchByColection = async (col, state) => {
        axios.get(`https://rickandmortyapi.com/api/character`)
            .then(( res ) => {
                state(res.data.results.filter(( product ) => product.colection.toUpperCase() === col.toUpperCase()));
            })
            .catch(( error ) => {
                console.error(error);
            });
    };

    const sortArrayByAZ = (x, y) => {
        if (x.name < y.name) return -1;
        if (x.name > y.name) return 1;
        return 0;  
    };

    const sortArrayByZA = (x, y) => {
        if (x.name < y.name) return 1;
        if (x.name > y.name) return -1;
        return 0;  
    };

    const sortProducts = (state, sorter) => {
        if(sorter === 1) state.sort(sortArrayByAZ);
        if(sorter === -1) state.sort(sortArrayByZA);
    };

    const [showSearch, setShowSearch] = useState(false);

    const showSearchBar = (value) => {
        setShowSearch(value);
    };

    const [showFilter, setShowFilter] = useState(false);

    const showFilterBar = (value) => {
        setShowFilter(value);
    };

    return (
        <ProductsContext.Provider 
            value={{
                getAll,
                getHomeProducts,
                getById,
                searchByName,
                searchByCategory,
                searchByColection,
                sortProducts,
                showSearchBar,
                showSearch,
                showFilterBar,
                showFilter
            }}>
            {props.children}
        </ProductsContext.Provider>
    );
};