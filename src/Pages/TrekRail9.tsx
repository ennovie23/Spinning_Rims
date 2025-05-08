import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/TrekRail9img0.png";
import img1 from "../Components/Images/bike/TrekRail9img1.png";
import img2 from "../Components/Images/bike/TrekRail9img2.png";
import img3 from "../Components/Images/bike/TrekRail9img3.png";
import img4 from "../Components/Images/bike/TrekRail9img4.png";

function TrekRail9() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "OCLV Mountain Carbon main frame, Removable Integrated Battery (RIB), tapered head tube, Knock Block, Control Freak internal routing, magnesium rocker link, Motor Armor, Mino Link, ABP, Boost148, 12mm thru axle, 150mm travel" },
        { name: "Fork", value: "RockShox Yari RC, DebonAir spring, Motion Control RC damper, e-MTB optimized, tapered steerer, 42mm offset, Boost110, 15mm Maxle Stealth, 160mm travel" },
        { name: "Rear Shock", value: "Bosch PowerTube 625Wh"},
      ],
    },
    {
        title: "E-System",
        items: [
          { name: "Battery", value: "Bosch PowerTube 625Wh" },
          { name: "Charger", value: "Bosch standard 4A, 100-240V" },
          { name: "Computer", value: "Bosch Kiox with Anti-theft solution" },
          { name: "Motor", value: "Bosch Performance CX, magnesium motor body, 250 watt, 85 Nm, 20mph or 32km/h max assist" },
        ],
      },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Bontrager alloy, sealed bearing" },
        { name: "Hub Rear", value: "Bontrager alloy, sealed bearing, alloy axle, 6-bolt, Boost110, 15mm thru axle" },
        { name: "Rims", value: "Bontrager Line Comp 30, Tubeless Ready" },
        { name: "Spokes", value: "14g stainless steel, black" },
        { name: "Tire", value: "Bontrager XR5 Team Issue, Tubeless Ready, Inner Strength sidewall, aramid bead, 120 tpi, 29x2.60''" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "SRAM NX Eagle single-click, 12 speed" },
        { name: "Rear Derailleur", value: "SRAM NX Eagle" },
        { name: "Crank", value: "SRAM X1 1000, 34T, 165mm length" },
        { name: "Bottom Bracket", value: "SRAM X1 1000, 34T, 165mm length" },
        { name: "Cassette", value: "SRAM PG-1230 Eagle, 11-50, 12 speed" },
        { name: "Chain", value: "SRAM NX Eagle, 12 speed" },
        { name: "Pedal", value: "Race Face Atlas" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Bontrager Arvada, steel rails, 138mm width" },
        { name: "Seat Post", value: "Bontrager Line Dropper, 100mm travel, internal routing, 31.6mm, 345mm length" },
        { name: "Brake Set", value: "Shimano 4-piston hydraulic disc, Shimano RT76, 6-bolt, 203mm" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Trek Rail 9"
        price="₱500,000"
        description="The Trek Rail 9 is a powerful full-suspension e-MTB built for aggressive trail riding. Featuring a lightweight aluminum frame, Bosch Performance Line CX motor, long-travel suspension, and a Shimano or SRAM 12-speed drivetrain (varies by model), it delivers smooth power, control, and capability on rugged terrain."
        images={[mtb, img1, img2, img3, img4]}
        colors={["#303030", "#1c350e", "#ff9b15"]}
        sizes={["26", "27.5", "29"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default TrekRail9;
