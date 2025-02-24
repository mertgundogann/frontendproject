import { useLanguage } from "../Contexts/LanguageContext";
import content from "../data/content.json";

const AboutMe = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <section className="flex">
            
            <div className="w-3/4 bg-[#4731d3] p-6">
            <div className="flex justify-end mt-4 ">
                    <button
                        onClick={toggleLanguage}
                        className="text-[#cbf281]"
                    >
                         {language === "tr" ? (
                            <span className="text-[#cbf281]">Switch to English</span>
                        ) : (
                            <span className="text-[#cbf281]">Türkçe<span className="text-white">'ye Geç</span></span>
                        )}
                    </button>
                </div>
                <div className="w-1/2 mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-auto">
                    {content.aboutMe.title[language]}
                </h2>
                <p className="text-white">
                    {content.aboutMe.content[language]}
                </p>
                </div>
                  
            </div>

            
            <div className="w-1/4 bg-[#cbf281] p-6">
                <h2 className="text-black">Dark mode</h2>
            </div>
        </section>
    );
};

export default AboutMe;
