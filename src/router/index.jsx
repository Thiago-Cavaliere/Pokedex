import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import FirstGene from "../pages/PageFirstGene";
import SecondGene from "../pages/PageSecondGene";
import ThreeGene from "../pages/PageThreeGene";
import FourGene from "../pages/PageFourGene";
import FiveGene from "../pages/PageFiveGene";
import SixGene from "../pages/PageSixGene";
import SevenGene from "../pages/PageSevenGene";
import EightGene from "../pages/PageEightGene";
import NineGene from "../pages/PageNineGene";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/first-generation" element={<FirstGene />} />
      <Route path="/second-generation" element={<SecondGene />} />
      <Route path="/three-generation" element={<ThreeGene />} />
      <Route path="/four-generation" element={<FourGene />} />
      <Route path="/five-generation" element={<FiveGene />} />
      <Route path="/six-generation" element={<SixGene />} />
      <Route path="/seven-generation" element={<SevenGene />} />
      <Route path="/eight-generation" element={<EightGene />} />
      <Route path="/nine-generation" element={<NineGene />} />
    </Routes>
  );
}

export default AppRouter;
