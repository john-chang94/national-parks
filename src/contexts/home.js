import React, { useState, useEffect, createContext } from 'react';
import { getParkOfTheDay } from '../services/home';

export const HomeContext = createContext();

export const HomeContextProvider = ({ children }) => {
    const [park, setPark] = useState(null);
    
    const getPark = async () => {
        try {
            const park = await getParkOfTheDay();
            setPark(park);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getPark();
    }, [])
    return (
        <HomeContext.Provider value={{ park }}>
            {children}
        </HomeContext.Provider>
    )
}