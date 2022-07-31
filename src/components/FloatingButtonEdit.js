import React from "react";
import { Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export default function FloatingButtonEdit() {
    const navigate = useNavigate();

    const handleClickEdit = () => {
        navigate("/edit-invoice");
    };

    return (
        <Fab
            color="primary"
            aria-label="edit"
            sx={{
                position: "fixed",
                bottom: (theme) => theme.spacing(2),
                right: (theme) => theme.spacing(2),
            }}
            onClick={handleClickEdit}
        >
            <EditIcon />
        </Fab>
    );
}
