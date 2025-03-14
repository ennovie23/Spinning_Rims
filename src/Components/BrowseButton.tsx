import { Box, Typography } from "@mui/material";

function BrowseButton() {
    return (
        <Box sx={{
            display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
        }}>
            <Box 
            sx={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                height: 34,
                width: 98,
                backgroundColor: "#292929",  
                cursor: "pointer",
                borderRadius: "4px",
                "&:hover": { backgroundColor: "#3d3d3d" },
            }}
        >
            <Typography 
                sx={{
                    color: "white",
                    fontSize: 12,
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: "re",
                }}
            >
                BROWSE
            </Typography>
        </Box>
        </Box>
        
    );
}

export default BrowseButton;
