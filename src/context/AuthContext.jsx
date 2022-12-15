import React, { createContext } from 'react';

export const AuthContext = createContext();

export function AuthContextProvider(props) {
    return (
        <AuthContext.Provider 
            value={{
            }}>
            {props.children}
        </AuthContext.Provider>
    );
};