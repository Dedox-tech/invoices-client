import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { signOut } from "supertokens-auth-react/recipe/emailpassword";
import { useNavigate } from "react-router-dom";
import CustomCard from "./CustomCard";
import CustomAppBar from "./CustomAppBar";
import CustomForm from "./CustomForm";

export default function MaterialExample() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut();
        navigate("/auth");
    };

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
                <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    sx={{ mt: 5 }}
                    onClick={handleLogout}
                >
                    Logout
                </Button>
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
