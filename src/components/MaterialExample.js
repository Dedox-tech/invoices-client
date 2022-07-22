import React from "react";
import { Box, Container, Typography } from "@mui/material";
import CustomCard from "./CustomCard";
import CustomAppBar from "./CustomAppBar";
import CustomForm from "./CustomForm";

export default function MaterialExample() {
    return (
        <Box>
            <CustomAppBar />
            <Container maxWidth="sm" sx={{ mt: 5, px: 5, mb: 10 }}>
                <Typography variant="h3" color="initial" align="center">
                    Ejemplos
                </Typography>
                <Typography
                    variant="h5"
                    color="initial"
                    align="left"
                    sx={{ mt: 5 }}
                >
                    Formulario
                </Typography>
                <CustomForm />
                <Typography
                    variant="h5"
                    color="initial"
                    align="left"
                    sx={{ mt: 5 }}
                >
                    Cartas
                </Typography>
                <Box>
                    <CustomCard />
                    <CustomCard />
                    <CustomCard />
                    <CustomCard />
                </Box>
            </Container>
        </Box>
    );
}
