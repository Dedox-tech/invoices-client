/* eslint-disable no-console */
import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import MaterialForm from "../components/MaterialForm";
import useGetSpecificInvoice from "../utils/data-fetching/useGetSpecificInvoice";
import CustomErrorMessage from "../components/CustomErrorMessage";

export default function EditInvoice() {
    const { id } = useParams();
    const { data, error } = useGetSpecificInvoice(id);

    useEffect(() => {
        console.log("The id is: ", id);
        console.log("The data is: ", data);
        console.log("The error is: ", error);
    });

    if (error) {
        return (
            <Box>
                <NavBar />
                <CustomErrorMessage message={error.message} />
            </Box>
        );
    }

    if (data) {
        const transformedData = {
            ...data.invoice,
            invoiceDate: Date(data.invoice.invoiceDate),
        };

        const { _id, __v, updatedAt, userId, ...newData } = transformedData;

        return (
            <Box>
                <NavBar />
                <MaterialForm editInvoiceData={newData} currentId={id} />
            </Box>
        );
    }
}
