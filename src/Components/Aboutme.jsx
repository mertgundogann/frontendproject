import { useLanguage } from "../Contexts/LanguageContext";
import content from "../data/content.json";
import profileImage from '../assets/profile.png';
import { Button } from 'reactstrap';

const AboutMe = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <section className="flex relative ">

            <div className="w-3/4 bg-[#4731d3] p-6 pb-[15vh]">
                <div className="flex justify-end mt-4">
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

                <div className="text-3xl w-1/2 mx-auto text-[#cbf281] font-bold">
                    <h1>
                        {content.aboutMe.name[language]}
                    </h1>
                </div>

                <div className="w-full relative">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-tr-lg absolute left-[101%] transform -translate-x-1/2"
                    />
                </div>

                <div className="w-1/2 mx-auto mt-[10vh]">
                    <div>
                        <h2 className="text-5xl font-bold mt-[1vh] text-[#cbf281]">
                            {content.aboutMe.title[language]}
                        </h2>
                    </div>

                    <p className="text-white mt-[3vh] mt-[2vh]">
                        {content.aboutMe.content[language]}
                    </p>
                    <div className="mx-auto mt-6 flex gap-4">
                        <button className="px-6 py-2  bg-white text-[#4731d3] rounded-lg hover:bg-blue-700 font-bold">
                            <i class="fa-brands fa-github"></i>
                            <span className="ml-2">Github</span>
                        </button>
                        <button className="px-6 py-2 bg-white text-[#4731d3] rounded-lg hover:bg-gray-700 font-bold">
                        <i class="fa-brands fa-linkedin"></i>
                            <span className="ml-2">Linkedin</span>
                            
                        </button>
                    </div>

                </div>

                


            </div>

            <div className="w-1/4 bg-[#cbf281] p-10">
                <h2 className="text-black">Dark mode</h2>
            </div>
        </section>
    );
};

export default AboutMe;
