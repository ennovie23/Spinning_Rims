import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/SantaCruzHighBallimg0.png";
import img1 from "../Components/Images/bike/SantaCruzHighBallimg1.png";
import img2 from "../Components/Images/bike/SantaCruzHighBallimg2.png";
import img3 from "../Components/Images/bike/SantaCruzHighBallimg3.png";
import img4 from "../Components/Images/bike/SantaCruzHighBallimg4.png";

function SantaCruzHighBall() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Santa Cruz Highball Frame TA" },
        { name: "Fork", value: "RockShox Sid SL Select+, 3-Position, 100mm, w/Remote" },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "DT Swis 370, 12x148, XD, 6-Bolt, 36t, 28h" },
        { name: "Hub Rear", value: "DT Swis 370, 12x148, XD, 6-Bolt" },
        { name: "Rims", value: "RaceFace AR Offset 27, 29" },
        { name: "Spokes", value: "DT Swiss Champion" },
        { name: "Tire", value: "Maxxis Rekon Race 29x2.35, EXO" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "SRAM GX Eagle, 12-speed" },
        { name: "Rear Derailleur", value: "SRAM GX Eagle, 12-Speed" },
        { name: "Crank", value: "SRAM GX Eagle" },
        { name: "Bottom Bracket", value: "SRAM DUB 68/73mm Threaded BB" },
        { name: "Cassette", value: "SRAM XG1275 Eagle, 12spd, 10-50t" },
        { name: "Chain", value: "SRAM GX Eagle, 12spd" },
        { name: "Pedal", value: "BUCKLOS MTB Dual Sided Cleat Pedals" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "WTB Silverado, CroMo" },
        { name: "Seat Post", value: "RaceFace Next, 27.2, 400mm" },
        { name: "Brake Set", value: "SRAM Level TL" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Santa Cruz Highball CR"
        price="₱200,400"
        description="The Santa Cruz Highball CR is a lightweight carbon XC hardtail built for speed and efficiency. Featuring a Carbon C frame, a 100mm suspension fork, and a 12-speed drivetrain, it delivers precise handling and race-ready performance. Perfect for endurance rides and competitive XC racing."
        images={[mtb, img1, img2, img3, img4]}
        colors={["#f6ff0e", "#000000"]}
        sizes={["26", "27.5", "29"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default SantaCruzHighBall;
