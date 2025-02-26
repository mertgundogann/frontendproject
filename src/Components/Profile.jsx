import { useLanguage } from "../Contexts/LanguageContext";
import content from "../../public/Data/content.json"

const Profile = () => {
    const { language } = useLanguage();

    return (
        <div className="flex flex-wrap w-full bg-[#4731d3] dark:bg-[#171043] pt-15 pb-20 pl-116 max-[639px]:pl-10">
            
            <div className="w-1/4 max-[639px]:w-full max-[639px]:text-center max-[639px]:mb-6">
                <h1 className="text-[#cbf281] text-4xl max-[639px]:text-2xl">{content.profile.baslik[language]}</h1>
                <h5 className="text-white text-2xl mt-4 max-[639px]:text-xl">{content.profile.baslik2[language]}</h5>
                <h2 className="text-[#cbf281] mt-4 max-[639px]:text-base">
                    <span>{content.baslikdt[language]}</span>
                    <span className="text-white ml-8">{content.profile.dogumtarihi[language]}</span>
                </h2>
                <h2 className="text-[#cbf281] mt-2 max-[639px]:text-base">
                    {content.ikametdt[language]}
                    <span className="text-white ml-10">{content.profile.ikamet[language]}</span>
                </h2>
                <h2 className="text-[#cbf281] mt-2 max-[639px]:text-base">
                    {content.egitimdt[language]}
                    <span className="text-white ml-3">{content.egitim[language]}</span>
                </h2>
                <h2 className="text-[#cbf281] mt-2 max-[639px]:text-base">
                    {content.tercihdt[language]}
                    <span className="text-white ml-5">{content.rol[language]}</span>
                </h2>
            </div>

            
            <div className="w-1/7 mt-7 mr-5 max-[639px]:w-1/2 max-[639px]:mx-auto">
                <img
                    className="w-full"
                    src="https://gogotraining.com/blog/wp-content/uploads/2016/10/Online-Programming-Classes.jpg"
                    alt="Profile"
                />
            </div>

            
            <div className="w-1/3 pl-10 max-[639px]:w-full max-[639px]:pl-5">
                <h5 className="text-white text-2xl mt-10 max-[639px]:text-xl">{content.baslik3[language]}</h5>
                <p className="text-white font-light max-[639px]:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quibusdam, fuga voluptate dolor ipsum maxime sed iusto repellat eos quis iure atque expedita quam quaerat officia eligendi nemo voluptatem at.
                    Ut, consequatur obcaecati quis ad commodi ducimus voluptas architecto quos. Natus modi ducimus nemo necessitatibus vitae fuga, hic beatae, reprehenderit corporis voluptates illum! Commodi molestias, labore assumenda earum a pariatur!
                </p>
            </div>
        </div>
    );
};

export default Profile;
