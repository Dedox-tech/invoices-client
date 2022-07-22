import React from "react";
import { Routes, Route } from "react-router-dom";
import * as reactRouterDom from "react-router-dom";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import MaterialExample from "./components/MaterialExample";

export default function App() {
    return (
        <Routes>
            {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
            <Route
                path="/"
                element={
                    <EmailPassword.EmailPasswordAuth>
                        <MaterialExample />
                    </EmailPassword.EmailPasswordAuth>
                }
            />
            <Route
                path="*"
                element={
                    <EmailPassword.EmailPasswordAuth>
                        <MaterialExample />
                    </EmailPassword.EmailPasswordAuth>
                }
            />
        </Routes>
    );
}
