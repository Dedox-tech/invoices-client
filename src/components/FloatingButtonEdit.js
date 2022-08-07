import React from "react";
import { Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate, useParams } from "react-router-dom";

export default function FloatingButtonEdit() {
    const navigate = useNavigate();
    const { id } = useParams();

    const handleClickEdit = () => {
        navigate(`/edit-invoice/${id}`);
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
