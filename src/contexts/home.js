import React, { useState, useEffect, createContext } from 'react';
import { getNewsReleases, getParkOfTheDay } from '../services/parks';

export const HomeContext = createContext();

export const HomeContextProvider = ({ children }) => {
    const [park, setPark] = useState(null);
    const [news, setNews] = useState([]);
    const [featuredIsLoading, setFeaturedIsLoading] = useState(false);
    const [newsIsLoading, setNewsIsLoading] = useState(false);
    
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

    const getNews = async () => {
        try {
            setNewsIsLoading(true);
            const news = await getNewsReleases();

            setNews(news);
            setNewsIsLoading(false);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getPark();
        getNews();
    }, [])

    return (
        <HomeContext.Provider value={{ park, news, featuredIsLoading, newsIsLoading }}>
            {children}
        </HomeContext.Provider>
    )
}