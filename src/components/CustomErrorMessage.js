import React from "react";
import { Container, Typography } from "@mui/material";
import PropTypes from "prop-types";

function CustomErrorMessage({ message }) {
    return (
        <Container maxWidth="lg" sx={{ mt: 7, mb: 10 }}>
            <Typography variant="h5" color="initial" align="center">
                {message}
            </Typography>
        </Container>
    );
}

CustomErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
};

export default CustomErrorMessage;
