import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// ✅ импорт видео как модуля
import mainVideo from "./assets/video/main.mp4";

function App() {
  return (
    <Router>
      {/* 🎬 Видео фон глобально */}
      <video autoPlay muted loop playsInline className="bg-video">
        <source src={mainVideo} type="video/mp4" />
      </video>

      <div className="overlay"></div>
      <NavBar />
      <Banner />
      <Projects />
      <Skills />
      <Contact />
    </Router>
  );
}

export default App;
