import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/CerveloAsperoRivalimg0.png";
import img1 from "../Components/Images/bike/CerveloAsperoRivalimg1.png";
import img2 from "../Components/Images/bike/CerveloAsperoRivalimg2.png";
import img3 from "../Components/Images/bike/CerveloAsperoRivalimg3.png";
import img4 from "../Components/Images/bike/CerveloAsperoRivalimg4.png";

function CerveloAsperoRival() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Cervélo All-Carbon, Tapered Aspero Rival" },
        { name: "Fork", value: "Cervélo All-Carbon, Tapered Aspero Rival Fork" },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Reserve 44TA GR, Zipp 176, 12x142mm" },
        { name: "Hub Rear", value: "Reserve 44TA GR, Zipp 176, 12x142mm, HG freehub, 24H centerlock" },
        { name: "Rims", value: "Tubeless compatible Front: Reserve 40TA GR, Zipp 76, 12x100mm, 24H centerlock, tubeless compatible" },
        { name: "Spokes", value: "24H, centerlock" },
        { name: "Tire", value: "Panaracer Gravel King SK 700x38c" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "SRAM Force AXS, 12 speed" },
        { name: "Rear Derailleur", value: "SRAM Force XPLR AXS, 12 speed" },
        { name: "Crank", value: "SRAM Force 1 AXS, 40T, DUB, with power meter" },
        { name: "Bottom Bracket", value: "SRAM DUB" },
        { name: "Cassette", value: "SRAM Force XPLR, 10-44, 12 Speed" },
        { name: "Chain", value: "SRAM Force, 12 speed" },
        { name: "Pedal", value: "Shimano PD-EH500" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Prologo Dimension NDR Nack" },
        { name: "Seat Post", value: "Cervélo SP19 Carbon 27.2 OR Easton EA50 Alloy" },
        { name: "Brake Set", value: "SRAM Force,SRAM  Paceline Centerlock" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Cervelo Aspero Rival XPLRS"
        price="₱399,000"
        description="The Cervélo Áspero Rival XPLR is a high-performance gravel bike built for speed and control. Featuring a lightweight carbon frame, progressive geometry, and a SRAM Rival XPLR eTap AXS 12-speed drivetrain, it delivers smooth wireless shifting and versatility."
        images={[mtb, img1, img2, img3, img4]}
        colors={["#303030", "#dadada", "#203850"]}
        sizes={["46", "48", "50"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default CerveloAsperoRival;
