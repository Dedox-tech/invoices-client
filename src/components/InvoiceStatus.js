import React from "react";
import { Typography, Stack } from "@mui/material";
import PropTypes from "prop-types";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

function InvoiceStatus({ isPaid }) {
    if (isPaid === "pagada") {
        return (
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
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
            justifyContent="center"
            spacing={0.25}
        >
            <WarningAmberIcon color="error" />
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
    isPaid: PropTypes.string.isRequired,
};

export default InvoiceStatus;
