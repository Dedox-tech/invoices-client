import React from "react";
import { Routes, Route } from "react-router-dom";
import * as reactRouterDom from "react-router-dom";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Home from "./pages/Home";
import Invoices from "./pages/Invoices";
import InvoiceDetails from "./pages/InvoiceDetails";
import AddInvoice from "./pages/AddInvoice";
import EditInvoice from "./pages/EditInvoice";

export default function App() {
    return (
        <Routes>
            {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route
                path="/invoices"
                element={
                    <EmailPassword.EmailPasswordAuth>
                        <Invoices />
                    </EmailPassword.EmailPasswordAuth>
                }
            />
            <Route
                path="/details-invoices"
                element={
                    <EmailPassword.EmailPasswordAuth>
                        <InvoiceDetails />
                    </EmailPassword.EmailPasswordAuth>
                }
            />
            <Route
                path="/add-invoice"
                element={
                    <EmailPassword.EmailPasswordAuth>
                        <AddInvoice />
                    </EmailPassword.EmailPasswordAuth>
                }
            />
            <Route
                path="/edit-invoice"
                element={
                    <EmailPassword.EmailPasswordAuth>
                        <EditInvoice />
                    </EmailPassword.EmailPasswordAuth>
                }
            />
            <Route
                path="*"
                element={
                    <EmailPassword.EmailPasswordAuth>
                        <AddInvoice />
                    </EmailPassword.EmailPasswordAuth>
                }
            />
        </Routes>
    );
}
