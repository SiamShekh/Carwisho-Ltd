import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";

const DomRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
        ]
    },
    {
        path: '/login',
        element: <Login />
    }
]);

export default DomRoutes;