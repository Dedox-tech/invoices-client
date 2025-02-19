/* eslint-disable no-console */
import React from "react";
import {
    AppBar,
    Avatar,
    Box,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography,
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as LinkDom, useNavigate } from "react-router-dom";
import { useSessionContext } from "supertokens-auth-react/recipe/session";
import { signOut } from "supertokens-auth-react/recipe/emailpassword";
import useGetUserInfo from "../utils/data-fetching/useGetUserInfo";

export default function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const session = useSessionContext();
    const { doesSessionExist } = session;

    const { data } = useGetUserInfo();

    const navigate = useNavigate();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogOut = async () => {
        handleCloseUserMenu();
        handleCloseNavMenu();
        await signOut();
        navigate("/");
    };

    const handleSignIn = () => {
        handleCloseUserMenu();
        handleCloseNavMenu();
        navigate("/auth");
    };

    return (
        <AppBar position="static" variant="outlined" elevation={0}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AssignmentIcon
                        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/home"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        Facturas
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    <LinkDom
                                        to="/invoices"
                                        style={{
                                            color: "black",
                                            textDecoration: "none",
                                        }}
                                    >
                                        Dashboard
                                    </LinkDom>
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    <LinkDom
                                        to="/add-invoice"
                                        style={{
                                            color: "black",
                                            textDecoration: "none",
                                        }}
                                    >
                                        Añadir
                                    </LinkDom>
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <AssignmentIcon
                        sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/home"
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        Facturas
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        <Typography
                            sx={{ color: "white", display: "block", mr: 2 }}
                        >
                            <LinkDom
                                to="/invoices"
                                style={{
                                    color: "white",
                                    textDecoration: "none",
                                }}
                            >
                                Dashboard
                            </LinkDom>
                        </Typography>
                        <Typography sx={{ color: "white", display: "block" }}>
                            <LinkDom
                                to="/add-invoice"
                                style={{
                                    color: "white",
                                    textDecoration: "none",
                                }}
                            >
                                Añadir
                            </LinkDom>
                        </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}
                            >
                                {doesSessionExist && data ? (
                                    <Avatar>
                                        {data.userCompleteInfo[0].nombre.charAt(
                                            0
                                        )}
                                    </Avatar>
                                ) : (
                                    <Avatar>G</Avatar>
                                )}
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {doesSessionExist ? (
                                <MenuItem onClick={handleLogOut}>
                                    <Typography textAlign="center">
                                        Cerrar sesión
                                    </Typography>
                                </MenuItem>
                            ) : (
                                <MenuItem onClick={handleSignIn}>
                                    <Typography textAlign="center">
                                        Iniciar sesión
                                    </Typography>
                                </MenuItem>
                            )}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
