import React, { useState, useEffect, createContext } from "react";
import {
  getNewsReleases,
  getParkInfo,
  getParkOfTheDay,
} from "../services/parks";

export const HomeContext = createContext();

export const HomeContextProvider = ({ children }) => {
  const [park, setPark] = useState(null);
  const [featuredPark, setFeaturedPark] = useState(null);
  const [articles, setArticles] = useState([]);
  const [featuredIsLoading, setFeaturedIsLoading] = useState(true);
  const [articlesIsLoading, setArticlesIsLoading] = useState(true);
  const [parkIsLoading, setParkIsLoading] = useState(false);

  const getFeaturedPark = async () => {
    try {
      setFeaturedIsLoading(true);
      const park = await getParkOfTheDay();

      setFeaturedPark(park);
      setFeaturedIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getArticles = async () => {
    try {
      setArticlesIsLoading(true);
      const articles = await getNewsReleases();

      setArticles(articles);
      setArticlesIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getPark = async () => {
    try {
      setParkIsLoading(true);
      const park = await getParkInfo();

      setPark(park);
      setParkIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFeaturedPark();
    getArticles();
  }, []);

  return (
    <HomeContext.Provider
      value={{
        park,
        featuredPark,
        articles,
        featuredIsLoading,
        articlesIsLoading,
        parkIsLoading,
        getPark
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
