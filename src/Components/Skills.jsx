import { useLanguage } from "../Contexts/LanguageContext";
import content from "../data/content.json";


const Skills = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <section className="">
            <div className="bg-white">
        <h1>Selam</h1>

            </div>
    
        </section>
    );
};

export default Skills;
