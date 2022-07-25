import React from "react";
import { Box } from "@mui/material";
import InvoiceList from "../components/InvoiceList";
import NavBar from "../components/NavBar";
import FloatingButtonAdd from "../components/FloatingButtonAdd";
// En esta página ira la vista de la lista de facturas
// Por ahora, se coloca el componentente de ejemplo para mostrar la redirección del login
export default function Invoices() {
    return (
        <Box>
            <NavBar />
            <InvoiceList />
            <FloatingButtonAdd />
        </Box>
    );
}
