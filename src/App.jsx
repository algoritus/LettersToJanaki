import "./App.css";

import LetterBox from "./components/LetterBox";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Petals from "./components/petals/Petals";
import LetterForm from "./components/LetterForm/LetterForm";
import MemoryWall from "./components/MemoryWall/MemoryWall";
import Timeline from "./components/Timeline/Timeline";
import WorldMap from "./components/WorldMap/WorldMap";
import SongGallery from "./components/SongGallery/SongGallery";
import Quote from "./components/Quote/Quote";
import Footer from "./components/Footer/Footer";


function App() {

  return (
    <>
      <Petals />

      <Navbar />

      <Hero />

      <LetterForm />

      <MemoryWall />

      <SongGallery />

      <Timeline />

      <WorldMap />

      <Quote />

      <Footer />


    </>
  );

}


export default App;