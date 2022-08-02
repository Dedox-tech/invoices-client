/* eslint-disable no-console */
import React from "react";
import { Container, Typography, Box, Skeleton } from "@mui/material";
import { useParams } from "react-router-dom";
import { grey } from "@mui/material/colors";
import InvoiceStatus from "./InvoiceStatus";
import useGetSpecificInvoice from "../utils/data-fetching/useGetSpecificInvoice";
import CustomErrorMessage from "./CustomErrorMessage";

export default function InvoiceEditText() {
    const { id } = useParams();
    const { data, error, isLoading, isFetching } = useGetSpecificInvoice(id);

    if (error) {
        return <CustomErrorMessage message={error.message} />;
    }

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
                {isLoading || isFetching ? (
                    <Skeleton />
                ) : (
                    `${data.invoice.zipCodeFrom}, ${data.invoice.addressFrom}, ${data.invoice.cityFrom}`
                )}
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
                {isLoading || isFetching ? (
                    <Skeleton />
                ) : (
                    data.invoice.countryFrom
                )}
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
                {isLoading || isFetching ? (
                    <Skeleton />
                ) : (
                    data.invoice.customerName
                )}
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
                {isLoading || isFetching ? (
                    <Skeleton />
                ) : (
                    data.invoice.customerEmail
                )}
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
                {isLoading || isFetching ? (
                    <Skeleton />
                ) : (
                    `${data.invoice.customerZipCode}, ${data.invoice.customerAddress}, ${data.invoice.customerCity}`
                )}
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
                {isLoading || isFetching ? (
                    <Skeleton />
                ) : (
                    data.invoice.customerCountry
                )}
            </Typography>
            <Typography variant="body1" color={grey[500]} sx={{ mb: 0.25 }}>
                Estado
            </Typography>
            <Box sx={{ mb: 3 }}>
                {isLoading || isFetching ? (
                    <Skeleton width={45} height={25} />
                ) : (
                    <InvoiceStatus paidStatus={data.invoice.invoiceStatus} />
                )}
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
                {isLoading || isFetching ? (
                    <Skeleton />
                ) : (
                    data.invoice.description
                )}
            </Typography>
        </Container>
    );
}
