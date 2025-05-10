import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Button } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ArrowL from "./Images/ArrowL.png";
import ArrowR from "./Images/ArrowR.png";

type AccessoriesDetailsPageProps = {
  name: string;
  price: string;
  description: string;
  images: string[];
  specs: { name: string; value: string }[];
  colors: string[];
};

const AccessoriesDetailsPage = ({
  name,
  price,
  description,
  images,
  specs,
  colors,

}: AccessoriesDetailsPageProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);


  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleColor = (color: string) => {
    setSelectedColor((prev) => (prev === color ? null : color));
  };



  return (
    <Box display="flex" alignItems="flex-start" justifyContent="center" gap={4} p={0} paddingTop={20}>
      {/* Left: Carousel */}
      <Box position="relative" width="50%" height="600px" display="flex" flexDirection="column">
        <Box width="100%" height="600px" display="flex" alignItems="center" justifyContent="center" overflow="hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={images[currentImage]}
              src={images[currentImage]}
              alt="Accessory"
              style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </Box>

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

        {/* Thumbnails */}
        <Box display="flex" justifyContent="center" mt={2} gap={1}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Thumbnail"
              style={{
                width: "90px",
                height: "80px",
                objectFit: "cover",
                border: index === currentImage ? "2px solid black" : "2px solid transparent",
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Right: Info */}
      <Box width="50%">
        <Box display="inline-block" bgcolor="lightgray" p={1} borderRadius="5px" mb={2}>
          <Typography fontWeight="bold">SALE</Typography>
        </Box>

        <Typography variant="h4" fontWeight="bold">{name}</Typography>
        <Typography variant="h5" fontWeight="bold">{price}</Typography>
        <Box
          sx={{
            height: "1px",
            backgroundColor: "black",
            width: "100%",
            my: 2,
          }}
        />
        <Typography variant="body1" mt={2}>{description}</Typography>

        {/* Color Selector */}
        <Typography variant="h6" mt={3} fontWeight="bold">Color:</Typography>
        <Box display="flex" gap={2} marginTop={2}>
          {colors.map((color, index) => (
            <Box
              key={index}
              width={{ xs: "40px", sm: "50px" }}
              height={{ xs: "40px", sm: "50px" }}
              borderRadius="50%"
              bgcolor={color}
              onClick={() => toggleColor(color)}
              sx={{
                cursor: "pointer",
                border: selectedColor === color ? "3px solid black" : "3px solid transparent",
                transition: "border 0.2s ease-in-out",
              }}
            />
          ))}
        </Box>


        {/* Specs Table */}
        <Box mt={5} width="100%">
          <Typography variant="h4" fontWeight="bold" mb={1}>SPECS</Typography>
          <TableContainer>
            <Table>
              <TableBody>
                {specs.map((spec, index) => (
                  <TableRow key={index} sx={{ borderBottom: "1px solid black", borderTop: "1px solid black", borderLeft: "0px solid black" }}>
                    <TableCell sx={{ fontWeight: "bold", borderRight: "0.5px solid #ddd", py: "0.5", px: "1" }}>{spec.name}</TableCell>
                    <TableCell sx={{ textAlign: "left", py: "0.5", px: "1" }}>{spec.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <motion.button
          whileHover={{ backgroundColor: "#fff", color: "#000", scale: 1.05 }}
          transition={{ duration: 0.3 }}
          style={{
            marginTop: "20px",
            padding: "5px 126px",
            fontSize: "30px",
            fontWeight: "bold",
            backgroundColor: "#000",
            color: "#fff",
            border: "2px solid #000",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Buy Now
        </motion.button>
      </Box>
    </Box>
  );
};

export default AccessoriesDetailsPage;
