import React from "react";
import { Box } from "@mui/material";
import NavBar from "../components/NavBar";
import MaterialForm from "../components/MaterialForm";

export default function EditInvoice() {
    return (
        <Box>
            <NavBar />
            <MaterialForm isAddInvoiceForm={false} />
        </Box>
    );
}
