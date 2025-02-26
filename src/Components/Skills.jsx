import { useLanguage } from "../Contexts/LanguageContext";
import Images from "./Images";
import content from "../../public/Data/content.json"

const Skills = () => {
    const { language } = useLanguage();

    return (
        <div className="pt-10 pb-10 px-4 md:px-20 flex flex-col md:flex-row items-center md:items-start w-full bg-white dark:bg-[#252128] relative">
            
            <h1 className="text-[#4832d3] font-bold text-4xl md:text-5xl dark:text-[#cbf281] text-center md:text-left pl-5 md:pl-20 lg:pl-32 xl:pl-95">
                {content.skills.baslik[language]}
            </h1>
            
            <div className="mt-6 md:mt-0 md:ml-8 flex justify-center items-center">
                <Images/>
            </div>
        </div>
        
    );
};

export default Skills;
