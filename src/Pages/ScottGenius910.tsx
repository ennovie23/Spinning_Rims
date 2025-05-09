import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb1 from "../Components/Images/bike/ScottGeniusimg0.png";
import img1 from "../Components/Images/bike/ScottGeniusimg1.png";
import img2 from "../Components/Images/bike/ScottGeniusimg2.png";
import img3 from "../Components/Images/bike/ScottGeniusimg3.png";
import img4 from "../Components/Images/bike/ScottGeniusimg4.png";

function ScottGenius() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Genius Carbon HMF Mainframe with Alloy 6061 Swingarm" },
        { name: "Fork", value: "FOX 36 Float Performance Elite Air FIT4 3-Modes with low Speed adj. / Kabolt 15x110mm axle" },
        { name: "Rear Shock", value: "FOX NUDE 5T EVOL Trunnion SCOTT custom w. travel / geo adj." },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Syncros Revelstoke, 5x100mm Boost" },
        { name: "Hub Rear", value: "Syncros Revelstoke, MIcrosspline, 135x5mm Boost" },
        { name: "Rims", value: "Syncros Revelstoke 1.5 6 Bolt F: 15x110mm, R: 12x148mm 30mm Tubeless ready rim 28H / XD Driver" },
        { name: "Spokes", value: "Syncros Revelstoke" },
        { name: "Tire", value: "Maxxis Dissector / 60TPI Foldable Tubeless Ready / EXO 3C maxx Terra" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "SRAM GX Eagle AXS Rocker Controller" },
        { name: "Rear Derailleur", value: "SRAM GX Eagle AXS 12 Speed Wireless Electronic Shift System" },
        { name: "Crank", value: "SRAM GX Eagle DUB" },
        { name: "Bottom Bracket", value: "SRAM GX Eagle DUB" },
        { name: "Cassette", value: "SRAM XG1275 / 10-52 T" },
        { name: "Chain", value: "SRAM CN GX Eagle" },
        { name: "Pedal", value: "DMR V11 Nylon pedals" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Syncros Tofino 1.5 Regular" },
        { name: "Seat Post", value: "Syncros Duncan Dropper Post 1.5" },
        { name: "Brake Set", value: "Shimano Deore XT M8100 hydraulic disc, Shimano RT86, 6-bolt, 160mm/180mm" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Scott Genius 910"
        price="₱380,000"
        description="The Scott Genius 910 is a versatile trail bike with a carbon frame, 150mm FOX suspension, and a SRAM drivetrain, featuring TwinLoc suspension technology for optimal efficiency and control on any terrain."
        images={[mtb1, img1, img2, img3, img4]}
        colors={["#7f888f", "#e4d7b4", "#dadada"]}
        sizes={["26", "27.5", "29"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default ScottGenius;
