import { useLanguage } from "../Contexts/LanguageContext";
import content from "../data/content.json";


const Projects = () => {
    const { language, toggleLanguage } = useLanguage();
    return(
        
        <div className="w-full bg-[#cbf281] pt-20 pl-110 pb-20">
        
        <h1 className="text-[#4832d3] font-bold text-5xl mb-10 ">Projects</h1>
        
        <div className="flex bg-white w-4/5 mb-20">
          
          <div className="w-2/5 mt-3 ml-3">
            <img
              src="src/assets/pizzaprojesiresmi.png"
              alt="Resim"
              className="w-full h-auto"
            />
          </div>
        
          
          <div className="w-3/5 p-6 mt-5">
          <h1 className="text-[#4832d3] font-bold text-3xl mb-5">Pizza</h1>
          {content.projects.pizza[language]}
            <div className="flex justify-between w-full">
                <div id="buttons" className="mt-3 gap-5 mt-10">
                <button className="bg-[#4832d3] text-white px-6 py-2 rounded-md">HTML</button>
                <button className="bg-[#4832d3] text-white px-6 py-2 rounded-md mr-5 ml-5">CSS</button>
                <button className="bg-[#4832d3] text-white px-6 py-2 rounded-md">JAVASCRIPT</button>
                <a href="https://github.com/mertgundogann/pizzaprojesi" className="block underline mt-5 font-bold ml-1">Github</a>
                </div>
                
</div>

          </div>
          
        </div>
        <div className="flex bg-white w-4/5 ">
          
          <div className="w-2/5 mt-3 ml-3">
            <img
              src="src\assets\witflix.png"
              alt="Resim"
              className="w-full h-auto"
            />
          </div>
      
          
          <div className="w-3/5 p-6 mt-10">
          <h1 className="text-[#4832d3] font-bold text-3xl mb-5">Witflix</h1>
            <p className="text-lg text-black">
              {content.projects.witflix[language]}
            </p>
            <div id="buttons" className="mt-3 gap-5 mt-10">
                <button className="bg-[#4832d3] text-white px-6 py-2 rounded-md">HTML</button>
                <button className="bg-[#4832d3] text-white px-6 py-2 rounded-md mr-5 ml-5">CSS</button>
                <a href="https://github.com/mertgundogann/witflix" className="block underline mt-5 font-bold ml-1">Github</a>
                </div>
          </div>
        </div>
      </div>
      
      
      

    )}
    export default Projects;