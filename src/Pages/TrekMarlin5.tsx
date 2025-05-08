import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb2 from "../Components/Images/bike/Trek5img0.png";
import Trek5img1 from "../Components/Images/bike/Trek5img1.jpg";
import Trek5img2 from "../Components/Images/bike/Trek5img2.jpg";
import Trek5img3 from "../Components/Images/bike/Trek5img3.jpg";
import Trek5img4 from "../Components/Images/bike/Trek5img4.jpg";

function TrekMarlin5() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Alpha Silver Aluminum, curved top tube, internal routing, chainstay disc brake mount, rack and kickstand mount, 135x5mm QR" },
        { name: "Fork", value: "SR Suntour XCE 28" },
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
        { name: "Shifter", value: "Shimano Altus M315, 7x3 speed" },
        { name: "Front Derailluer", value: "Shimano Tourney TY300, 34.9mm clamp, down swing, down pull" },
        { name: "Rear Derailleur", value: "Shimano Tourney TY300" },
        { name: "Crank", value: "Shimano Tourney TY301, 42/34/24, 170mm length" },
        { name: "Bottom Bracket", value: "VP BC73, 73mm, threaded cartridge" },
        { name: "Cassette", value: "Shimano HG200, 12-32, 7 speed" },
        { name: "Chain", value: "KMC Z7, 7 speed" },
        { name: "Pedal", value: "VP-536 nylon platform" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Bontrager Arvada, steel rails, 138mm width" },
        { name: "Seat Post", value: "Bontrager alloy, 31.6mm, 12mm offset, 400mm length" },
        { name: "Brake Set", value: "Tektro HD-M275 hydraulic disc, 180mm rotor" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Trek Marlin 5"
        price="₱29,490"
        description="Marlin 5 is where your mountain biking journey begins. With a sturdy yet lightweight frame, a smooth suspension fork, and reliable components, this model is the perfect choice for riders looking to explore trails with confidence. Marlin 5 delivers a comfortable and capable ride at an unbeatable value."
        images={[mtb2, Trek5img1, Trek5img2, Trek5img3, Trek5img4]}
        colors={["#fc9d15", "#1987d4", "#000000"]}
        sizes={["27.5", "29"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default TrekMarlin5;
