import React from "react";
import { Box } from "@mui/material";
import InvoiceEditText from "../components/InvoiceEditText";
import NavBar from "../components/NavBar";

export default function EditInvoice() {
    return (
        <Box>
            <NavBar />
            <InvoiceEditText />
        </Box>
    );
}
