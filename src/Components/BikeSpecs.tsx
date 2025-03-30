import React from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";

type SpecCategory = {
  title: string;
  items: { name: string; value: string }[];
};

type BikeSpecsProps = {
  specs: SpecCategory[];
};

const BikeSpecs: React.FC<BikeSpecsProps> = ({ specs }) => {
  return (
    <Box mt={5} width="100%">
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={3}>
        SPECS
      </Typography>
      <TableContainer>
        <Table>
          <TableBody>
            {specs.map((category, index) => (
              <React.Fragment key={index}>
                {/* Category Header Row */}
                <TableRow sx={{ borderBottom: "2px solid black" }}>
                  <TableCell colSpan={2} sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                    {category.title}
                  </TableCell>
                </TableRow>

                {/* Spec Items */}
                {category.items.map((item, itemIndex) => (
                  <TableRow key={itemIndex} sx={{ borderBottom: "0.5px solid black" }}>
                    <TableCell sx={{ fontWeight: "bold",  borderRight: "0.5px solid #ddd"}}>{item.name}</TableCell>
                    <TableCell>{item.value}</TableCell>
                  </TableRow>
                ))}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default BikeSpecs;
