/* eslint-disable no-console */
import React, { useEffect } from "react";
import { Box } from "@mui/material";
import InvoiceList from "../components/InvoiceList";
import NavBar from "../components/NavBar";
import FloatingButtonAdd from "../components/FloatingButtonAdd";
// En esta página ira la vista de la lista de facturas
// Por ahora, se coloca el componentente de ejemplo para mostrar la redirección del login
export default function Invoices() {
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:5000");
            const data = await response.json();
            console.log(data);
        };
        fetchData();
    });

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:5000/users/current");
            const data = await response.json();
            console.log(data);
        };
        fetchData();
    });

    return (
        <Box>
            <NavBar />
            <InvoiceList />
            <FloatingButtonAdd />
        </Box>
    );
}
