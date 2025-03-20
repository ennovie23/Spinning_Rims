import { Box, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";

function Dropdown(){
    const [selected, setSelected] = useState("FEATURED");
    return(
        <Box sx={{
            paddingTop: 3,
            paddingBottom: 3,
        }}>
           <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: "center",
            alignItems: "center"
           }}>

            <Typography sx={{
                fontSize: 12,
                fontWeight: 'bold',
                fontFamily: '"Inter", sans-serif',
                marginRight: 3,
            }}>
                SORT
            </Typography>

            <Select value={selected} 
                onChange={(e) => setSelected(e.target.value)}
                displayEmpty
                sx={{
                    bgcolor: "white",
                    color: "black",
                    // fontWeight: "bold",
                    fontFamily: '"Inter", sans-serif',
                    fontSize: 12,
                    border: "1px solid gray",
                    borderRadius: "0px",
                    width: 220,
                    height: 35
                }}
            >
            <MenuItem value="FEATURED">FEATURED</MenuItem>
                <MenuItem value="ROAD BIKES">ROAD BIKES</MenuItem>
                <MenuItem value="MT. BIKES">MT. BIKES</MenuItem>
                <MenuItem value="GRAVEL BIKES">GRAVEL BIKES</MenuItem>
                <MenuItem value="ELECTRIC BIKES">ELECTRIC BIKES</MenuItem>
                <MenuItem value="FULL SUSPENSION BIKES">FULL SUSPENSION BIKES</MenuItem>
            </Select>

           </Box>

        </Box>
    );
    
}

export default Dropdown;