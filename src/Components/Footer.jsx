import { useLanguage } from "../Contexts/LanguageContext";
import content from "../data/content.json";


const Footer = () =>{
    const { language, toggleLanguage } = useLanguage();
    return(

        <div>
            <div className="text-center pt-15 pb-20 dark:bg-black dark:text-white">
                <h1 className="text-[#4832d3] font-bold text-4xl dark:text-white">{content.footer.footerbaslik[language]}</h1>
                <p className="mt-5">{content.footer.footeryazi[language]}</p>
                <span className="text-[#9a8fe4] font-bold underline block mt-5">{content.footer.footermail[language]}</span>
                <div className="mt-4">
                <i className="fa-brands fa-twitter text-[#4832d3] mr-3 text-2xl"></i>
                <i className="fa-brands fa-instagram text-[#4832d3] mr-3 text-2xl"></i>
                <i className="fa-brands fa-linkedin text-[#4832d3] mr-3 text-2xl"></i>
                </div>
            </div>

        </div>

    )
}
export default Footer;