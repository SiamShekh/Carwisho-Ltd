import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import ErrorElement from "./components/layouts/ErrorElement";
import Service from "./pages/Service";
import RouteProtector from "./components/utils/RouteProtector";

const DomRoutes = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorElement />,
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'service',
                element: <RouteProtector><Service /></RouteProtector>
            },
        ]
    },
    {
        path: '/auth',
        errorElement: <ErrorElement />,
        element: <RouteProtector><AuthLayout /></RouteProtector>,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'registration',
                element: <Registration />
            },
        ]
    }
]);

export default DomRoutes;