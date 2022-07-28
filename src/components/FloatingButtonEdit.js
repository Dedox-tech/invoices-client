import React from "react";
import { Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function FloatingButtonEdit() {
    return (
        <Fab
            color="primary"
            aria-label="edit"
            sx={{
                position: "fixed",
                bottom: (theme) => theme.spacing(2),
                right: (theme) => theme.spacing(2),
            }}
        >
            <EditIcon />
        </Fab>
    );
}
