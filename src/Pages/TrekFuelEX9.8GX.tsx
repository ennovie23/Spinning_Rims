import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb1 from "../Components/Images/bike/TrekFuelimg0.png";
import img1 from "../Components/Images/bike/TrekFuelimg1.png";
import img2 from "../Components/Images/bike/TrekFuelimg2.png";
import img3 from "../Components/Images/bike/TrekFuelimg3.png";
import img4 from "../Components/Images/bike/TrekFuelimg4.png";

function TrekFuel() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "OCLV Mountain Carbon main frame & stays, internal storage, tapered head tube, Knock Block, Control Freak internal routing, Carbon Armor, ISCG 05, magnesium rocker link, Mino Link, ABP, Boost148, 130mm travel" },
        { name: "Fork", value: "Fox Performance 36, Float EVOL air spring, GRIP damper, tapered steerer, 44mm offset, Boost110, 15mm Kabolt axle, 140mm travel" },
        { name: "Rear Shock", value: "Fox Performance Float EVOL, RE:aktiv with Thru Shaft 3-position damper, tuned by Trek Suspension Lab, 210mm x 55mm" },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Bontrager Line Elite 30, 6-bolt, 5x100mm Boost" },
        { name: "Hub Rear", value: "Bontrager Line Elite 30 freehub, 135x5mm Bosst" },
        { name: "Rims", value: "Bontrager Line Elite 30, OCLV Mountain Carbon, Tubeless Ready, Rapid Drive 108, 6-bolt, SRAM XD driver, Boost148, 12mm thru axle, 29''" },
        { name: "Spokes", value: "Bontrager Line Elite 30" },
        { name: "Tire", value: "Bontrager XR5 Team Issue, Tubeless Ready, Inner Strength casing, aramid bead, 60 tpi, 29x2.50''" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "SRAM GX Eagle, 12 speed" },
        { name: "Rear Derailleur", value: "SRAM GX Eagle" },
        { name: "Crank", value: "SRAM GX Eagle, DUB, 30T alloy ring, Boost (52mm chainline), 175mm length" },
        { name: "Bottom Bracket", value: "SRAM DUB, 92mm, PressFit" },
        { name: "Cassette", value: "SRAM Eagle XG-1275, 10-52, 12 speed" },
        { name: "Chain", value: "SRAM GX Eagle, 12 speed" },
        { name: "Pedal", value: "Crankbrothers Stamp " },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Bontrager Arvada, austenite rails, 138mm width" },
        { name: "Seat Post", value: "Bontrager Line Elite Dropper, 150mm travel, internal routing, 31.6mm, 440mm length" },
        { name: "Brake Set", value: "SRAM G2 RS 4-piston hydraulic disc" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Trek Fuel EX 9.8 GX"
        price="₱350,000"
        description="The Trek Fuel EX 9.8 GX is a versatile full-suspension trail bike with a carbon frame, 150mm front / 140mm rear travel, and a SRAM GX Eagle 12-speed drivetrain, delivering a perfect balance of efficiency, control, and capability for all-mountain riding."
        images={[mtb1, img1, img2, img3, img4]}
        colors={["#a80001", "#ff9b16", "#8a7a59"]}
        sizes={["26", "27.5", "29"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default TrekFuel;
