import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb1 from "../Components/Images/bike/SantaCruzBlurimg0.png";
import img1 from "../Components/Images/bike/SantaCruzBlurimg1.png";
import img2 from "../Components/Images/bike/SantaCruzBlurimg2.png";
import img3 from "../Components/Images/bike/SantaCruzBlurimg3.png";
import img4 from "../Components/Images/bike/SantaCruzBlurimg4.png";

function SantaCruzBlur() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Carbon Santa Cruz Blur" },
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
        { name: "Pedal", value: "DMR Vault flat pedals" },
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
        name="Santa Cruz Blur CS XT"
        price="₱400,000"
        description="The Santa Cruz Blur CS XT is a lightweight XC race bike with a carbon frame, 100mm VPP suspension, and a Shimano XT 12-speed drivetrain, offering speed, efficiency, and control for cross-country racing and endurance rides."
        images={[mtb1, img1, img2, img3, img4]}
        colors={["#303030", "#dadada", "#f6ff0e"]}
        sizes={["26", "27.5", "29"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default SantaCruzBlur;
