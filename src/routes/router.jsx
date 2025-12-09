import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Auth/Register/Register";
import Login from "../pages/Auth/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Loading from "../components/Loading/Loading";

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        hydrateFallbackElement: <Loading></Loading>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/*',
                Component: ErrorPage
            },
        ]
    }
]);

export default router;