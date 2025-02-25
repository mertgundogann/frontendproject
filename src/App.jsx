import { LanguageProvider, useLanguage } from "./Contexts/LanguageContext";
import AboutMe from "./Components/Aboutme";
import Skills from "./Components/Skills";
import Profile from "./Components/Profile";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";


function App() {
 

  return (
    <LanguageProvider>
      
        <AboutMe/>
        <Skills/>
        <Profile/>
        <Projects/>
        <Footer/>
        
    </LanguageProvider>
  );
}

export default App;
