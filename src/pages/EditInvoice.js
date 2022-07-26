import React from "react";
import { Box } from "@mui/material";
import InvoiceEditText from "../components/InvoiceEditText";
import InvoiceEditTable from "../components/InvoiceEditTable";
import NavBar from "../components/NavBar";

export default function EditInvoice() {
    return (
        <Box>
            <NavBar />
            <InvoiceEditText />
            <InvoiceEditTable />
        </Box>
    );
}
