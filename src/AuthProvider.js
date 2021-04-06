import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = React.createContext({});

export const AuthProvider = ({
    children,
}) => {
    const [user, setUser] = useState(null);
    const [params, setParams] = useState(null);
   
    return <AuthContext.Provider
        value={{
            user,
            
            params,
            login: (data) => {
                setUser(data);
            },
            logout: () => {
                setUser(null);
                AsyncStorage.removeItem('@user');
                // AsyncStorage.removeItem('@token');
            },
            setRouteParams: (param) => {
                setParams(param);
            },
            resetParam: () => {
                setParams(null);
            }
        }}>
        {children}
    </ AuthContext.Provider>
}
