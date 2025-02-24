import { LanguageProvider, useLanguage } from "./Contexts/LanguageContext";
import AboutMe from "./Components/Aboutme";
import Skills from "./Components/Skills";



function App() {
 

  return (
    <LanguageProvider>
      <div>
        
        
        <AboutMe/>
        <Skills/>
      </div>
    </LanguageProvider>
  );
}

export default App;
