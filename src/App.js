import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <section id="home" style={{ height: "100vh" }}>Home</section>
      <section id="skills" style={{ height: "100vh" }}>Skills</section>
      <section id="projects" style={{ height: "100vh" }}>Projects</section>
      <section id="connect" style={{ height: "100vh" }}>Contact</section>
    </Router>
  );
}

export default App;
