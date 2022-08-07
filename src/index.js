import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { CssBaseline } from "@mui/material";
import App from "./App";
import generalConfiguration from "./utils/supertokens/configurations/generalConfiguration";
import reportWebVitals from "./reportWebVitals";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

SuperTokens.init(generalConfiguration);
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <SuperTokensWrapper>
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <CssBaseline />
                    <App />
                </QueryClientProvider>
            </BrowserRouter>
        </SuperTokensWrapper>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
