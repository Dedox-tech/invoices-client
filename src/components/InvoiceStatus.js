import React from "react";
import { Typography, Stack, Skeleton } from "@mui/material";
import PropTypes from "prop-types";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

function InvoiceStatus({ paidStatus, isDone }) {
    if (!isDone) {
        return (
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="left"
                spacing={0.25}
            >
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    <Skeleton />
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
            {paidStatus === "Pagada" ? (
                <CheckCircleOutlineIcon color="success" />
            ) : (
                <ErrorOutlineIcon color="error" />
            )}
            <Typography
                variant="body1"
                color={paidStatus === "Pagada" ? "success.main" : "error"}
                sx={{ fontWeight: 500 }}
            >
                {paidStatus}
            </Typography>
        </Stack>
    );
}

InvoiceStatus.propTypes = {
    paidStatus: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
};

export default InvoiceStatus;
