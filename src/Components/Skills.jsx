import { useLanguage } from "../Contexts/LanguageContext";
import Images from "./Images";
import content from "../data/content.json";

const Skills = () => {
    const { language } = useLanguage();

    return (
       
        <div className="pt-20 flex w-full pl-120 pb-20 bg-white dark:bg-[#03346E]">
    <h1 className="text-[#4832d3] font-bold text-5xl dark:text-white ">{content.skills.baslik[language]}</h1>
    <div className="ml-4">
        <Images />
    </div>
</div>

       
    );
};

export default Skills;
