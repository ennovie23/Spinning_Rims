import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb1 from "../Components/Images/bike/Trek7img0.png";
import Trek7img1 from "../Components/Images/bike/Trek7img1.png";
import Trek7img2 from "../Components/Images/bike/Trek7img2.png";
import Trek7img3 from "../Components/Images/bike/Trek7img3.png";
import Trek7img4 from "../Components/Images/bike/Trek7img4.png";

function TrekMarlin7() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Alpha Silver Aluminum, curved top tube, internal routing, chainstay disc brake mount, rack and kickstand mount, 135x5mm QR" },
        { name: "Fork", value: "RockShox Judy, coil spring, preload, TurnKey lockout" },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Formula DC-20, alloy, 6-bolt, 5x100mm QR" },
        { name: "Hub Rear", value: "Formula DC-27, alloy, 6-bolt, 7sp freehub, 135x5mm QR" },
        { name: "Rims", value: "Bontrager Connection, double-wall, 32-hole, 20mm width, schrader valve" },
        { name: "Spokes", value: "14g stainless steel, black" },
        { name: "Tire", value: "Bontrager XR2 Comp, wire bead, 30 tpi, 27.5x2.20'' Connection, double-wall, 32-hole, 20mm width, schrader valve" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "Shimano Deore M4100, 10 speed" },
        { name: "Rear Derailleur", value: "Shimano Deore M5120, long cage" },
        { name: "Crank", value: "FSA Alpha Drive, 28T steel ring, 55mm chainline" },
        { name: "Bottom Bracket", value: "FSA, 73mm, threaded cartridge, 122.5mm spindle" },
        { name: "Cassette", value: "Shimano Deore M4100, 11-46, 10 speed" },
        { name: "Chain", value: "KMC X10, 10 speed" },
        { name: "Pedal", value: "VP-536 nylon platform" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Bontrager Arvada, steel rails, 138mm width" },
        { name: "Seat Post", value: "Bontrager alloy, 31.6mm, 12mm offset, 400mm length" },
        { name: "Brake Set", value: "Shimano MT200 hydraulic disc RT26 Rotor" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Trek Marlin 7"
        price="₱47,490"
        description="The Trek Marlin 7 is a high-performance hardtail mountain bike with premium components designed for serious riders."
        images={[mtb1, Trek7img1, Trek7img2, Trek7img3, Trek7img4]}
        colors={["#a7d2f2", "#7be0ce", "#ff9918"]}
        sizes={["27.5", "29"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default TrekMarlin7;
