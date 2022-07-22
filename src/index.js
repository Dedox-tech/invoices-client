import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import Session from "supertokens-auth-react/recipe/session";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

SuperTokens.init({
    appInfo: {
        appName: "invoices-app",
        apiDomain: "http://localhost:5000",
        websiteDomain: "https://invoice-app-top-gun-lab.netlify.app",
        apiBasePath: "/api-auth",
        websiteBasePath: "/auth",
    },
    recipeList: [
        EmailPassword.init({
            palette: {
                background: "#FFFFFF",
                primary: "#4976d2",
            },
        }),
        Session.init(),
    ],
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <SuperTokensWrapper>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </SuperTokensWrapper>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
