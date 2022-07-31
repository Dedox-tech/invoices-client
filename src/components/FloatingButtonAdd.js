import React from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export default function FloatingButtonAdd() {
    const navigate = useNavigate();

    const handleClickAdd = () => {
        navigate("/add-invoice");
    };

    return (
        <Fab
            color="primary"
            aria-label="add"
            sx={{
                position: "fixed",
                bottom: (theme) => theme.spacing(2),
                right: (theme) => theme.spacing(2),
            }}
            onClick={handleClickAdd}
        >
            <AddIcon />
        </Fab>
    );
}
