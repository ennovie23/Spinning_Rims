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
import CubeAttention from "./Pages/CubeAttentionSL";
import CannondaleF from "./Pages/CannondaleF-SiCarbon";
import CannondaleScalpel from "./Pages/CannondaleScalpelHTCarbon2";
import SantaCruzHighBall from "./Pages/Santa CruzHighBallCR";
import SCC from "./Pages/SantaCruzChameleonRMX";
import TrekRail9 from"./Pages/TrekRail9";
import TrekMarlin6d from"./Pages/TrekMarlin6d";
import TrekPowerfly7 from"./Pages/TrekPowerfly7";
import CubeKath from"./Pages/CubeKathmanduHybrid";
import CubeReac from"./Pages/CubeReaction";
import CubeStereo from "./Pages/CubeStereoHybrid";
import ScottCont from "./Pages/ScottContessaeRide";
import ScottStrike from "./Pages/ScottStrike";
import ScottAspect from "./Pages/ScottAspect";
import GiantTrance from "./Pages/GiantTranceXAdvanced";
import GiantTCR from "./Pages/GiantTCRAdvanced3";
import GiantPropel from "./Pages/GiantPropelAdvancedPro";
import CanyonAeroad from "./Pages/CanyonAeroadCFSLX";
import CanyonUltimate from "./Pages/CanyonUltimateCFSL";
import SworkTarmac from "./Pages/S-worksTarmacSL7";
import SpecializedAllez from "./Pages/SpecializedAllezSprintComp";
import PinarelloF5 from "./Pages/PinarelloF5105";
import PinarelloParis from "./Pages/PinarelloParis105";
import CerveloSoloist from "./Pages/CerveloSoloist";
import CerveloCaledonia from "./Pages/CerveloCaledonia";
import CanyonGrail from "./Pages/CanyonGrail7SL";
import CanyonGrailCF from "./Pages/CanyonGrailCFSL7";
import CubeNuroadRace from "./Pages/CubeNuroadRaceFE";
import CubeNuroadC62 from "./Pages/CubeNuroadC62Pro";
import GiantRevolt from "./Pages/GiantRevoltXAdvancedPro2";
import GiantRevolt2 from "./Pages/GiantRevolt2";
import CerveloAspero from "./Pages/CerveloAspero";
import CerveloAsperoRival from "./Pages/CerveloAsperoRivalXPLRS";
import PinarelloGrevil from "./Pages/PinarelloGrevilFgrx810";
import SworksCrux from "./Pages/S-worksCrux";
import CubeStereoHPC from "./Pages/CubeStereoHPC";
import CubeAMS from "./Pages/CubeAMS";
import TrekFuel from "./Pages/TrekFuelEX9.8GX"
import TrekSupercaliber from "./Pages/TrekSupercaliber9.7"
import SantaCruzBlur from "./Pages/SantaCruzBlurCS";
import SantaCruzMega from "./Pages/SantaCruzMegaTower2";
import ScottGenius from "./Pages/ScottGenius910";
import ScottSpark970 from "./Pages/ScottSpark970";
import SWorksStump from "./Pages/S-WorksStumpjumper";
import SWorksEnduro from "./Pages/S-WorksEnduroLTD";

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
        <Route path="/CubeAttentionSL" element={<CubeAttention />} />
        <Route path="/CannondaleF-SiCarbon" element={<CannondaleF />} />
        <Route path="/CannondaleScalpelHTCarbon2" element={<CannondaleScalpel />} />
        <Route path="/SantaCruzHighBallCR" element={<SantaCruzHighBall />} />
        <Route path="/SantaCruzChameleonRMX" element={<SCC />} />
        <Route path="/TrekRail9" element={<TrekRail9 />} />
        <Route path="/TrekMarlin6d" element={<TrekMarlin6d />} />
        <Route path="/TrekPowerfly7" element={<TrekPowerfly7 />} />
        <Route path="/CubeKathmanduHybrid" element={<CubeKath />} />
        <Route path="/CubeReaction" element={<CubeReac />} />
        <Route path="/CubeStereoHybrid" element={<CubeStereo />} />
        <Route path="/ScottContessaeRide" element={<ScottCont />} />
        <Route path="/ScottStrike" element={<ScottStrike />} />
        <Route path="/ScottAspect" element={<ScottAspect />} />
        <Route path="/GiantTranceXAdvanced" element={<GiantTrance />} />
        <Route path="/GiantTCRAdvanced3" element={<GiantTCR />} />
        <Route path="/GiantPropelAdvancedPro" element={<GiantPropel />} />
        <Route path="/CanyonAeroadCFSLX" element={<CanyonAeroad />} />
        <Route path="/CanyonUltimateCFSL" element={<CanyonUltimate />} />
        <Route path="/S-workstarmacSL7" element={<SworkTarmac />} />
        <Route path="/SpecializedAllezSprintComp" element={<SpecializedAllez />} /> 
        <Route path="/PinarelloF5105" element={<PinarelloF5 />} />
        <Route path="/PinarelloParis105" element={<PinarelloParis />} />
        <Route path="/CerveloSoloist" element={<CerveloSoloist />} />
        <Route path="/CerveloCaledonia" element={<CerveloCaledonia />} />
        <Route path="/CanyonGrail7SL" element={<CanyonGrail />} />
        <Route path="/CanyonGrailCFSL7" element={<CanyonGrailCF />} />
        <Route path="/CubeNuroadRaceFE" element={<CubeNuroadRace />} />
        <Route path="/CubeNuroadC62Pro" element={<CubeNuroadC62 />} />
        <Route path="/GiantRevoltXAdvancedPro2" element={<GiantRevolt />} />
        <Route path="/GiantRevolt2" element={<GiantRevolt2 />} />
        <Route path="/CerveloAspero" element={<CerveloAspero />} />
        <Route path="/CerveloAsperoRivalXPLRS" element={<CerveloAsperoRival />} />
        <Route path="/PinarelloGrevilFgrx810" element={<PinarelloGrevil />} />
        <Route path="/S-worksCrux" element={<SworksCrux />} />
        <Route path="/CubeStereoHPC" element={<CubeStereoHPC />} />
        <Route path="/CubeAMS" element={<CubeAMS />} />
        <Route path="/TrekFuelEX9.8GX" element={<TrekFuel  />} />
        <Route path="/TrekSupercaliber9.7" element={<TrekSupercaliber  />} />
        <Route path="/SantaCruzBlurCS" element={<SantaCruzBlur  />} />
        <Route path="/SantaCruzMegaTower2" element={<SantaCruzMega  />} />
        <Route path="/ScottGenius910" element={<ScottGenius  />} />
        <Route path="/ScottSpark970" element={<ScottSpark970  />} />
        <Route path="/S-WorksStumpjumper" element={<SWorksStump  />} />
        <Route path="/S-WorksEnduroLTD" element={<SWorksEnduro  />} />

      </Routes>
    </Router>
  );
}

export default App;
