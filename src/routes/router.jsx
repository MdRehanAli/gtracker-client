import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Auth/Register/Register";
import Login from "../pages/Auth/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Loading from "../components/Loading/Loading";
import AllProduct from "../pages/AllProduct/AllProduct";
import AboutUs from "../pages/AboutUs/AboutUs";
import Contact from "../pages/Contact/Contact";

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
                path: '/all-product',
                Component: AllProduct,
            },
            {
                path: '/about-us',
                Component: AboutUs,
            },
            {
                path: '/contact',
                Component: Contact,
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