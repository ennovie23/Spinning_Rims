import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb1 from "../Components/Images/bike/SWorksStumpimg0.png";
import img1 from "../Components/Images/bike/SWorksStumpimg1.png";
import img2 from "../Components/Images/bike/SWorksStumpimg2.png";
import img3 from "../Components/Images/bike/SWorksStumpimg3.png";
import img4 from "../Components/Images/bike/SWorksStumpimg4.png";

function SWorksStump() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "FACT 11m carbon chassis and rear-end, asymmetrical design, 29 Trail Geometry, SWAT™ Door integration, flip chip Head Tube/Bottom Bracket adjustment, threaded BB, fully enclosed internal cable routing, 12x148mm dropouts, sealed cartridge bearing pivots, replaceable derailleur hanger, 130mm of travel" },
        { name: "Fork", value: "FOX FLOAT 34 Factory, GRIP2 damper, Kashima Coating, 15x110mm, 44mm offset, 140mm of travel" },
        { name: "Rear Shock", value: "FOX FLOAT DPS Factory, Rx Trail Tune, EVOL Air sleeve, Kashima Coat, 3-position adjustment w/ Open Mode Adjustment, 190x45mm" },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "DT Swiss 240, 12mm thru-axle, 148mm spacing, 28h" },
        { name: "Hub Rear", value: "DT Swiss 240, Ratchet EXP, 36t engagement, SRAM XD driver body, 12mm thru-axle, 148mm spacing, 28h" },
        { name: "Rims", value: "Roval Control 240, hookless carbon, 29mm inner width, hand-built, 2Bliss Ready" },
        { name: "Spokes", value: "DT Swiss Competition Race" },
        { name: "Tire", value: "Purgatory, GRID casing, GRIPTON® T7 compound, 29x2.3" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "SRAM Eagle AXS Rocker Paddle" },
        { name: "Rear Derailleur", value: "SRAM XX1 Eagle AXS" },
        { name: "Crank", value: "SRAM XX1 Eagle, DUB, S1:165mm, S2-S5: 170mm, S6: 175mm" },
        { name: "Bottom Bracket", value: "SRAM DUB, BSA 73mm, Threaded" },
        { name: "Cassette", value: "Sram XG-1299, 12-Speed, 10-52t" },
        { name: "Chain", value: "SRAM XX1 Eagle" },
        { name: "Pedal", value: "Gusset S2 flat pedals" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Bridge, 155/143mm, Hollow Ti-rails" },
        { name: "Seat Post", value: "RockShox Reverb AXS, 30.9, 1X remote, (S1:100mm, S2: 125mm, S3: 150mm, S4-S6: 170mm)" },
        { name: "Brake Set", value: "SRAM G2 Ultimate, 4-piston caliper, hydraulic disc, 180mm/200mm" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="S - Works Stumpjumper"
        price="₱680,000"
        description="The S-Works Stumpjumper is an ultra-light trail bike with a FACT 11m carbon frame, 130mm FOX Factory suspension, and a SRAM XX Eagle AXS drivetrain, delivering top-tier performance, efficiency, and control for aggressive trail riding."
        images={[mtb1, img1, img2, img3, img4]}
        colors={["#80878f", "#a69897"]}
        sizes={["26", "27.5", "29"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default SWorksStump;
