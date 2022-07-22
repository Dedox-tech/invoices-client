import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";

export default function CustomAppBar() {
    return (
        <AppBar
            position="static"
            color="transparent"
            elevation={1}
            variant="outlined"
        >
            <Toolbar>
                <IconButton edge="start" aria-label="menu">
                    <RequestQuoteIcon />
                </IconButton>
                <Typography variant="h6"> App de facturas </Typography>
            </Toolbar>
        </AppBar>
    );
}
