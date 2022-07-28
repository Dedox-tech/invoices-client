import React from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function FloatingButtonAdd() {
    return (
        <Fab
            color="primary"
            aria-label="add"
            sx={{
                position: "fixed",
                bottom: (theme) => theme.spacing(2),
                right: (theme) => theme.spacing(2),
            }}
        >
            <AddIcon />
        </Fab>
    );
}
