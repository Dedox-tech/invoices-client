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
    Skeleton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import InvoiceStatus from "./InvoiceStatus";

function InvoiceCard({ isLoading, isFetching, name, date, status, amount }) {
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
                    <Typography paragraph>
                        {isLoading || isFetching ? <Skeleton /> : name}
                    </Typography>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-start"
                        spacing={2}
                    >
                        {isLoading || isFetching ? (
                            <Skeleton width={45} height={25} />
                        ) : (
                            <>
                                <Typography variant="body1" color="initial">
                                    Vence
                                </Typography>
                                <InvoiceStatus
                                    paidStatus={status}
                                    isDone={!(isLoading || isFetching)}
                                />
                            </>
                        )}
                    </Stack>
                    <Typography variant="body1" color="initial" sx={{ mb: 1 }}>
                        {isLoading || isFetching ? (
                            <Skeleton />
                        ) : (
                            new Date(Number(date)).toLocaleDateString("es", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                            })
                        )}
                    </Typography>
                    <Typography variant="h6" color="initial">
                        {isLoading || isFetching ? <Skeleton /> : `$ ${amount}`}
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

InvoiceCard.propTypes = {
    isLoading: PropTypes.bool,
    isFetching: PropTypes.bool,
    name: PropTypes.string,
    date: PropTypes.string,
    status: PropTypes.string,
    amount: PropTypes.number,
    // id: PropTypes.string,
};

InvoiceCard.defaultProps = {
    isLoading: false,
    isFetching: false,
    name: "No encontrado",
    date: "No encontrado",
    status: "No encontrado",
    amount: 0,
    // id: "No encontrado",
};

export default InvoiceCard;
