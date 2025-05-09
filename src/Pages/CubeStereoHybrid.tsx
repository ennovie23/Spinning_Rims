import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/CubeStereoimg0.png";
import img1 from "../Components/Images/bike/CubeStereoimg1.png";
import img2 from "../Components/Images/bike/CubeStereoimg2.png";
import img3 from "../Components/Images/bike/CubeStereoimg3.png";
import img4 from "../Components/Images/bike/CubeStereoimg4.png";

function CubeStereo() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "C:62 Monocoque Carbon Advanced Twin Mold Technology" },
        { name: "Fork", value: "RockShox ZEB Select Charger RC, 15x110mm, 170mm" },
        { name: "Rear Shock", value: "RockShox Super Deluxe Ultimate RT3, DebonAir spring, Thru Shaft 3-position damper, 230 mm x 57.5 mm"},
      ],
    },
    {
        title: "E-System",
        items: [
          { name: "Battery", value: "Bosch PowerTube 750" },
          { name: "Charger", value: "Bosch 4A Smart System" },
          { name: "Computer", value: "Bosch Kiox 300 & LED Remote" },
          { name: "Motor", value: "Bosch Gen4, Performance CX 250W Smart System. 340% Assist. 85Nm" },
        ],
      },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Shimano HB-MT400-B" },
        { name: "Hub Rear", value: "Shimano HB-MT400-B, 15mm, Boost, Centerlock / Shimano FH-MT400-B, 12mm, Boost, Centerlock" },
        { name: "Rims", value: "Newmen Performance 30, 15x110mm/12x148mm, Tubeless Ready" },
        { name: "Spokes", value: "14g stainless steel, Bladed" },
        { name: "Tire", value: "Maxxis Assegai 27.5 x 2.5 & Maxxis Minion DHR II 27.5 x2.4" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "Shimano Deore SL-M6100-IR, Direct mount, Rapidfire-Pluss" },
        { name: "Rear Derailleur", value: "Shimano XT RD-M8100-SGS, ShadowPlus, 12-Speed" },
        { name: "Crank", value: "ACID E-Crank, 175mm" },
        { name: "Bottom Bracket", value: "Shimano, Pressfit" },
        { name: "Cassette", value: "Shimano Deore CS-M6100, 10-51T" },
        { name: "Chain", value: "Shimano CN-M6100" },
        { name: "Pedal", value: "Hope F22" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Natural Fit Venec" },
        { name: "Seat Post", value: "CUBE Dropper Post 31.6mm, S: 100mm M: 125mm, L/XL: 150mm" },
        { name: "Brake Set", value: "Shimano Deore BR-M6120, Hydr. Disc Brake (203/203)" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Cube Stereo Hybrid"
        price="₱300,000"
        description="The Cube Stereo Hybrid is a full-suspension e-MTB with a Bosch Performance CX motor, integrated battery, and 120–170mm travel (varies by model), delivering power, control, and smooth handling on technical trails."
        images={[mtb, img1, img2, img3, img4]}
        colors={["#c6dfec", "#303030"]}
        sizes={["26", "27.5", "29"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default CubeStereo;
