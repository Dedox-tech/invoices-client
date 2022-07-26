import React from "react";
import { Routes, Route } from "react-router-dom";
import * as reactRouterDom from "react-router-dom";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
// import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Home from "./pages/Home";
import Invoices from "./pages/Invoices";
import EditInvoice from "./pages/EditInvoice";

export default function App() {
    return (
        <Routes>
            {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/edit-invoice" element={<EditInvoice />} />
            <Route path="*" element={<Invoices />} />
        </Routes>
    );
}
