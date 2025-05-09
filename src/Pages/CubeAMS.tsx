import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb1 from "../Components/Images/bike/CubeAMSimg0.png";
import img1 from "../Components/Images/bike/CubeAMSimg1.png";
import img2 from "../Components/Images/bike/CubeAMSimg2.png";
import img3 from "../Components/Images/bike/CubeAMSimg3.png";
import img4 from "../Components/Images/bike/CubeAMSimg44.png";

function CubeAMS() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "C:68X® Monocoque Advanced Twin Mold Technology, FSP 4-Link, Boost 148, UDH™" },
        { name: "Fork", value: "Fox 32 SC Float Factory FIT4, 2-Position Remote, Tapered, 15x110mm, 100mm, Kashima Coated" },
        { name: "Rear Shock", value: "Fox Float DPS Factory Remote, 190x40mm, 2-Position Remote, Kashima Coated" },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Newmen Advanced SL, 5x100mm TA" },
        { name: "Hub Rear", value: "Newmen Advanced SL freehub, 135x5mm TA" },
        { name: "Rims", value: "Newmen Advanced SL X.A.25 Carbon, 28/28 Spokes, 15x110mm/12x148mm, Tubeless Ready" },
        { name: "Spokes", value: "Black Bladed Spokes" },
        { name: "Tire", value: "Schwalbe Racing Ralph, Super Race, Addix Speed, Kevlar, 2.1" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "Sram Eagle AXS™ Controller" },
        { name: "Rear Derailleur", value: "Sram XX1 Eagle AXS™, 12-Speed" },
        { name: "Crank", value: "Sram XX1 Eagle™ DUB SL, 32T" },
        { name: "Bottom Bracket", value: "Sram XX1 Eagle" },
        { name: "Cassette", value: "Sram XG-1299 Eagle™ Rainbow, 10-52T" },
        { name: "Chain", value: "Sram PC-XX1 Eagle™ Rainbow" },
        { name: "Pedal", value: "Burgtec Penthouse Flat Mk5" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Natural Fit Nuance SLT Carbon" },
        { name: "Seat Post", value: "Newmen Advanced, Carbon, 30.9mm" },
        { name: "Brake Set", value: "Sram Level Ultimate Rainbow, Hydr. Disc Brake (160/160)" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Cube AMS"
        price="₱350,000"
        description="The Cube AMS is a lightweight full-suspension XC bike with a carbon or aluminum frame, 100–120mm travel (varies by model), and a precise Shimano or SRAM drivetrain, built for speed, efficiency, and control on technical cross-country trails."
        images={[mtb1, img1, img2, img3, img4]}
        colors={["#000000", "#dadada"]}
        sizes={["26", "27.5", "29"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default CubeAMS;
