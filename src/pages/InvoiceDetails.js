import React from "react";
import { Box } from "@mui/material";
import InvoiceEditText from "../components/InvoiceEditText";
import FloatingButtonEdit from "../components/FloatingButtonEdit";
import NavBar from "../components/NavBar";

export default function InvoiceDetails() {
    return (
        <Box>
            <NavBar />
            <InvoiceEditText />
            <FloatingButtonEdit />
        </Box>
    );
}
