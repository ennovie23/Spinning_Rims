import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/TrekPowerfly7img0.png";
import img1 from "../Components/Images/bike/TrekPowerfly7img1.png";
import img2 from "../Components/Images/bike/TrekPowerfly7img2.png";
import img3 from "../Components/Images/bike/TrekPowerfly7img3.png";
import img4 from "../Components/Images/bike/TrekPowerfly7img4.png";

function TrekPowerfly7() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Alpha Platinum Aluminium, curved top tube, Removable Integrated Battery (RIB), tapered head tube, Control Freak internal routing, Motor Armour, Boost148, 12 mm thru axle" },
        { name: "Fork", value: "RockShox 35 Gold RL, DebonAir spring, Motion Control damper, lockout, tapered steerer, 44 mm offset, oversized crown for eMTB, Boost110, 15 mm Maxle Stealth, 80 mm travel" },
      ],
    },
    {
        title: "E-System",
        items: [
          { name: "Battery", value: "Bosch PowerTube 625 Wh" },
          { name: "Charger", value: "Bosch standard 4A, 220-240 V" },
          { name: "Computer", value: "Bosch Kiox with Anti-theft solution" },
          { name: "Motor", value: "Bosch Performance CX, magnesium motor body, 250 watt, 85 Nm, 25 km/h max assist" },
        ],
      },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Bontrager alloy, sealed bearing" },
        { name: "Hub Rear", value: "Bontrager alloy, sealed bearing, alloy axle, 6-bolt, Shimano MicroSpline freehub, Boost148, 12 mm thru axle" },
        { name: "Rims", value: "Bontrager Line Comp 30, Tubeless-Ready" },
        { name: "Spokes", value: "DT Swiss Champion, J-Bend, Black" },
        { name: "Tire", value: "Bontrager XR3 Team Issue, Tubeless-Ready, Inner Strength sidewall, aramid bead, 120 tpi, 27.5x2.35"},
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "" },
        { name: "Rear Derailleur", value: "Shimano XT M8100, long cage" },
        { name: "Crank", value: "E*thirteen E*spec Plus, 165 mm length" },
        { name: "Bottom Bracket", value: "VP BC73, 73mm, threaded cartridge" },
        { name: "Cassette", value: "Shimano SLX M7100, 10-51T, 12-speed" },
        { name: "Chain", value: "Shimano SLX M7100, 12-speed" },
        { name: "Pedal", value: "DMR Vault" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Bontrager Commuter Comp" },
        { name: "Seat Post", value: "TranzX JD-YSP18, 100 mm travel, internal routing, 31.6 mm, 361 mm length" },
        { name: "Brake Set", value: "Shimano 4-piston hydraulic disc, M6100 lever, M6120 calliper, Shimano RT66, 6-bolt, 203 mm" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Trek Powerfly 7"
        price="₱200,000"
        description="The Trek Powerfly 7 is a rugged e-MTB with a Bosch Performance CX motor, 625Wh battery, 120mm suspension fork, and a Shimano XT 12-speed drivetrain, delivering power, control, and smooth performance on tough trails."
        images={[mtb, img1, img2, img3, img4]}
        colors={["#a2d6ee", "#80878f"]}
        sizes={["26", "27.5", "29"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default TrekPowerfly7;
