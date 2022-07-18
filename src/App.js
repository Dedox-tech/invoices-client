import React from "react";
import Typography from "@mui/material/Typography";
import {
    Box,
    AppBar,
    Toolbar,
    IconButton,
    Container,
    TextField,
    Button,
} from "@mui/material";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import CustomCard from "./components/CustomCard";

export default function App() {
    return (
        <Box>
            <AppBar
                position="static"
                color="transparent"
                elevation={1}
                variant="outlined"
            >
                <Toolbar>
                    <IconButton edge="start" aria-label="menu">
                        <RequestQuoteIcon />
                    </IconButton>
                    <Typography variant="h6"> App de facturas </Typography>
                </Toolbar>
            </AppBar>
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
                <Box sx={{ mt: 1 }}>
                    <TextField
                        id="Nombre"
                        label="Nombre"
                        sx={{ mt: 3 }}
                        fullWidth
                    />
                    <TextField
                        id="Contraseña"
                        label="Contraseña"
                        sx={{ mt: 3 }}
                        fullWidth
                    />
                    <TextField
                        id="Confirmar contraseña"
                        label="Confirmar contraseña"
                        sx={{ mt: 3 }}
                        fullWidth
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 5 }}
                    >
                        Botón primario
                    </Button>
                </Box>
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
