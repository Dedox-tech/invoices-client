import React from "react";
import {
    Card,
    CardContent,
    CardActions,
    Button,
    Typography,
    Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import InvoiceStatus from "./InvoiceStatus";

export default function InvoiceCard() {
    const navigate = useNavigate();
    const handleClickDetails = async () => {
        navigate("/details-invoices");
    };

    return (
        <Card variant="outlined">
            <CardContent>
                <Typography paragraph> Joseph Collins</Typography>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    spacing={2}
                >
                    <Typography variant="body1" color="initial">
                        Vence
                    </Typography>
                    <InvoiceStatus paidStatus="pagada" />
                </Stack>
                <Typography variant="body1" color="initial" sx={{ mb: 1 }}>
                    4/08/2022
                </Typography>
                <Typography variant="h6" color="initial">
                    $ 50.000
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant="text"
                    color="primary"
                    onClick={handleClickDetails}
                >
                    Ver detalles
                </Button>
                <Button variant="text" color="primary">
                    Eliminar
                </Button>
            </CardActions>
        </Card>
    );
}
