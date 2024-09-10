import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import ErrorElement from "./components/layouts/ErrorElement";
import Service from "./pages/Service";
import Service_Details from "./pages/Service_Details";
import RouteProtector from "./components/utils/RouteProtector";
import Booking from "./pages/Booking";
import AdminLayout from "./components/layouts/AdminLayout";
import RouteProtectorAdmin from "./components/utils/RouteProtectorAdmin";
import UserManagement from "./pages/Admin/UserManagement";
import SlotManagement from "./pages/Admin/SlotManagement";
import ServiceManagement from "./pages/Admin/ServiceManagement";
import BookingManagement from "./pages/Admin/BookingManagement";
import Dashboard from "./pages/Admin/Dashboard";
import UDashboard from "./pages/User/Dashboard";
import Review from "./pages/Review";

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
                path: 'dashboard',
                element: <UDashboard />
            },
            {
                path: 'service',
                element: <RouteProtector><Service /></RouteProtector>
            },
            {
                path: 'service/:id',
                element: <Service_Details />
            },
            {
                path: 'review',
                element: <Review />
            },
            {
                path: 'booking/:id',
                element: <Booking />
            }
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
    },
    {
        path: '/admin',
        errorElement: <ErrorElement />,
        element: <RouteProtectorAdmin><AdminLayout /></RouteProtectorAdmin>,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'user',
                element: <UserManagement />
            },
            {
                path: 'slot',
                element: <SlotManagement />
            },
            {
                path: 'service',
                element: <ServiceManagement />
            },
            {
                path: 'booking',
                element: <BookingManagement />
            }
        ]
    }
]);

export default DomRoutes;