import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardActions,
    Button,
    Typography,
    Stack,
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import InvoiceStatus from "./InvoiceStatus";

export default function InvoiceCard() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleDeleteInvoice = () => {
        setIsOpen(false);
    };

    const handleClickDetails = async () => {
        navigate("/details-invoices");
    };

    return (
        <Box>
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
                        <InvoiceStatus paidStatus="Pagada" />
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
                    <Button variant="text" color="primary" onClick={handleOpen}>
                        Eliminar
                    </Button>
                </CardActions>
            </Card>
            <Dialog open={isOpen} onClose={handleClose}>
                <DialogTitle>¿Desea eliminar su factura?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Esta acción no se puede deshacer. Si está completamente
                        seguro, presione eliminar
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleDeleteInvoice} color="primary">
                        Eliminar
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
