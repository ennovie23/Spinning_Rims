// import { Box } from "@mui/material";
// // import Header from "./Components/Header";
// // import BrowseButton from "./Components/BrowseButton";
// import Home from "./Components/Home";
// import MainBikePage from "./Components/MainBikePage";

// function App(){
//   return (
//     <Box>
//       <Home/>
//       {/* <MainBikePage/> */}

//     </Box>
//   )
// }

// export default App

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import MainBikePage from "./Pages/MainBikePage";
import MtbPage from "./Pages/MtbPage";
import GbPage from "./Pages/GbPage";
import RbPage from "./Pages/RbPage";
import EbPage from "./Pages/EbPage";
import FsbPage from "./Pages/FsbPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/MainBikePage" element={<MainBikePage />} />
        <Route path="/MtbPage" element={<MtbPage/>}/>
        <Route path="/GbPage" element={<GbPage/>}/>
        <Route path="/RbPage" element={<RbPage/>}/>
        <Route path="/EbPage" element={<EbPage/>}/>
        <Route path="/FsbPage" element={<FsbPage/>}/>

      </Routes>
    </Router>
  );
}

export default App;
