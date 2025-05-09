import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/GiantTranceimg0.png";
import img1 from "../Components/Images/bike/GiantTranceimg1.png";
import img2 from "../Components/Images/bike/GiantTranceimg2.png";
import img3 from "../Components/Images/bike/GiantTranceimg3.png";
import img4 from "../Components/Images/bike/GiantTranceimg4.png";

function GiantTrance() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Advanced-grade composite frame, Advanced-grade rear triangle, Advanced forged composite upper rocker, 140mm Maestro suspension system" },
        { name: "Fork", value: "Fox 36 Factory Live Valve E-Tuned, 29er, 150mm travel, 44mm offset, Fit4 damper, Kabolt-X 110, electronic adaptive suspension, e-bike integrated" },
        { name: "Rear Shock", value: "Fox Float X Factory, EVOL, 185x52.5mm Trunnion mount, custom tuned, recommended sag: 30%" },
      ],
    },
    {
        title: "E-System",
        items: [
          { name: "Battery", value: "Giant EnergyPak 400Wh, Aluminium casing with highest safety standard (EN50604), CO2 Neutral production, Giant EnergyPak Plus 200 range extender compatible" },
          { name: "Charger", value: "Giant EnergyPak 4A smart charger, 60% in 1:45" },
          { name: "Computer", value: "Giant RideControl GO, frame integrated LED console Optional wireless ANT+ display" },
          { name: "Motor", value: "Giant SyncDrive Pro2 85Nm, PedalPlus 6-Sensor technology" },
        ],
      },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Zipp 3MOTO ZM2" },
        { name: "Hub Rear", value: "Zipp 3MOTO ZM2  freehub, 135x5mm QR" },
        { name: "Rims", value: "Zipp 3MOTO 29 [F] /27.5 [R], Carbon" },
        { name: "Spokes", value: "Titanium Bladed Spokes" },
        { name: "Tire", value: "Maxxis Dissector 29X2.40 Foldable, TLR, EXO [F]Maxxis Rekon 27.5x2.4 Foldable, TLR, EXO+ [R]" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "SRAM AXS Rocker Paddle, wireless electronic shifting" },
        { name: "Rear Derailleur", value: "SRAM XO1 Eagle AXS" },
        { name: "Crank", value: "Praxis Carbon e-crank arms (S/M:160, L/XL:165) SRAM Eagle Transmission E-MTB Chainring , Steel 36T" },
        { name: "Bottom Bracket", value: "SRAM DUB BBFIT" },
        { name: "Cassette", value: "SRAM XG-1299, 10-52T, 12-speed" },
        { name: "Chain", value: "SRAM XX1 Eagle Powerlink" },
        { name: "Pedal", value: "Bontrager Line Pro pedals" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Giant Romero SL, Neutral" },
        { name: "Seat Post", value: "Fox Transfer Factory (S:125, M:150, L: 175, XL:200mm) Fox MMX Remote" },
        { name: "Brake Set", value: "SRAM Code RSC, 4-piston, hydraulic disc, 200mm[F], 180mm[R]" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Giant Trance X Advanced e+"
        price="₱800,000"
        description="The Giant Trance X Advanced E+ is a full-suspension carbon e-MTB with a SyncDrive Pro motor, high-capacity battery, and 140mm rear / 150mm front travel, delivering power, control, and smooth handling for aggressive trail riding."
        images={[mtb, img1, img2, img3, img4]}
        colors={["#303030", "#8c795b"]}
        sizes={["26", "27.5", "29"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default GiantTrance;
