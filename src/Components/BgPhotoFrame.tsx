import { Box } from "@mui/material";

interface BgPhotoFrameProps {
  image: string;
}

export default function BgPhotoFrame({ image }: BgPhotoFrameProps) {
  return (
    <Box
      sx={{
        width: 1440,
        height: 780,
        backgroundImage: `url(${image})`,
        backgroundSize: "cover", // Crops or expands the image
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}
