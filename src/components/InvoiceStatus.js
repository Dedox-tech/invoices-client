import React from "react";
import { Typography, Stack } from "@mui/material";
import PropTypes from "prop-types";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

function InvoiceStatus({ paidStatus }) {
    if (paidStatus === "pagada") {
        return (
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="left"
                spacing={0.25}
            >
                <CheckCircleOutlineIcon color="success" />
                <Typography
                    variant="body1"
                    color="success.main"
                    sx={{ fontWeight: 500 }}
                >
                    Pagada
                </Typography>
            </Stack>
        );
    }
    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="left"
            spacing={0.3}
        >
            <ErrorOutlineIcon color="error" />
            <Typography
                variant="body1"
                color="error.main"
                sx={{ fontWeight: 500 }}
            >
                Pendiente
            </Typography>
        </Stack>
    );
}

InvoiceStatus.propTypes = {
    paidStatus: PropTypes.string.isRequired,
};

export default InvoiceStatus;
