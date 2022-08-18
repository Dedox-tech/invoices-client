import { Box } from "@mui/material";
import React from "react";
import ContactInfo from "../components/ContactInfo";
import NavBar from "../components/NavBar";

export default function Contact() {
    return (
        <Box>
            <NavBar />
            <div>
                <ContactInfo />
            </div>
        </Box>
    );
}
