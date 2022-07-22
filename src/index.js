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
import colorPalette from "./utils/supertokens/styles/colorPalette";
import containerStyles from "./utils/supertokens/styles/containerStyles";
import generalConfiguration from "./utils/supertokens/configurations/generalConfiguration";
import headerStyles from "./utils/supertokens/styles/headerStyles";
import {
    dividerStyles,
    inputWrapperStyles,
    passwordLinkStyles,
} from "./utils/supertokens/styles/otherStyles";
import signUpFormFields from "./utils/supertokens/configurations/signUpFormFields";
import translationsEs from "./utils/supertokens/configurations/translationsEs";

SuperTokens.init({
    languageTranslations: {
        translations: translationsEs,
    },
    appInfo: generalConfiguration,
    recipeList: [
        EmailPassword.init({
            palette: colorPalette,
            style: {
                container: containerStyles,
                headerTitle: headerStyles,
                divider: dividerStyles,
                inputWrapper: inputWrapperStyles,
                forgotPasswordLink: passwordLinkStyles,
            },
            signInAndUpFeature: {
                signUpForm: {
                    formFields: signUpFormFields,
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
