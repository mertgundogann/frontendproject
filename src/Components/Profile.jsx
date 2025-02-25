import { useLanguage } from "../Contexts/LanguageContext";
import content from "../data/content.json";

const Profile = () => {
    const { language } = useLanguage();

    return (
        <div className="flex w-full bg-[#4731d3] dark:bg-[#6EACDA] pt-15 pb-20 pl-116">
            <div className="w-1/4  ">
            <h1 className="text-[#cbf281] text-4xl">{content.profile.baslik[language]}</h1>
            <h5 className="text-white text-2xl mt-4">{content.profile.baslik2[language]}</h5>
            <h2 className="text-[#cbf281] mt-4"><span></span>{content.baslikdt[language]}<span className="text-white ml-8">{content.profile.dogumtarihi[language]}</span></h2>
            <h2 className="text-[#cbf281] mt-2">{content.ikametdt[language]}<span className="text-white ml-10">{content.profile.ikamet[language]}</span></h2>
            <h2 className="text-[#cbf281] mt-2">{content.egitimdt[language]}<span className="text-white ml-3">{content.egitim[language]}</span></h2>
            <h2 className="text-[#cbf281] mt-2">{content.tercihdt[language]}<span className="text-white ml-5">{content.rol[language]}</span></h2>
            </div>
            <div className="w-1/7  mt-7 mr-5">
                <img className="w-1/1"src="https://gogotraining.com/blog/wp-content/uploads/2016/10/Online-Programming-Classes.jpg" alt="" />
            </div>
            <div className="w-1/3  pl-10">
            <h5 className="text-white text-2xl mt-10">{content.baslik3[language]}</h5>
            <p className="text-white font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quibusdam, fuga voluptate dolor ipsum maxime sed iusto repellat eos quis iure atque expedita quam quaerat officia eligendi nemo voluptatem at.
            Ut, consequatur obcaecati quis ad commodi ducimus voluptas architecto quos. Natus modi ducimus nemo necessitatibus vitae fuga, hic beatae, reprehenderit corporis voluptates illum! Commodi molestias, labore assumenda earum a pariatur!</p>
            <p></p>
            </div>

        </div>
    );
};

export default Profile;
