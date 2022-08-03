import React from "react";
import { Container, Grid } from "@mui/material";
import InvoiceCard from "./InvoiceCard";
import useGetInvoices from "../utils/data-fetching/useGetInvoices";
import CustomErrorMessage from "./CustomErrorMessage";

export default function InvoiceList() {
    const { data, error, isLoading, isFetching } = useGetInvoices();

    if (error) {
        return <CustomErrorMessage message={error.message} />;
    }

    if (isLoading) {
        const numberOfCards = 8;
        const cardsToRender = [];

        for (let i = 0; i < numberOfCards; i += 1) {
            cardsToRender.push(
                <Grid item lg={2.95} md={3.8} sm={5.6} xs={10} key={i}>
                    <InvoiceCard isLoading />
                </Grid>
            );
        }

        return (
            <Container maxWidth="lg" sx={{ mt: 7, mb: 10 }}>
                <Grid
                    container
                    spacing={5}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                >
                    {cardsToRender}
                </Grid>
            </Container>
        );
    }

    if (isFetching) {
        return (
            <Container maxWidth="lg" sx={{ mt: 7, mb: 10 }}>
                <Grid
                    container
                    spacing={5}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                >
                    {data.invoices.map((element) => (
                        <Grid
                            item
                            lg={2.95}
                            md={3.8}
                            sm={5.6}
                            xs={10}
                            key={element.id}
                        >
                            <InvoiceCard isFetching />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ mt: 7, mb: 10 }}>
            <Grid
                container
                spacing={5}
                direction="row"
                justifyContent="center"
                alignItems="center"
                alignContent="center"
            >
                {data.invoices.map((element) => (
                    <Grid
                        item
                        lg={2.95}
                        md={3.8}
                        sm={5.6}
                        xs={10}
                        key={element.id}
                    >
                        <InvoiceCard
                            name={element.customerName}
                            date={element.invoiceDate}
                            status={element.invoiceStatus}
                            amount={element.amountToPay}
                            id={element.id}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
