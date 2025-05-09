import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/CubeNuroadC62img0.png";
import img1 from "../Components/Images/bike/CubeNuroadC62img1.png";
import img2 from "../Components/Images/bike/CubeNuroadC62img2.png";
import img3 from "../Components/Images/bike/CubeNuroadC62img3.png";
import img4 from "../Components/Images/bike/CubeNuroadC62img4.png";

function CubeNuroadC62() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "C:62 Advanced Twin Mold, Internal Cable Routing, Flat Mount Disc, Fender/Rack & Kickstand Option, 12x142mm, AXH" },
        { name: "Fork", value: "CUBE C:62 Technology, 1 1/8 - 1 1/4 Tapered, Flat Mount Disc, Fender & Lowrider Mounts, Internal Light Cable Option, 12x100mm" },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Fulcrum Rapid Red 900 Disc" },
        { name: "Hub Rear", value: "Fulcrum Rapid Red 900 Disc, 28H" },
        { name: "Rims", value: "Fulcrum Rapid Red 900 Disc, 700x22C, Tubeless Ready" },
        { name: "Spokes", value: "DT Revolution" },
        { name: "Tire", value: "Schwalbe G-One Allround, Kevlar, 40-622" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "Shimano GRX ST-RX600" },
        { name: "Rear Derailleur", value: "Shimano GRX RD-RX812, Direct Mount, 11-Speed" },
        { name: "Crank", value: "Shimano GRX FC-RX600, 40T" },
        { name: "Bottom Bracket", value: "Shimano GRX FC-RX60" },
        { name: "Cassette", value: "Shimano SLX CS-M7000, 11-42T" },
        { name: "Chain", value: "Shimano CN-HG601-11" },
        { name: "Pedal", value: "Crankbrothers Stamp 3 flat pedal" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Natural Fit Nuance Lite" },
        { name: "Seat Post", value: "Newmen Advanced, Carbon, 27.2mm" },
        { name: "Brake Set", value: "Shimano GRX BR-RX400, Hydr. Disc Brake, Flat Mount (160/160)" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Cube Nuroad C:62 Pro"
        price="₱250,500"
        description="The Cube Nuroad C:62 Pro is a lightweight carbon gravel bike built for speed and versatility. Featuring a C:62 carbon frame, carbon fork, Shimano GRX 11-speed drivetrain, and wide tubeless-ready tires, it delivers efficiency, comfort, and control on mixed terrain."
        images={[mtb, img1, img2, img3, img4]}
        colors={["#7f848c", "#303030"]}
        sizes={["46", "48", "50"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default CubeNuroadC62;
