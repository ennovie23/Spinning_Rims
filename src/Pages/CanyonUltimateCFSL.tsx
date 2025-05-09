import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/CanyonUltimateimg0.png";
import img1 from "../Components/Images/bike/CanyonUltimateimg1.png";
import img2 from "../Components/Images/bike/CanyonUltimateimg2.png";
import img3 from "../Components/Images/bike/CanyonUltimateimg3.png";
import img4 from "../Components/Images/bike/CanyonUltimateimg4.png";

function CanyonUltimate() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Canyon Ultimate CF SL Our latest 5th-generation Ultimate frame." },
        { name: "Fork", value: "Canyon FK0104 CF Carbon fork optimised for lightness, stiffness, and strength." },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Canyon Thru Axle 12x142x1,75" },
        { name: "Hub Rear", value: "Canyon Thru Axle 12x142x1,75, 135x5mm" },
        { name: "Rims", value: "DT Swiss Performance LN Axle dimension: 12x100 mm Rotor mount: Center Lock" },
        { name: "Spokes", value: "DT Swiss Spokes" },
        { name: "Tire", value: "Schwalbe One TLE, 28mm" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "Schwalbe One TLE, 28mm" },
        { name: "Front Derailleur", value: "SRAM Rival eTap AXS, 2-speed" },
        { name: "Rear Derailleur", value: "SRAM Rival eTap AXS, 12-speed" },
        { name: "Crank", value: "SRAM Rival AXS Powermeter" },
        { name: "Bottom Bracket", value: "SRAM DUB Pressfit" },
        { name: "Cassette", value: "SRAM Rival, 12-speed, 10-30T" },
        { name: "Chain", value: "SRAM Rival D1 12s" },
        { name: "Pedal", value: "Look Keo 2 Max pedals" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Selle Italia Model X" },
        { name: "Seat Post", value: "Canyon SP0055" },
        { name: "Brake Set", value: "SRAM Rival eTap AXS" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Canyon Ultimate CF SL"
        price="₱192,450"
        description="The Canyon Ultimate CF SL is a lightweight all-rounder road bike, built for climbing and speed. Featuring a carbon frame, aero-optimized design, and a Shimano or SRAM 12-speed drivetrain (varies by model), it delivers a balanced mix of performance and comfort for competitive and endurance riders."
        images={[mtb, img1, img2, img3, img4]}
        colors={["#a50101", "#dadada"]}
        sizes={["46", "48", "50"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default CanyonUltimate;
