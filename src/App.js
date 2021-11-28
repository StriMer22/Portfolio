import "./App.css";
import Navigation from "./components/navbar/navigationBar";
/*npm react-particle-animation. Background*/
import ParticleAnimation from "react-particle-animation";
import Header from "./components/header/header";
import Center from "./components/center/center";
import Tech from "./components/tech/tech";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <ParticleAnimation
        style={{ height: "100vh" }}
        background={{ r: 21, g: 22, b: 23, a: 1 }}
        particleRadius={1.25}
        particleSpeed={0.2}
      />
      <Center />
      <Tech />
    </div>
  );
}

export default App;
