import React, { createContext, useContext, useState, useEffect } from 'react';


const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
    
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'tr');

   
    const toggleLanguage = (newLanguage) => {
        const newLang = newLanguage || (language === 'tr' ? 'en' : 'tr');
        setLanguage(newLang);
        localStorage.setItem('language', newLang);
    };

    useEffect(() => {
        
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            setLanguage(savedLanguage);
        }
    }, []);

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
