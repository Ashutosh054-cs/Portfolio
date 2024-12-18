import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NabBar from "./components/NabBar";
import Main from "./components/Main";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div>
      <NabBar />
      <Main />
      <AboutMe />
      <Project />
      <ContactMe/>
    </div>
  );
}

export default App;
