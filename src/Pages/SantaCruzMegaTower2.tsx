import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb1 from "../Components/Images/bike/SantaCruzMegaimg0.png";
import img1 from "../Components/Images/bike/SantaCruzMegaimg1.png";
import img2 from "../Components/Images/bike/SantaCruzMegaimg2.png";
import img3 from "../Components/Images/bike/SantaCruzMegaimg3.png";
import img4 from "../Components/Images/bike/SantaCruzMegaimg4.png";

function SantaCruzMega() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Carbon Santa Cruz Megatower 2" },
        { name: "Fork", value: "RockShox Sid SL Select+, 100mm w/Remote" },
        { name: "Rear Shock", value: "RockShox SidLuxe Select+" },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "DT 350, 12x148" },
        { name: "Hub Rear", value: "DT 350, 12x148, MicroSpline, Centerlock, 28h" },
        { name: "Rims", value: "RaceFace ARC Offset 27 29 Rims" },
        { name: "Spokes", value: "Sapim D-Light" },
        { name: "Tire", value: "Maxxis Aspen, 29x2.4WT, EXO, TR" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "Shimano XT M8100, 12spd" },
        { name: "Rear Derailleur", value: "Shimano XT M8100, 12spd" },
        { name: "Crank", value: "Shimano XT M8120 34t" },
        { name: "Bottom Bracket", value: "Shimano XT 68/73mm Threaded BB" },
        { name: "Cassette", value: "Shimano XT M8100, 12spd, 10-51t" },
        { name: "Chain", value: "Shimano XT, 12spd" },
        { name: "Pedal", value: "DMR Vault Brendog Ice" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "WTB Silverado Medium Cromoly SL Fusion Saddle" },
        { name: "Seat Post", value: "FOX Transfer SL Performance Elite, 100mm, 31.6" },
        { name: "Brake Set", value: "Shimano Deore XT M8100 hydraulic disc, Shimano RT86, 6-bolt, 160mm/180mm" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Santa Cruz Mega Tower 2"
        price="₱380,000"
        description="The Santa Cruz Megatower 2 is a long-travel enduro bike with a carbon frame, 170mm VPP suspension, and a mixed Shimano or SRAM drivetrain (varies by model), delivering stability, control, and confidence for aggressive downhill and technical terrain."
        images={[mtb1, img1, img2, img3, img4]}
        colors={["#8f5970", "#303030", "#e4d7b4"]}
        sizes={["26", "27.5", "29"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default SantaCruzMega;
