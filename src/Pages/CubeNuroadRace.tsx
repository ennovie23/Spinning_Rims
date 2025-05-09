import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/CubeNuroadRaceimg0.png";
import img1 from "../Components/Images/bike/CubeNuroadRaceimg1.png";
import img2 from "../Components/Images/bike/CubeNuroadRaceimg2.png";
import img3 from "../Components/Images/bike/CubeNuroadRaceimg3.png";
import img4 from "../Components/Images/bike/CubeNuroadRaceimg4.png";

function CubeNuroadRace() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Aluminium 6061 T6 Superlite, Gravel Comfort Geometry, Flat Mount Disc, 12x142mm, AXH" },
        { name: "Fork", value: "CUBE Nuroad Flat Mount Disc, Full Carbon, 1 1/8 - 1 1/4 Tapered, Fender & Lowrider Mounts, 12x100mm" },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Dynamo Hubs" },
        { name: "Hub Rear", value: "Dynamo Hubs,  28H, 19mm" },
        { name: "Rims", value: "CUBE GR 2.3 Disc" },
        { name: "Spokes", value: "CUBE GR 2.3 Disc" },
        { name: "Tire", value: "Schwalbe G-One Allround, Kevlar, 40-622" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "Shimano GRX ST-RX600" },
        { name: "Front Derailleur", value: "Shimano GRX FD-R810" },
        { name: "Rear Derailleur", value: "Shimano GRX RD-RX810, Direct Mount, 11-Speed" },
        { name: "Crank", value: "Shimano GRX FC-RX600, 46x30T" },
        { name: "Bottom Bracket", value: "Shimano BB-RS500PB, Pressfit" },
        { name: "Cassette", value: "Shimano 105 CS-HG700, 11-34T" },
        { name: "Chain", value: "Shimano CN-HG601-11s" },
        { name: "Pedal", value: "DMR V6 nylon flat pedal" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Natural Fit Venec" },
        { name: "Seat Post", value: "CUBE Performance Post, 27.2mm" },
        { name: "Brake Set", value: "Shimano BR-RX400, Hydr. Disc Brake, Flat Mount (160/160)" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Cube Nuroad Race FE"
        price="₱120,000"
        description="The Cube Nuroad Race FE is a versatile adventure bike built for gravel and touring. Featuring a lightweight aluminum frame, carbon fork, Shimano GRX 11-speed drivetrain, and full fenders and a rear rack, it offers comfort, control, and practicality for all-road exploration."
        images={[mtb, img1, img2, img3, img4]}
        colors={["#778472", "#80878f"]}
        sizes={["46", "48", "50"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default CubeNuroadRace;
