import { LanguageProvider } from "./Contexts/LanguageContext";
import AboutMe from "./Components/Aboutme";

function App() {
  return (
    <LanguageProvider>
      <div>
        <AboutMe />
      </div>
    </LanguageProvider>
  );
}

export default App;
