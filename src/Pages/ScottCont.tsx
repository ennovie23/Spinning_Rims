import { Box } from "@mui/material";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BikeDetailsPage from "../Components/BikeDetailsPage";

import mtb from "../Components/Images/bike/ScottContimg0.png";
import img1 from "../Components/Images/bike/ScottContimg1.png";
import img2 from "../Components/Images/bike/ScottContimg2.png";
import img3 from "../Components/Images/bike/ScottContimg3.png";
import img4 from "../Components/Images/bike/ScottContimg4.png";

function ScottCont() {
  const specs = [
    {
      title: "Frameset",
      items: [
        { name: "Frame", value: "Carbon HMF Integrated Suspension Technology Virtual 4 Link kinematic / Adjustable head angle Syncros Cable Integration System TQ HPR50 / UDH Interface / 12x148mm with 55mm Chainline Range Extender Ready" },
        { name: "Fork", value: "FOX 36 Float Rhythm Air Grip 3 modes / 15x110mm QR axle / tapered steerer 44mm offset / Reb. Adj. / Lockout / 160mm travel" },
        { name: "Rear Shock", value: "FOX Float Custom EVOL Performace Trunnion 3 modes / Lockout-Trail-Descend DPS / Reb. Adj. Travel 155mm / T185X55mm" },
      ],
    },
    {
        title: "E-System",
        items: [
          { name: "Battery", value: "TQ Internal 360Wh" },
          { name: "Charger", value: "TQ 100-240V-4A" },
          { name: "Computer", value: "TQ HPR Bluetooth / ANT+ / Dedicated Smartphone app" },
          { name: "Motor", value: "TQ HPR50 Mid Motor drive 50Nm max Torque / EU: 25kmh / US: 20mph" },
        ],
      },
    {
      title: "Wheels",
      items: [
        { name: "Hub Front", value: "Formula CL-148M / 12x148mm" },
        { name: "Hub Rear", value: "Formula CL-148M / 12x148mm" },
        { name: "Rims", value: "Syncros X-30S / 32H / 30mm / Sleeve Joint Tubeless ready" },
        { name: "Spokes", value: "Stainless Black 15G / 1.8mm" },
        { name: "Tire", value: "Maxxis Dissector / 2.6 / 60TPI Foldable Tubeless Ready / EXO 3C maxx Terra" },
      ],
    },
    {
      title: "Drivetrain",
      items: [
        { name: "Shifter", value: "Shimano Deore SL-M6100-IR / Rapidfire Plus I-spec EV clamp" },
        { name: "Rear Derailleur", value: "Shimano XT RD-M8100 SGS Shadow Plus / 12 Speed" },
        { name: "Crank", value: "FSA Alloy crankset / 175mm / 34T" },
        { name: "Bottom Bracket", value: "FSA BB Tapered" },
        { name: "Cassette", value: "Shimano CS-M6100 / 10-51T" },
        { name: "Chain", value: "Shimano CN-M6100" },
        { name: "Pedal", value: "Burgtec MK4 Composite pedal" },
      ],
    },
    {
      title: "Component",
      items: [
        { name: "Saddle", value: "Syncros Tofino 1.5 Regular Titanium rails" },
        { name: "Seat Post", value: "Syncros Duncan Dropper Post 1.5S / Travel Adjust / 31.6mm S size 140mm / M size 180mm / L size 210mm" },
        { name: "Brake Set", value: "Shimano Deore M6120 4 Piston Disc, Shimano SM-RT64 CL / F&R 203mm" },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BikeDetailsPage
        name="Scott Contessa eRide"
        price="₱350,000"
        description="The Scott Contessa eRide is a women’s-specific e-bike with a lightweight frame, Bosch or TQ motor (varies by model), and a high-capacity battery, offering smooth pedal assist, comfort, and control for trail or urban riding."
        images={[mtb, img1, img2, img3, img4]}
        colors={["#831dff", "#dadada"]}
        sizes={["26", "27.5", "29"]}
        specs={specs}
      />
      <Footer />
    </Box>
  );
}

export default ScottCont;
