import { useLanguage } from "../Contexts/LanguageContext";
import Images from "./Images";
import content from "../data/content.json";

const Skills = () => {
    const { language } = useLanguage();

    return (
       <section className="mt-20 flex mx-120">
        <h1 className="text-[#4832d3] font-bold text-5xl">{content.skills.baslik[language]}</h1>
        <div className="ml-8">
        <Images/>
        </div>
       </section>
    );
};

export default Skills;
