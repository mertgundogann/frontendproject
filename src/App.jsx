import { LanguageProvider, useLanguage } from "./Contexts/LanguageContext";
import AboutMe from "./Components/Aboutme";
import Skills from "./Components/Skills";
import Profile from "./Components/Profile";
import Projects from "./Components/Projects";

function App() {
 

  return (
    <LanguageProvider>
      <div>
      
        <AboutMe/>
        <Skills/>
        <Profile/>
        <Projects/>
      </div>
    </LanguageProvider>
  );
}

export default App;
