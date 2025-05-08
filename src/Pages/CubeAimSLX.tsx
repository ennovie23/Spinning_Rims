import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/CubeAimSLXimg0.png";
import img1 from "../Components/Images/bike/CubeAimSLXimg1.png";
import img2 from "../Components/Images/bike/CubeAimSLXimg2.png";
import img3 from "../Components/Images/bike/CubeAimSLXimg3.png";
import img4 from "../Components/Images/bike/CubeAimSLXimg4.png";

function CubeAimSLX() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Aluminium Lite, AMF, Double Butted, Internal Cable Routing, Flat Mount Brake, SIC Mount, FM Kickstand Mount" },
        { name: "Fork", value: "SR Suntour XCE, 100mm" },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "CUBE Alloy Light, QR, 6-Bolt" },
        { name: "Hub Rear", value: "CUBE Alloy Light, QR, 6-Bolt, 135x5mm QR" },
        { name: "Rims", value: "CUBE ZX20, 32H, Disc" },
        { name: "Spokes", value: "Stainless Black 15G / 1.8mm" },
        { name: "Tire", value: "CUBE IMPAC Smartpac, 2.25" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "Shimano SL-M315, Rapidfire-Plus, 7x3 speed" },
        { name: "Front Derailleur", value: "Shimano FD-M315, Top Swing, 31.8mm Clamp"},
        { name: "Rear Derailleur", value: "Shimano RD-TX800, 8-Speed" },
        { name: "Crank", value: "Shimano FC-M315, 36x22T" },
        { name: "Bottom Bracket", value: "Threaded Bottom Bracket" },
        { name: "Cassette", value: "Shimano CS-HG200, 12-32T" },
        { name: "Chain", value: "KMC Z8.3" },
        { name: "Pedal", value: "Composite OneUp" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Natural Fit Venec Lite" },
        { name: "Seat Post", value: "CUBE Performance Post, 27.2mm" },
        { name: "Brake Set", value: "Tektro MD-280/U310R, Mech. Disc Brake (160/160)" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Cube Aim SLX"
        price="₱42,180"
        description="The Cube Aim SL is a high-quality hardtail mountain bike designed for riders who want to take their trail adventures to the next level. Built with a lightweight aluminum frame, a 100mm travel suspension fork with remote lockout, and a precise Shimano 2x9 drivetrain."
        images={[mtb, img1, img2, img3, img4]}
        colors={["#80878f", "#ffd900", "#000000"]}
        sizes={["27.5", "29"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default CubeAimSLX;
