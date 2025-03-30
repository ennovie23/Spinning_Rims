import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import BikeSpecs from "./BikeSpecs";
import ArrowL from "./Images/ArrowL.png";
import ArrowR from "./Images/ArrowR.png";

type SpecCategory = {
  title: string;
  items: { name: string; value: string }[];
};

type BikeDetailsProps = {
  name: string;
  price: string;
  description: string;
  images: string[];
  colors: string[];
  sizes: string[];
  specs: SpecCategory[];
};

const BikeDetailsPage: React.FC<BikeDetailsProps> = ({ name, price, description, images, colors, sizes, specs }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Box p={5} display="flex" flexDirection="column" alignItems="center" mt={15}>
      {/* Image Carousel and Details */}
      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={4} width="100%" maxWidth="1200px">
        {/* Left: Image Carousel */}
        <Box position="relative" width={{ xs: "100%", md: "50%" }} height="400px" display="flex" flexDirection="column">
          <Box width="100%" height="300px" display="flex" alignItems="center" justifyContent="center" overflow="hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={images[currentImage]}
                src={images[currentImage]}
                alt="Bike"
                style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </Box>

          {/* Navigation Arrows */}
          <img
            src={ArrowL}
            alt="Previous"
            onClick={prevImage}
            style={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              width: 40,
            }}
          />
          <img
            src={ArrowR}
            alt="Next"
            onClick={nextImage}
            style={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              width: 40,
            }}
          />

          {/* Image Thumbnails */}
          <Box display="flex" justifyContent="center" mt={2} gap={1}>
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Thumbnail"
                onClick={() => setCurrentImage(index)}
                style={{
                  width: "90px",
                  height: "80px",
                  objectFit: "fill",
                  border: index === currentImage ? "2px solid black" : "2px solid transparent",
                  cursor: "pointer",
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Right: Bike Details */}
        <Box width={{ xs: "100%", md: "50%" }}>
          {/* Sale Tag */}
          <Box display="inline-block" bgcolor="lightgray" p={1} borderRadius="5px" mb={2}>
            <Typography fontWeight="bold">SALE</Typography>
          </Box>

          <Typography variant="h4" fontWeight="bold">
            {name}
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            {price}
          </Typography>
          <Typography variant="body1" mt={2}>
            {description}
          </Typography>

          {/* Color Options */}
          <Typography variant="h6" mt={3} fontWeight="bold">
            Color:
          </Typography>
          <Box display="flex" gap={2}>
            {colors.map((color, index) => (
              <Box
                key={index}
                width={50}
                height={50}
                borderRadius="50%"
                bgcolor={color}
                onClick={() => setSelectedColor(color)}
                sx={{
                  cursor: "pointer",
                  border: selectedColor === color ? "3px solid black" : "3px solid transparent",
                  transition: "border 0.2s ease-in-out",
                }}
              />
            ))}
          </Box>

          {/* Sizes */}
          <Typography variant="h6" mt={3} fontWeight="bold">
            Size:
          </Typography>
          <Box display="flex" gap={2}>
            {sizes.map((size, index) => (
              <Button
                key={index}
                variant="contained"
                sx={{
                  backgroundColor: "#D3D3D3",
                  color: "black",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#B0B0B0",
                  },
                }}
              >
                {size}
              </Button>
            ))}
          </Box>

          {/* Buy Button with Animation */}
          <motion.button
            whileHover={{ backgroundColor: "#fff", color: "#000", scale: 1.05 }}
            transition={{ duration: 0.3 }}
            style={{
              marginTop: "20px",
              padding: "10px 75px",
              fontSize: "18px",
              fontWeight: "bold",
              backgroundColor: "#000",
              color: "#fff",
              border: "2px solid #000",
              cursor: "pointer",
            }}
          >
            Buy Now
          </motion.button>
        </Box>
      </Box>

      {/* Specifications Section - Now Below the Description */}
      <Box mt={5} width="100%" maxWidth="1200px">
        <BikeSpecs specs={specs} />
      </Box>
    </Box>
  );
};

export default BikeDetailsPage;
