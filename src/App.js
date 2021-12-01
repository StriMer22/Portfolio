import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/navbar/NavigationBar";
import ParticleAnimation from "react-particle-animation";
import Header from "./components/animationText/AnimationText";
import AboutMe from "./components/about-me/About-me";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/home">
            <Header />
            <ParticleAnimation
              style={{ height: "100vh" }}
              background={{ r: 21, g: 22, b: 23, a: 1 }}
              particleRadius={1.25}
              particleSpeed={0.9}
            />
          </Route>
          <Route path="/about-me">
            <AboutMe />
          </Route>
          <Route path="/projects">
            <Project />
          </Route>
          <Route path="contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
