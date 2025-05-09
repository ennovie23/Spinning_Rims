import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb1 from "../Components/Images/bike/ScottSpark970img0.png";
import img1 from "../Components/Images/bike/ScottSpark970img1.png";
import img2 from "../Components/Images/bike/ScottSpark970img2.png";
import img3 from "../Components/Images/bike/ScottSpark970img3.png";
import img4 from "../Components/Images/bike/ScottSpark970img4.png";

function ScottSpark970() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Spark Alloy HMF Mainframe with Alloy 6061 Swingarm" },
        { name: "Fork", value: "FOX 36 Float Performance Elite Air FIT4 3-Modes with low Speed adj. / Kabolt 15x110mm axle" },
        { name: "Rear Shock", value: "FOX NUDE 5T EVOL Trunnion SCOTT custom w. travel / geo adj." },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Syncros Revelstoke, Silent, 6-bolt, 5x100mm TA" },
        { name: "Hub Rear", value: "Syncros Revelstoke, Silent, Microspline 135x5mm TA" },
        { name: "Rims", value: "Syncros Revelstoke 1.5 6 Bolt F: 15x110mm, R: 12x148mm 30mm Tubeless ready rim 28H / XD Driver" },
        { name: "Spokes", value: "Sapim D-Light" },
        { name: "Tire", value: "Maxxis Dissector / 60TPI Foldable Tubeless Ready / EXO 3C maxx Terra" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "SRAM NX Eagle AXS Rocker Controller" },
        { name: "Rear Derailleur", value: "SRAM NX Eagle AXS 12 Speed Wireless Electronic Shift System" },
        { name: "Crank", value: "SRAM NX Eagle 32t" },
        { name: "Bottom Bracket", value: "SRAM NX Eagle DUB" },
        { name: "Cassette", value: "SRAM XG1275 / 10-52 T" },
        { name: "Chain", value: "SRAM CN NX Eagle" },
        { name: "Pedal", value: "Pembree R1V flat pedals" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Syncros Tofino 1.5 Regular" },
        { name: "Seat Post", value: "Syncros Duncan Dropper Post 1.5" },
        { name: "Brake Set", value: "Shimano Deore XT M8100 hydraulic disc, Shimano RT86, 6-bolt, 160mm/180mm" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Scott Spark 970"
        price="₱180,000"
        description="The Scott Spark 970 is a full-suspension XC bike with an aluminum frame, 130mm travel, and a SRAM 12-speed drivetrain, featuring TwinLoc suspension technology for efficient climbing and smooth descending.
4o"
        images={[mtb1, img1, img2, img3, img4]}
        colors={["#ffd900", "#dadada", "#203850"]}
        sizes={["26", "27.5", "29"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default ScottSpark970;
