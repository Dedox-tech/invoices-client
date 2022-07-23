import Session from "supertokens-auth-react/recipe/session";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import colorPalette from "../styles/colorPalette";
import generalInfo from "./generalInfo";
import {
    containerStyles,
    headerStyles,
    dividerStyles,
    inputWrapperStyles,
    passwordLinkStyles,
    buttonStyles,
} from "../styles/formStyles";
import signUpFormFields from "./signUpFormFields";
import translationsEs from "./translationsEs";

const generalConfiguration = {
    languageTranslations: {
        translations: translationsEs,
    },
    appInfo: generalInfo,
    recipeList: [
        EmailPassword.init({
            palette: colorPalette,
            style: {
                container: containerStyles,
                headerTitle: headerStyles,
                divider: dividerStyles,
                inputWrapper: inputWrapperStyles,
                forgotPasswordLink: passwordLinkStyles,
                button: buttonStyles,
            },
            signInAndUpFeature: {
                signUpForm: {
                    formFields: signUpFormFields,
                },
            },
        }),
        Session.init(),
    ],
};

export default generalConfiguration;
