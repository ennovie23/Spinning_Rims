import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb1 from "../Components/Images/bike/CubeStereoHPCimg0.png";
import img1 from "../Components/Images/bike/CubeStereoHPCimg1.png";
import img2 from "../Components/Images/bike/CubeStereoHPCimg2.png";
import img3 from "../Components/Images/bike/CubeStereoHPCimg3.png";
import img4 from "../Components/Images/bike/CubeStereoHPCimg4.png";

function CubeStereoHPC() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "HPC Carbon Monocoque Advanced Twin Mold Technology, Aluminum 6061 T6 Rear Triangle, ATG, ETC 4-Link, ISCG Mount, Boost 148, AXH" },
        { name: "Fork", value: "Fox 36 Factory Live Valve E-Tuned, 29er, 150mm travel, 44mm offset, Fit4 damper, Kabolt-X 110, electronic adaptive suspension, e-bike integrated" },
        { name: "Rear Shock", value: "Fox Float DPS, 185x52.5mm, Open/Medium/Firm Mode" },
      ],
    },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Fulcrum Red Fire, 6-bolt, 5x100mm TA" },
        { name: "Hub Rear", value: "Fulcrum Red Fire, 6-bolt, freehub, 135x5mm TA" },
        { name: "Rims", value: "Fulcrum Red Fire 55 EM, 28/28 Spokes, 15x110mm / 12x148mm, Tubeless Ready" },
        { name: "Spokes", value: "Fulcrum Bladed Spokes" },
        { name: "Tire", value: "Schwalbe Nobby Nic, Super Ground, Addix Speedgrip, Kevlar, 2.4" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "Shimano Deore SL-M6100, Rapidfire-Plus" },
        { name: "Rear Derailleur", value: "Shimano XT RD-M8100-SGS, ShadowPlus, 12-Speed" },
        { name: "Crank", value: "Shimano FC-MT511, 32T, Boost, 170mm" },
        { name: "Bottom Bracket", value: "Shimano FC-MT511" },
        { name: "Cassette", value: "Shimano Deore CS-M6100, 10-51T" },
        { name: "Chain", value: "Shimano CN-M6100" },
        { name: "Pedal", value: "HT PA03A" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Natural Fit Nuance Lite" },
        { name: "Seat Post", value: "CUBE Dropper Post, Handlebar Lever, Internal Cable Routing, 31.6mm, (XS: 100mm, S: 125mm, M/L/XL: 150mm)" },
        { name: "Brake Set", value: "Shimano BR-MT520/MT500, Hydr. Disc Brake (203/180)" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Cube Stereo HPC"
        price="₱300,000"
        description="The Cube Stereo HPC is a full-suspension mountain bike with a carbon main frame, aluminum rear triangle, and 130–170mm travel (varies by model), delivering lightweight strength, control, and smooth performance on technical trails."
        images={[mtb1, img1, img2, img3, img4]}
        colors={["#a6d3f0", "#7f8791", "#303030"]}
        sizes={["26", "27.5", "29"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default CubeStereoHPC;
