import React from "react";
import {
    Button,
    makeStyles
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
    },
}));

export default function Logout() {
    const { menuButton } = useStyles();

    const history = useHistory();

    // "log in" a user
    function handleLogout() {
        localStorage.removeItem("user");
        history.push("/");
    }

    return (
        <Button 
            {...{
            key: "LOGOUT",
            color: "inherit",
            component: Link,
            className: menuButton
            }}
            onClick={() => { handleLogout(); }}
        >
            Log Out
        </Button>
    );
};
