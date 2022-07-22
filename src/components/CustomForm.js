import React from "react";
import { Box, TextField, Button } from "@mui/material";

export default function CustomForm() {
    return (
        <Box sx={{ mt: 1 }}>
            <TextField id="Nombre" label="Nombre" sx={{ mt: 3 }} fullWidth />
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
    );
}
