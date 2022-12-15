import React, { createContext } from 'react';

export const ProductsContext = createContext();

export function ProductsContextProvider(props) {
    return (
        <ProductsContext.Provider 
            value={{
            }}>
            {props.children}
        </ProductsContext.Provider>
    );
};