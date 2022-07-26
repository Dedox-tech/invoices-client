import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import InvoiceStatus from "./InvoiceStatus";

export default function InvoiceEditText() {
    return (
        <Container maxWidth="sm" sx={{ mt: 5, mb: 5, px: 5 }}>
            <Typography variant="subtitle1" color={grey[500]} sx={{ mb: 0.25 }}>
                Categoria
            </Typography>
            <Typography
                variant="body1"
                color="initial"
                paragraph
                sx={{ mb: 3 }}
            >
                Diseño gráfico
            </Typography>
            <Typography variant="subtitle1" color={grey[500]} sx={{ mb: 0.25 }}>
                Dirección de emisión
            </Typography>
            <Typography
                variant="body1"
                color="initial"
                paragraph
                sx={{ mb: 3 }}
            >
                15786 Golfview Dr Blvd, Riverview, Michigan(MI), USA
            </Typography>
            <Typography variant="subtitle1" color={grey[500]} sx={{ mb: 0.25 }}>
                Fecha de emisión
            </Typography>
            <Typography
                variant="body1"
                color="initial"
                paragraph
                sx={{ mb: 3 }}
            >
                21/08/2022
            </Typography>
            <Typography variant="subtitle1" color={grey[500]} sx={{ mb: 0.25 }}>
                Fecha de vencimiento
            </Typography>
            <Typography
                variant="body1"
                color="initial"
                paragraph
                sx={{ mb: 3 }}
            >
                4/12/2022
            </Typography>
            <Typography variant="subtitle1" color={grey[500]} sx={{ mb: 0.25 }}>
                Facturada a
            </Typography>
            <Typography
                variant="body1"
                color="initial"
                paragraph
                sx={{ mb: 3 }}
            >
                Juan Peréz Ortega
            </Typography>
            <Typography variant="subtitle1" color={grey[500]} sx={{ mb: 0.25 }}>
                Enviada a
            </Typography>
            <Typography
                variant="body1"
                color="initial"
                paragraph
                sx={{ mb: 3 }}
            >
                hola@example.com
            </Typography>
            <Typography variant="subtitle1" color={grey[500]} sx={{ mb: 0.25 }}>
                Dirección de envio
            </Typography>
            <Typography
                variant="body1"
                color="initial"
                paragraph
                sx={{ mb: 3 }}
            >
                15786 Golfview Dr Blvd, Riverview, Michigan(MI), USA
            </Typography>
            <Typography variant="body1" color={grey[500]} sx={{ mb: 0.25 }}>
                Estado
            </Typography>
            <Box sx={{ mb: 3 }}>
                <InvoiceStatus paidStatus="pendiente" />
            </Box>
        </Container>
    );
}
