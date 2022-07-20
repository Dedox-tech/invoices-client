import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import NavBar from "./components/NavBar";


export default function App() {

    return (
        <Box>
            <NavBar />
            <main>
                <Outlet />
            </main>
        </Box>
    );
}
