import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/TrekMarlin6dimg0.png";
import img1 from "../Components/Images/bike/TrekMarlin6dimg1.png";
import img2 from "../Components/Images/bike/TrekMarlin6dimg2.png";
import img3 from "../Components/Images/bike/TrekMarlin6dimg3.png";
import img4 from "../Components/Images/bike/TrekMarlin6dimg4.png";

function TrekMarlin6d() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Alpha Gold Aluminum, curved top tube, tapered head tube, internal routing, rack, fender, and kickstand mount, UDH, Boost148, 12mm thru axle" },
        { name: "Fork", value: "SR Suntour XCM 34, coil spring, preload, lockout, tapered steerer, 44mm offset, Boost110, 15mm thru axle, 100mm travel" },
      ],
    },
    {
        title: "E-System",
        items: [
          { name: "Battery", value: "Bosch CompactTube 400Wh" },
          { name: "Charger", value: "Bosch standard 2A, 110V, smart system" },
          { name: "Computer", value: "Bosch Purion 200" },
          { name: "Motor", value: "Bosch Active Line Plus" },
        ],
      },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Shimano TC500 alloy" },
        { name: "Hub Rear", value: "Shimano TC500 alloy, centerlock, 148x12mm thru axle" },
        { name: "Rims", value: "Bontrager Connection, double-wall, 32-hole, 20mm width, Presta valve" },
        { name: "Spokes", value: "14g stainless steel, black" },
        { name: "Tire", value: "Bontrager XT3 Comp, wire bead, 30 tpi, 27.5x2.40''" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "Shimano U4000, 9 speed" },
        { name: "Rear Derailleur", value: "Shimano CUES U4000" },
        { name: "Crank", value: "FSA CK-220, 165mm length" },
        { name: "Bottom Bracket", value: "Shimano BB-56" },
        { name: "Cassette", value: "Shimano LINKGLIDE LG300, 11-46, 9 speed" },
        { name: "Chain", value: "Shimano LG500, 9/10/11 speed" },
        { name: "Pedal", value: "Chromag V11" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Bontrager Verse P3, steel rails" },
        { name: "Seat Post", value: "Bontrager alloy, 31.6mm, 12mm offset, 330mm length" },
        { name: "Brake Set", value: "Tektro, centerlock, 203mm, Tektro HD-M275 hydraulic disc" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Trek Marlin+ 6d"
        price="₱200,000"
        description="The Trek Marlin+ 6 is a hardtail electric mountain bike designed for trail and adventure riding. Featuring a lightweight aluminum frame, 120mm suspension fork, a Bosch Active Line Plus motor, and a removable 400Wh battery, it provides smooth pedal assist for extra power."
        images={[mtb, img1, img2, img3, img4]}
        colors={["#a20203", "#80878f"]}
        sizes={["26", "27.5", "29"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default TrekMarlin6d;
