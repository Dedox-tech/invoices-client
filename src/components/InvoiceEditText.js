/* eslint-disable no-console */
import React, { useEffect } from "react";
import { Container, Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { grey } from "@mui/material/colors";
import InvoiceStatus from "./InvoiceStatus";
import useGetSpecificInvoice from "../utils/data-fetching/useGetSpecificInvoice";

export default function InvoiceEditText() {
    const { id } = useParams();
    const { data, error, isLoading, isFetching, isError } =
        useGetSpecificInvoice(id);

    useEffect(() => {
        console.log("The data is:", data);
        console.log("The isLoading: ", isLoading);
        console.log("The isFetching:", isFetching);
        console.log("The error is: ", error);
        console.log("The isError is: ", isError);
        console.log("The id is: ", id);
    });

    return (
        <Container maxWidth="sm" sx={{ mt: 7, mb: 12, px: 5 }}>
            <Typography variant="subtitle1" color={grey[500]} sx={{ mb: 0.25 }}>
                Dirección de emisión
            </Typography>
            <Typography
                variant="body1"
                color="initial"
                paragraph
                sx={{ mb: 3 }}
            >
                15786 Golfview Dr Blvd, Riverview, Michigan(MI)
            </Typography>
            <Typography variant="subtitle1" color={grey[500]} sx={{ mb: 0.25 }}>
                País de emisión
            </Typography>
            <Typography
                variant="body1"
                color="initial"
                paragraph
                sx={{ mb: 3 }}
            >
                USA
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
                15786 Golfview Dr Blvd, Riverview, Michigan(MI)
            </Typography>
            <Typography variant="subtitle1" color={grey[500]} sx={{ mb: 0.25 }}>
                País de envío
            </Typography>
            <Typography
                variant="body1"
                color="initial"
                paragraph
                sx={{ mb: 3 }}
            >
                USA
            </Typography>
            <Typography variant="body1" color={grey[500]} sx={{ mb: 0.25 }}>
                Estado
            </Typography>
            <Box sx={{ mb: 3 }}>
                <InvoiceStatus paidStatus="Pendiente" />
            </Box>
            <Typography variant="body1" color={grey[500]} sx={{ mb: 0.25 }}>
                Descripción
            </Typography>
            <Typography
                variant="body1"
                color="initial"
                paragraph
                sx={{ mb: 3 }}
                lineHeight="1.75"
            >
                Esta factura se causó por la prestación de servicios de diseño
                gráfico. Se cobran el diseño del banner y las campañas de email
                marketing.
            </Typography>
        </Container>
    );
}
