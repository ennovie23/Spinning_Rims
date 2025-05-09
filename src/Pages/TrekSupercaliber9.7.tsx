import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb1 from "../Components/Images/bike/TrekSupercaliberimg0.png";
import img1 from "../Components/Images/bike/TrekSupercaliberimg1.png";
import img2 from "../Components/Images/bike/TrekSupercaliberimg2.png";
import img3 from "../Components/Images/bike/TrekSupercaliberimg3.png";
import img4 from "../Components/Images/bike/TrekSupercaliberimg4.png";

function TrekSupercaliber() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "SLR OCLV Mountain Carbon, IsoStrut, UDH, 80mm travel" },
        { name: "Fork", value: "Fox Performance 34 Step-Cast, Float EVOL air spring, GRIP 2-position damper, dual remote lockout, tapered steerer, 44mm offset, Boost110, 15mm Kabolt axle, 110mm travel" },
        { name: "Rear Shock", value: "Trek IsoStrut, RockShox SIDLuxe, 2-position remote damper" },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "NEW Bontrager Kovee Elite 30 carbon TA" },
        { name: "Hub Rear", value: "NEW Bontrager Kovee Elite 30 carbon, 135x5mm TA" },
        { name: "Rims", value: "NEW Bontrager Kovee Elite 30 carbon, Tubeless Ready, 108T Rapid Drive, 6-bolt, Boost148, 12mm thru axle, 29''" },
        { name: "Spokes", value: "NEW Bontrager Kovee Elite 30" },
        { name: "Tire", value: "Bontrager Sainte-Anne RSL XR, Tubeless Ready, dual compound, aramid bead, 220 tpi, 29x2.40''" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "Shimano XT M8100, 12 speed" },
        { name: "Rear Derailleur", value: "Shimano XT M8100, long cage" },
        { name: "Crank", value: "E*thirteen TRS Race Carbon, 30mm spindle, 34T alloy ring, 55mm chainline, 175mm length" },
        { name: "Bottom Bracket", value: "E*thirteen BB20-92" },
        { name: "Cassette", value: "Shimano XT M8100, 10-51, 12 speed" },
        { name: "Chain", value: "Shimano Ultegra/XT M8100, 12 speed" },
        { name: "Pedal", value: "Deity Deftrap" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Bontrager Aeolus Elite, austenite rails, 145mm width" },
        { name: "Seat Post", value: "Bontrager Line Dropper, 125mm travel, internal routing, 31.6mm, 395mm length" },
        { name: "Brake Set", value: "Shimano Deore XT M8100 hydraulic disc, Shimano RT86, 6-bolt, 160mm/180mm" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Trek Supercaliber 9.7 XT"
        price="₱400,000"
        description="The Trek Supercaliber 9.7 XT is a lightweight XC race bike with a carbon frame, IsoStrut integrated suspension (60mm travel), and a Shimano XT 12-speed drivetrain, delivering speed, efficiency, and control for competitive cross-country riding."
        images={[mtb1, img1, img2, img3, img4]}
        colors={["#dadada ", "#a20203", "#2f2f2f"]}
        sizes={["26", "27.5", "29"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default TrekSupercaliber;
