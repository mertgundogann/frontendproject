import { useLanguage } from "../Contexts/LanguageContext";
import content from "../../public/Data/content.json"
import profileImage from '../assets/profile.png';
import { useEffect, useState } from 'react';



const AboutMe = () => {
    const { language, toggleLanguage } = useLanguage();
    const [isDarkMode, setIsDarkMode] = useState(false);
    

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const savedLanguage = localStorage.getItem('language');

        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            setIsDarkMode(false);
        }

        if (savedLanguage) {
            toggleLanguage(savedLanguage); 
        }
    }, []);

    function toggleDarkMode() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    }

    function handleLanguageChange() {
        const newLanguage = language === "tr" ? "en" : "tr";  
        toggleLanguage(newLanguage); 
        localStorage.setItem('language', newLanguage); 
    }

    return (
        <section className="flex relative">

            
            <div className="w-3/4 bg-[#4731d3] p-6 pb-[15vh] dark:bg-[#171043] max-[639px]:w-1/2">
                <div className="flex justify-end mt-4">
                    <button
                        onClick={handleLanguageChange}      
                        className="text-[#cbf281] max-[639px]:pl-5"
                    >
                        {language === "tr" ? (
                            <span className="text-[#cbf281]">Switch <span className="text-white">to English</span></span>
                        ) : (
                            <span className="text-[#cbf281] dark:text-[#c2c2c0] max-[639px]:pl-5 ">Türkçe<span className="text-white dark:text-[#47435d]">'ye Geç</span></span>
                        )}
                    </button>
                </div>

                <div className="text-3xl w-1/2 mx-auto text-[#cbf281] font-bold max-[639px]:text-xm">
                    <h1>
                        {content.aboutMe.name[language]}
                    </h1>
                </div>

                <div className="w-full relative">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="w-32 mt-14 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-tr-lg absolute left-[101%] transform -translate-x-1/2 max-[639px]:ml-27 mt-5" 
                    />
                </div>

                <div className="w-1/2 mx-auto mt-[10vh]">
                    <div>
                        <h2 className="text-5xl font-bold mt-[1vh] text-[#cbf281] max-[639px]:text-xs">
                            {content.aboutMe.title[language]}
                        </h2>
                    </div>

                    <p className="text-white mt-[3vh] mt-[2vh] max-[639px]:text-xs">
                        {content.aboutMe.content[language]}
                    </p>
                    <div className="mx-auto mt-6 flex gap-4 max-[639px]:text-xs">
                        <button className="px-6 py-2 bg-white text-[#4731d3] rounded-lg hover:bg-black font-bold dark:bg-[#252128] dark:text-white max-[639px]:relative max-[639px]:top-5 right-5 text-1px">
                            <i className="fa-brands fa-github"></i>
                             <span className="ml-2">Github</span>
                        </button>
                        <button className="px-6 py-2 bg-white text-[#4731d3] rounded-lg hover:bg-black font-bold dark:bg-[#252128] dark:text-white max-[639px]:relative max-[639px]:top-5 left-15">
                            <i className="fa-brands fa-linkedin"></i>
                            <span className="ml-2">Linkedin</span>
                        </button>
                    </div>
                </div>
            </div>

            
            <div className="w-1/4 bg-[#cbf281] dark:bg-[#211f0b] p-10 dark:text-[#c2c2c0] max-[639px]:w-[50%]">
                <button className="text-black font-bold dark:text-[#c2c2c0]" onClick={toggleDarkMode}>
                    {isDarkMode ? 'Aydınlığa Geç' : 'Karanlık tarafa Geç'}
                </button>
            </div>
        </section>
    );
};

export default AboutMe;
