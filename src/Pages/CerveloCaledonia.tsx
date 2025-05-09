import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/CerveloCaledoniaimg0.png";
import img1 from "../Components/Images/bike/CerveloCaledoniaimg1.png";
import img2 from "../Components/Images/bike/CerveloCaledoniaimg2.png";
import img3 from "../Components/Images/bike/CerveloCaledoniaimg3.png";
import img4 from "../Components/Images/bike/CerveloCaledoniaimg4.png";

function CerveloCaledonia() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Cervélo All-Carbon Frame" },
        { name: "Fork", value: "Cervélo All-Carbon, Tapered Caledonia Fork" },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Fulcrum Racing 900 DB" },
        { name: "Hub Rear", value: "Fulcrum Racing 900 DB,  28H, 19mm IW, XDR freehub" },
        { name: "Rims", value: "Fulcrum Racing 900 DB, 12x100(F)/142(R), 28H, 19mm IW, XDR freehub, centerlock, tubeless compatible" },
        { name: "Spokes", value: "24H, centerlock" },
        { name: "Tire", value: "Zaffiro Pro V G2.0 700x30c" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "SRAM Rival AXS, 2x12 speed" },
        { name: "Front Derailleur", value: "SRAM Rival AXS, 2 speed" },
        { name: "Rear Derailleur", value: "SRAM Rival AXS, 12 speed" },
        { name: "Crank", value: "SRAM Rival, 48/35T, DUB" },
        { name: "Bottom Bracket", value: "SRAM DUB, BBright" },
        { name: "Cassette", value: "SRAM Rival, 10-36, 12 Speed" },
        { name: "Chain", value: "SRAM Rival, 12 speed" },
        { name: "Pedal", value: "Garmin Rally RS200 pedals" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Cervélo Road Saddle" },
        { name: "Seat Post", value: "Cervélo Alloy 27.2" },
        { name: "Brake Set", value: "SRAM Rival, SRAM Centerline Centerlock" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Cervelo Celedonia AXS"
        price="₱260,000"
        description="The Cervélo Caledonia AXS is a versatile endurance road bike designed for speed and comfort. Featuring a lightweight carbon frame, aero-optimized endurance geometry, and a SRAM AXS electronic drivetrain, it delivers smooth shifting and all-day performance on varied terrain."
        images={[mtb, img1, img2, img3, img4]}
        colors={["#dadada", "#000000", "#490508"]}
        sizes={["46", "48", "50"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default CerveloCaledonia;
