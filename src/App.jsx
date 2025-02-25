import { LanguageProvider, useLanguage } from "./Contexts/LanguageContext";
import AboutMe from "./Components/Aboutme";
import Skills from "./Components/Skills";
import Profile from "./Components/Profile";


function App() {
 

  return (
    <LanguageProvider>
      <div>
      
        <AboutMe/>
        <Skills/>
        <Profile/>
      </div>
    </LanguageProvider>
  );
}

export default App;
