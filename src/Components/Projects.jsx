import { useLanguage } from "../Contexts/LanguageContext";
import content from "../data/content.json";

const Projects = () => {
    const { language } = useLanguage();
    return (
        <div className="w-full bg-[#cbf281] dark:bg-[#19210b] pt-20 pl-110 pb-20 max-[639px]:pl-0">

            <h1 className="text-[#4832d3] font-bold text-5xl mb-10 dark:text-[#cbf281] max-[639px]:text-2xl max-[639px]:text-center">Projects</h1>

            <div className="flex bg-white dark:bg-[#2a2727] w-4/5 mb-20 max-[639px]:w-full max-[639px]:flex-col max-[639px]:items-center">

                <div className="w-2/5 mt-3 ml-3 dark:mt-0 dark:ml-0 max-[639px]:w-full max-[639px]:mx-auto">
                    <img
                        src="src/assets/pizzaprojesiresmi.png"
                        alt="Resim"
                        className="w-full h-auto"
                    />
                </div>

                <div className="w-3/5 p-6 mt-5 max-[639px]:w-full max-[639px]:pl-5">
                    <h1 className="text-[#4832d3] font-bold text-3xl mb-5 dark:text-[#c1baed] max-[639px]:text-2xl">Pizza</h1>
                    <div className="dark:text-white">{content.projects.pizza[language]}</div>
                    <div className="flex justify-between w-full max-[639px]:flex-col max-[639px]:items-center max-[639px]:gap-3">
                        <div id="buttons" className="mt-3 gap-5 mt-10 max-[639px]:w-full max-[639px]:flex-wrap">
                            <button className="bg-[#4832d3] text-white px-6 py-2 rounded-md max-[639px]:w-full mb-3">HTML</button>
                            <button className="bg-[#4832d3] text-white px-6 py-2 rounded-md max-[639px]:w-full mb-3">CSS</button>
                            <button className="bg-[#4832d3] text-white px-6 py-2 rounded-md max-[639px]:w-full mb-3">JAVASCRIPT</button>
                            <a href="https://github.com/mertgundogann/pizzaprojesi" className="block underline mt-5 font-bold ml-1 dark:text-[#cbf281] max-[639px]:text-center">Github</a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex bg-white dark:bg-[#2a2727] w-4/5 max-[639px]:w-full max-[639px]:flex-col max-[639px]:items-center">

                <div className="w-2/5 mt-3 ml-3 dark:mt-0 dark:ml-0 max-[639px]:w-full max-[639px]:mx-auto">
                    <img
                        src="src/assets/witflix.png"
                        alt="Resim"
                        className="w-full h-auto"
                    />
                </div>

                <div className="w-3/5 p-6 mt-10 max-[639px]:w-full max-[639px]:pl-5">
                    <h1 className="text-[#4832d3] font-bold text-3xl mb-5 dark:text-[#c1baed] max-[639px]:text-2xl">Witflix</h1>
                    <p className="text-lg text-black">
                        <div className="dark:text-white">{content.projects.witflix[language]}</div>
                    </p>
                    <div id="buttons" className="mt-3 gap-5 mt-10 max-[639px]:w-full max-[639px]:flex-wrap">
                        <button className="bg-[#4832d3] text-white px-6 py-2 rounded-md max-[639px]:w-full mb-3">HTML</button>
                        <button className="bg-[#4832d3] text-white px-6 py-2 rounded-md max-[639px]:w-full mb-3">CSS</button>
                        <a href="https://github.com/mertgundogann/witflix" className="block underline mt-5 font-bold ml-1 dark:text-[#cbf281] max-[639px]:text-center">Github</a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Projects;
