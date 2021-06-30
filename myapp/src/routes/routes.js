import React from "react";
import { Route, Switch } from "react-router-dom"; // <-- New code
import Login from "../features/login/Login";
import { AccountPage } from "../features/account/AccountPage";
import { AppointmentList } from "../features/appointments/AppointmentList";
import { NewAppointment } from "../features/appointments/NewAppointment";
import { AppointmentDetail } from "../features/appointments/AppointmentDetail";

const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: Login },
  {
    path: "/appointment",
    key: "APPOINTMENT",
    component: RenderRoutes,
    routes: [
      {
        path: "/appointment",
        key: "APPOINTMENT_ROOT",
        exact: true,
        component: AppointmentList,
      },
      {
        path: "/appointment/page",
        key: "APPOINTMENT_PAGE",
        exact: true,
        component: () => <h1>Appointment Page</h1>,
      },
      {
        path: "/appointment/new",
        key: "APPOINTMENT_NEW",
        exact: true,
        component: NewAppointment,
      },
      {
        path: "/appointment/:id",
        key: "APPOINTMENT_ID",
        exact: true,
        component: (prop) => <AppointmentDetail appointment={prop.match.params.id} />,
      },
    ],
  },

  { path: "/account", key: "MY ACCOUNT", exact: true, component: () => <AccountPage /> },

];

export default ROUTES;


/**
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */
 function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
};

/**
 * Use this component for any new section of routes (any config object that has a "routes" property
 */
 export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
};
