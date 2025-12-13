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
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import PrivateRoute from "./PrivateRoute";
import Order from "../pages/Order/Order";

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        hydrateFallbackElement: <Loading></Loading>,
        children: [
            {
                index: true,
                loader: () => fetch('http://localhost:5000/products'),
                Component: Home
            },
            {
                path: '/all-products',
                loader: () => fetch('http://localhost:5000/all-products'),
                Component: AllProduct,
            },
            {
                path: '/products-details/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/all-products/${params.id}`),
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
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
                path: '/order/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/all-products/${params.id}`),
                element: <PrivateRoute><Order></Order></PrivateRoute>
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