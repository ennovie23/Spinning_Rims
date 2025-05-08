import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb1 from "../Components/Images/bike/SSRCWCimg0.png";
import Trek7img1 from "../Components/Images/bike/SSRCWCimg1.png";
import Trek7img2 from "../Components/Images/bike/SSRCWCimg2.png";
import Trek7img3 from "../Components/Images/bike/SSRCWCimg3.png";
import Trek7img4 from "../Components/Images/bike/SSRCWCimg4.png";

function ScottScaleRCWorldCup() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Scale Carbon HMX Adjustable head angle / Syncros Cable Integration System" },
        { name: "Fork", value: "RockShox SID SL Select+ RL3 Air custom Charger 3-Modes Damper 15x110mm Maxle Stealth / 44mm offset / Tapered steerer Lockout / Reb. Adj. / 100mm travel" },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "DT Swiss XRC1501 6 Bolt" },
        { name: "Hub Rear", value: "DT Swiss / 12x148mm / Micro Spline" },
        { name: "Rims", value: "30mm Tubeless ready Carbon rims 28H / XD Driver Syncros SL Axle w/Removable Lever with 6mm Allen, T30 and T25 Tools" },
        { name: "Spokes", value: "Stainless Black 15G / 1.8mm" },
        { name: "Tire", value: "Maxxis Rekon Race / Tubeless Ready / EXO" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "SRAM GX Eagle AXS Rocker Controller" },
        { name: "Rear Derailleur", value: "SRAM X01 Eagle AXS 12 Speed Wireless Electronic Shift System" },
        { name: "Crank", value: "SRAM X01 DUB Eagle Carbon crankarm 55mm CL / 32T" },
        { name: "Bottom Bracket", value: "SRAM DUB PF 92 MTB Wide / shell 41x92mm" },
        { name: "Cassette", value: "SRAM X01 XG1295 / 10-52 T" },
        { name: "Chain", value: "SRAM CN X01 Eagle" },
        { name: "Pedal", value: "Favero Assioma PRO MX-1" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Syncros Belcarra Regular 1.5 Titanium rails" },
        { name: "Seat Post", value: "Syncros Duncan 2.0 31.6x400mm" },
        { name: "Brake Set", value: "SRAM Level TLM Disc / tool free reach adj." },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Scott Scale RC World Cup"
        price="₱270,000"
        description="The Scott Scale RC World Cup is an elite-level cross-country hardtail built for maximum speed and efficiency. Featuring an ultra-light HMX Carbon frame, a RockShox SID Ultimate fork with 100mm travel, and a Shimano XTR 12-speed drivetrain, it delivers top-tier performance for competitive racers."
        images={[mtb1, Trek7img1, Trek7img2, Trek7img3, Trek7img4]}
        colors={["#1d350e", "#000000", "#ffd900"]}
        sizes={["26", "27.5", "29"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default ScottScaleRCWorldCup;
