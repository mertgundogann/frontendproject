import { useLanguage } from "../Contexts/LanguageContext";
import content from "../data/content.json";


const Footer = () =>{
    const { language, toggleLanguage } = useLanguage();
    return(

        <div>
            <div className="text-center mt-15 mb-20">
                <h1 className="text-[#4832d3] font-bold text-4xl">{content.footer.footerbaslik[language]}</h1>
                <p className="mt-5">{content.footer.footeryazi[language]}</p>
                <span className="text-[#9a8fe4] font-bold underline block mt-5">{content.footer.footermail[language]}</span>
                <div className="mt-4">
                <i class="fa-brands fa-twitter text-[#4832d3] mr-3 text-2xl"></i>
                <i class="fa-brands fa-instagram text-[#4832d3] mr-3 text-2xl"></i>
                <i class="fa-brands fa-linkedin text-[#4832d3] mr-3 text-2xl"></i>
                </div>
            </div>

        </div>

    )
}
export default Footer;