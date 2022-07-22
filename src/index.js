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
        websiteDomain: "http://localhost:3000",
        apiBasePath: "/api-auth",
        websiteBasePath: "/auth",
    },
    recipeList: [
        EmailPassword.init({
            palette: {
                background: "#FFFFFF",
                primary: "#1976d2",
                inputBackground: "#FFFFFF",
                error: "#d32f2f",
                success: "#2e7d32",
                textTitle: "#000000",
                textLabel: "#666666",
                textInput: "#212121",
                textLink: "#0072e5",
                buttonText: "#FFFFFF",
                superTokensBrandingBackground: "#FFFFFF",
                superTokensBrandingText: "#00000099",
            },
            style: {
                container: {
                    fontFamily: "Roboto",
                    "@media (min-width: 600px)": {
                        marginTop: "5rem",
                    },
                    boxShadow: "none",
                },
                headerTitle: {
                    lineHeight: "1.235",
                    fontWeight: "400",
                    fontSize: "2.125rem",
                    marginBottom: "10px",
                },
                divider: {
                    display: "none",
                },
                inputWrapper: {
                    height: "3.2rem",
                },
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
