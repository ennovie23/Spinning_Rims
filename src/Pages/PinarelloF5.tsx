import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/PinarelloF5img0.png";
import img1 from "../Components/Images/bike/PinarelloF5img1.png";
import img2 from "../Components/Images/bike/PinarelloF5img2.png";
import img3 from "../Components/Images/bike/PinarelloF5img3.png";
import img4 from "../Components/Images/bike/PinarelloF5img4.png";

function PinarelloF5() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Pinarello Torayca T700 UD, TiCR™ internal cable routing, Italian BB, UCI approved" },
        { name: "Fork", value: "Pinarello ONDA carbon" },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Fulcrum 800 disc brake, 700c, 28h" },
        { name: "Hub Rear", value: "Fulcrum 800 disc brake, 700c, 28h, 135x5mm TA" },
        { name: "Rims", value: "Fulcrum 800 disc brake, 700c, 28h, tubeless-ready clincher" },
        { name: "Spokes", value: "Fulcrum 800" },
        { name: "Tire", value: "Pirelli P7 Sport, clincher" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "Shimano 105 Di2 7170, hydraulic disc, 12-speed" },
        { name: "Front Derailleur", value: "Shimano 105 Di2 7150, braze-on" },
        { name: "Rear Derailleur", value: "Shimano 105 Di2 7150, 12-speed" },
        { name: "Crank", value: "Shimano 105 7100, BSA, 50/34" },
        { name: "Bottom Bracket", value: "Shimano 105 Di2 12S" },
        { name: "Cassette", value: "Shimano 105 12S" },
        { name: "Chain", value: "KMC X12, 12 speed" },
        { name: "Pedal", value: "Time Xpresso 4" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "MOST Lynx Ultra Superflows" },
        { name: "Seat Post", value: "Pinarello F, full carbon, aerodynamic design, with hidden, frontal seat clamp" },
        { name: "Brake Set", value: "Shimano 105 Di2 7170, hydraulic disc, 12-speed" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Pinarello Dogma F5 105"
        price="₱355,750"
        description="The Pinarello Dogma F5 105 is a high-performance road bike designed for speed and precision. Featuring a TorayCa carbon frame, aero-optimized design, and a Shimano 105 Di2 12-speed drivetrain, it delivers pro-level performance with smooth electronic shifting."
        images={[mtb, img1, img2, img3, img4]}
        colors={["#80878e", "#a20203", "#dadada"]}
        sizes={["46", "48", "50"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default PinarelloF5;
