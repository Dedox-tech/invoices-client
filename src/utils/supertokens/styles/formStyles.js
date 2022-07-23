/* eslint-disable import/prefer-default-export */
/* Debido a que existen muchos elementos que requieren un pequeño número de estilos, 
se decidió agruparlos todos aquí */
export const containerStyles = {
    fontFamily: "Roboto",
    "@media (min-width: 600px)": {
        marginTop: "5rem",
    },
    boxShadow: "none",
};

export const headerStyles = {
    lineHeight: "1.235",
    fontWeight: "400",
    fontSize: "2.125rem",
    marginBottom: "10px",
};

export const dividerStyles = {
    display: "none",
};

export const inputWrapperStyles = {
    height: "3.2rem",
    border: "1px solid #c4c4c4",
    borderRadius: "4px",
};

export const passwordLinkStyles = {
    display: "none",
};

export const buttonStyles = {
    borderRadius: "4px",
};
