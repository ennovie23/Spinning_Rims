import { Box, Typography } from "@mui/material";
import Button from "./Button";
import { useState } from "react";

type AccDisplayBoxProps = {
    name?: string;
    price?: string;
    image1?: string;
    image2?: string;
};

const AccItemDisplayTemplate = ({ name, price, image1, image2 }: AccDisplayBoxProps) => {
    const [currentImage, setCurrentImage] = useState(image1); // State to track the displayed image

    return (
        <Box sx={{
            position: 'relative',
            width: 250,
            height: 319,
            backgroundColor: "white",
            padding: 2.5,
            paddingBottom: 3,
            borderRadius: 2,
            
            transition: 'box-shadow 0.3s ease-in-out', // Smooth transition
    '&:hover': {
      boxShadow: '0px 5px 20px  rgba(0, 0, 0, 0.3)', // Shadow effect
      
    },
        }}>
            <img 
                src={currentImage}  // FIX: Use currentImage instead of image1
                alt={name} 
                style={{ width: 209, height: 209, transition: 'opacity 0.3s ease-in-out' }} // Smooth transition effect
                onMouseEnter={() => image2 && setCurrentImage(image2)} // Change image on hover
                onMouseLeave={() => image1 && setCurrentImage(image1)} // Revert on hover out
            />

            <Typography sx={{
                fontFamily: '"Alexandria", sans-serif',
                fontSize: 16,
                fontWeight: "bold"
            }}>
                {name}
            </Typography>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Typography sx={{
                    position: "absolute",
                    top: 277,
                    fontFamily: '"Alexandria", sans-serif',
                    fontSize: 16,
                }}>
                    {price}
                </Typography>

                <Box sx={{
                    position: 'absolute',
                    display: 'flex',
                    left: 173,
                    top: 267
                }}>
                    <Button text="View" size="small" />
                </Box>
            </Box>
        </Box>
    );
}

export default AccItemDisplayTemplate;
