import React from "react";
import { Routes, Route } from "react-router-dom";
import * as reactRouterDom from "react-router-dom";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Invoices from "./pages/Invoices";
import Home from "./pages/Home";

export default function App() {
    return (
        <Routes>
            {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
            <Route path="/" element={<Home />} />
            <Route
                path="/invoices"
                element={
                    <EmailPassword.EmailPasswordAuth>
                        <Invoices />
                    </EmailPassword.EmailPasswordAuth>
                }
            />
            <Route
                path="*"
                element={
                    <EmailPassword.EmailPasswordAuth>
                        <Invoices />
                    </EmailPassword.EmailPasswordAuth>
                }
            />
        </Routes>
    );
}
