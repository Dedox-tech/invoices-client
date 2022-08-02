import React from "react";
import { Typography, Stack } from "@mui/material";
import PropTypes from "prop-types";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

function InvoiceStatus({ paidStatus }) {
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
};

export default InvoiceStatus;
