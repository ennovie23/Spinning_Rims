import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import MainBikePage from "./Pages/MainBikePage";
import MtbPage from "./Pages/MtbPage";
import GbPage from "./Pages/GbPage";
import RbPage from "./Pages/RbPage";
import EbPage from "./Pages/EbPage";
import FsbPage from "./Pages/FsbPage";
import AccessoriesPage from "./Pages/AccessoriesPage";
import SignInPage from "./Pages/SignInPage";
import CreateAccPage from "./Pages/CreateAccPage";
import TrekMarlin7 from "./Pages/TrekMarlin7";
import TrekMarlin5 from "./Pages/TrekMarlin5";
import GarminRallyRS100 from "./Pages/GarminRallyRS100";
import ScottScale925 from "./Pages/ScottScale925";
import ScottScaleRCWorldCup from "./Pages/ScottScaleRCWorldCup";
import CubeAimSLX from "./Pages/CubeAimSLX";
import CubeAttention from "./Pages/CubeAttention";
import CannondaleF from "./Pages/CannondaleF";
import CannondaleScalpel from "./Pages/CannondaleScalpel";
import SantaCruzHighBall from "./Pages/Santa CruzHighBall";
import SCC from "./Pages/SCC";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/MainBikePage" element={<MainBikePage />} />
        <Route path="/MtbPage" element={<MtbPage/>}/>
        <Route path="/GbPage" element={<GbPage/>}/>
        <Route path="/RbPage" element={<RbPage/>}/>
        <Route path="/EbPage" element={<EbPage/>}/>
        <Route path="/FsbPage" element={<FsbPage/>}/>
        <Route path="/AccessoriesPage" element={<AccessoriesPage/>}/>
        <Route path="/SignInPage" element={<SignInPage/>}/>
        <Route path="/CreateAccPage" element={<CreateAccPage/>}/>
        <Route path="/TrekMarlin7" element={<TrekMarlin7 />} />
        <Route path="/TrekMarlin5" element={<TrekMarlin5 />} />
        <Route path="/GarminRallyRS100" element={<GarminRallyRS100 />} />
        <Route path="/ScottScale925" element={<ScottScale925 />} />
        <Route path="/ScottScaleRCWorldCup" element={<ScottScaleRCWorldCup />} />
        <Route path="/CubeAimSLX" element={<CubeAimSLX />} />
        <Route path="/CubeAttention" element={<CubeAttention />} />
        <Route path="/CannondaleF" element={<CannondaleF />} />
        <Route path="/CannondaleScalpel" element={<CannondaleScalpel />} />
        <Route path="/SantaCruzHighBall" element={<SantaCruzHighBall />} />
        <Route path="/SCC" element={<SCC />} />

      </Routes>
    </Router>
  );
}

export default App;
