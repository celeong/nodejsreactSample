import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ROUTES from "../routes/routes";
import Logout from "../features/logout/Logout";
import logoImg from '../logo.svg';


const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#400CCC",
        paddingRight: "80px",
        paddingLeft: "100px",
        "@media (max-width: 900px)": {
            paddingLeft: 0,
        }
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        textAlign: "left",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
}));

const headersData = [
    {
        label: "Appointments",
        href: "/appointments",
    },
    {
        label: "My Account",
        href: "/account",
    },
    {
        label: "Log Out",
        href: "/logout",
    },
    ];

export const Header = () => {
    const { header, logo, toolbar, menuButton } = useStyles();

    /**
     * Render a nested hierarchy of route configs with unknown depth/breadth
     */
    function displayRouteMenu(routes) {
        /**
         * Render a single route as a list item link to the config's pathname
         */
        function singleRoute(route) {
            return (
                <Button 
                    {...{
                    key: route.key,
                    color: "inherit",
                    to: route.path,
                    component: Link,
                    className: menuButton
                    }}
                >
                    {route.key}
                </Button>
            );
        }

        // loop through the array of routes and generate an unordered list
        return (
            routes.map(route => {
                // if this route has sub-routes, then show the ROOT as a list item and recursively render a nested list of route links
                if (route.key === 'ROOT')
                {
                    return;
                }

                // if (route.routes) {
                //     return (
                //         <React.Fragment key={route.key}>
                //         {singleRoute(route)}
                //         {displayRouteMenu(route.routes)}
                //         </React.Fragment>
                //     );
                // }

                // no nested routes, so just render a single route
                return singleRoute(route);
            })
        );
    };

    return (
        <header>
            <AppBar className={header}>
                <Toolbar className={toolbar}>
                    <Typography variant="h6" component="h1" className={logo}>
                        <img src={logoImg} className="App-logo" alt="logo" />
                        React With NodeJS
                    </Typography>
                    
                    <div>
                        {displayRouteMenu(ROUTES)}

                        <Logout />
                    </div>
                </Toolbar>
            </AppBar>
        </header>
    );
};
