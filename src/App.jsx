import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Mission from "./components/Mission";
import Timeline from "./components/timeline/Timeline";
import Members from "./components/members/Members";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Mission />
      <Timeline />
      <Members />
    </>
  );
}

export default App;
