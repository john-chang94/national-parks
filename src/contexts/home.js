import React, { useState, useEffect, createContext } from 'react';
import { getNewsReleases, getParkOfTheDay } from '../services/parks';

export const HomeContext = createContext();

export const HomeContextProvider = ({ children }) => {
    const [park, setPark] = useState(null);
    const [articles, setArticles] = useState([]);
    const [featuredIsLoading, setFeaturedIsLoading] = useState(true);
    const [articlesIsLoading, setArticlesIsLoading] = useState(true);
    
    const getPark = async () => {
        try {
            setFeaturedIsLoading(true);
            const park = await getParkOfTheDay();

            setPark(park);
            setFeaturedIsLoading(false);
        } catch (err) {
            console.log(err);
        }
    }

    const getArticles = async () => {
        try {
            setArticlesIsLoading(true);
            const articles = await getNewsReleases();

            setArticles(articles);
            setArticlesIsLoading(false);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getPark();
        getArticles();
    }, [])

    return (
        <HomeContext.Provider value={{ park, articles, featuredIsLoading, articlesIsLoading }}>
            {children}
        </HomeContext.Provider>
    )
}