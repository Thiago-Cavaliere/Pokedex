import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import FirstGene from "./pages/PageFirstGene";
import SecondGene from "./pages/PageSecondGene";
import ThreeGene from "./pages/PageThreeGene";
import FourGene from "./pages/PageFourGene";
import FiveGene from "./pages/PageFiveGene";
import SixGene from "./pages/PageSixGene";
import SevenGene from "./pages/PageSevenGene";
import EightGene from "./pages/PageEightGene";
import NineGene from "./pages/PageNineGene";
import PokemonDetail from "./pages/PokemonDetail";
import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="first-generation" element={<FirstGene />} />
        <Route path="second-generation" element={<SecondGene />} />
        <Route path="three-generation" element={<ThreeGene />} />
        <Route path="four-generation" element={<FourGene />} />
        <Route path="five-generation" element={<FiveGene />} />
        <Route path="six-generation" element={<SixGene />} />
        <Route path="seven-generation" element={<SevenGene />} />
        <Route path="eight-generation" element={<EightGene />} />
        <Route path="nine-generation" element={<NineGene />} />
        <Route path="pokemon/:name" element={<PokemonDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
