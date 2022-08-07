import React from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

function SpacingBox({ isStart }) {
    if (isStart) {
        return <Box sx={{ mt: 7 }} />;
    }
    return <Box sx={{ mb: 12 }} />;
}

SpacingBox.propTypes = {
    isStart: PropTypes.bool.isRequired,
};

export default SpacingBox;
