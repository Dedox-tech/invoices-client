import React from "react";
import { Container, Grid } from "@mui/material";
import InvoiceCard from "./InvoiceCard";

export default function InvoiceList() {
    return (
        <Container maxWidth="lg" sx={{ mt: 7 }}>
            <Grid
                container
                spacing={5}
                direction="row"
                justifyContent="center"
                alignItems="center"
                alignContent="center"
            >
                <Grid item lg={2.95} md={3.8} sm={5.6} xs={10}>
                    <InvoiceCard />
                </Grid>
                <Grid item lg={2.95} md={3.8} sm={5.6} xs={10}>
                    <InvoiceCard />
                </Grid>
                <Grid item lg={2.95} md={3.8} sm={5.6} xs={10}>
                    <InvoiceCard />
                </Grid>
                <Grid item lg={2.95} md={3.8} sm={5.6} xs={10}>
                    <InvoiceCard />
                </Grid>
                <Grid item lg={2.95} md={3.8} sm={5.6} xs={10}>
                    <InvoiceCard />
                </Grid>
                <Grid item lg={2.95} md={3.8} sm={5.6} xs={10}>
                    <InvoiceCard />
                </Grid>
                <Grid item lg={2.95} md={3.8} sm={5.6} xs={10}>
                    <InvoiceCard />
                </Grid>
                <Grid item lg={2.95} md={3.8} sm={5.6} xs={10}>
                    <InvoiceCard />
                </Grid>
            </Grid>
        </Container>
    );
}
