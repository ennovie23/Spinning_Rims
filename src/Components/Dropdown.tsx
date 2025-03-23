import { Box, MenuItem, Select, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Dropdown() {
    const navigate = useNavigate();
    const location = useLocation();
    
    // Map URLs to dropdown values
    const routes: Record<string, string> = {
        "/MainBikePage": "FEATURED",
        "/EbPage": "ELECTRIC BIKES",
        "/RbPage": "ROAD BIKES",
        "/MtbPage": "MT. BIKES",
        "/GbPage": "GRAVEL BIKES",
        "/FsbPage": "FULL SUSPENSION BIKES"
    };

    // Initialize state based on the current URL
    const [selected, setSelected] = useState(routes[location.pathname] || "FEATURED");

    // Sync state with URL when navigating
    useEffect(() => {
        setSelected(routes[location.pathname] || "FEATURED");
    }, [location.pathname]);

    const handleChange = (event: any) => {
        const value = event.target.value;
        setSelected(value); // Update UI state
        navigate(Object.keys(routes).find(key => routes[key] === value) || "/");
    };

    return (
        <Box sx={{ paddingTop: 3, paddingBottom: 3 }}>
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

                <Select 
                    value={selected} // Controlled by state
                    onChange={handleChange} 
                    displayEmpty
                    sx={{
                        bgcolor: "white",
                        color: "black",
                        fontFamily: '"Inter", sans-serif',
                        fontSize: 12,
                        border: "1px solid gray",
                        borderRadius: "0px",
                        width: 220,
                        height: 35
                    }}
                >
                    {Object.values(routes).map((label) => (
                        <MenuItem key={label} value={label}>{label}</MenuItem>
                    ))}
                </Select>
            </Box>
        </Box>
    );
}

export default Dropdown;
