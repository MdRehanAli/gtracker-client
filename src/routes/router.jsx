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
import DashboardLayout from "../layouts/DashboardLayout";
import MyOrder from "../pages/Dashboard/MyOrder/MyOrder";
import AuthLayout from "../layouts/AuthLayout";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../pages/Dashboard/Payment/PaymentSuccess";
import PaymentCancelled from "../pages/Dashboard/Payment/PaymentCancelled";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import AdminRoute from "./AdminRoute";
import AllProducts from "../pages/Dashboard/AllProducts/AllProducts";
import AllOrders from "../pages/Dashboard/AllOrders/AllOrders";
import PendingOrders from "../pages/Dashboard/PendingOrders/PendingOrders";
import ApprovedOrders from "../pages/Dashboard/ApprovedOrders/ApprovedOrders";
import ManagerRoute from "./ManagerRoute";
import DashboardHome from "../pages/DashboardHome/DashboardHome";
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";
import ManageProducts from "../pages/Dashboard/ManageProducts/ManageProducts";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import TrackOrder from "../pages/Dashboard/TrackOrder/TrackOrder";
import UpdateProduct from "../pages/Dashboard/UpdateProduct/UpdateProduct";
import OrderDetails from "../pages/Dashboard/OrderDetails/OrderDetails";
import ViewOrder from "../pages/Dashboard/ViewOrder/ViewOrder";
import TermsAndConditions from "../pages/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        hydrateFallbackElement: <Loading></Loading>,
        children: [
            {
                index: true,
                loader: () => fetch('https://gtracker-server.vercel.app/products'),
                Component: Home
            },
            {
                path: '/all-products',
                loader: () => fetch('https://gtracker-server.vercel.app/all-products'),
                Component: AllProduct,
            },
            {
                path: '/products-details/:id',
                loader: ({ params }) => fetch(`https://gtracker-server.vercel.app/all-products/${params.id}`),
                element: <ProductDetails></ProductDetails>
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
                loader: ({ params }) => fetch(`https://gtracker-server.vercel.app/all-products/${params.id}`),
                element: <PrivateRoute><Order></Order></PrivateRoute>
            },
            {
                path: '/terms',
                Component: TermsAndConditions
            },
            {
                path: '/policy',
                Component: PrivacyPolicy
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
    },
    // {
    //     path: '/',
    //     Component: AuthLayout,
    //     hydrateFallbackElement: <Loading></Loading>,
    //     children: [
    //         {
    //             path: '/login',
    //             Component: Login
    //         },
    //         {
    //             path: '/register',
    //             Component: Register
    //         },
    //     ]
    // },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        hydrateFallbackElement: <Loading></Loading>,
        children: [
            {
                index: true,
                Component: DashboardHome
            },
            {
                path: 'my-order',
                Component: MyOrder,
            },
            {
                path: 'view-order/:id',
                loader: ({ params }) => fetch(`https://gtracker-server.vercel.app/order/${params.id}`),
                element: <ViewOrder></ViewOrder>
            },
            {
                path: 'track-order',
                Component: TrackOrder
            },
            {
                path: 'user-profile',
                Component: MyProfile
            },
            {
                path: 'payment/:orderId',
                Component: Payment,
            },
            {
                path: 'payment-history',
                Component: PaymentHistory,
            },
            {
                path: 'payment-success',
                Component: PaymentSuccess,
            },
            {
                path: 'payment-cancelled',
                Component: PaymentCancelled,
            },

            // Manager Routes 
            {
                path: 'add-product',
                element: <ManagerRoute><AddProduct></AddProduct></ManagerRoute>
            },
            {
                path: 'manage-products',
                element: <ManagerRoute><ManageProducts></ManageProducts></ManagerRoute>
            },
            {
                path: 'update-product/:id',
                loader: ({ params }) => fetch(`https://gtracker-server.vercel.app/all-products/${params.id}`),
                element: <ManagerRoute><UpdateProduct></UpdateProduct></ManagerRoute>
            },
            // },
            {
                path: 'pending-orders',
                element: <ManagerRoute><PendingOrders></PendingOrders></ManagerRoute>
            },
            {
                path: 'order-details/:id',
                loader: ({ params }) => fetch(`https://gtracker-server.vercel.app/order/${params.id}`),
                element: <PrivateRoute><OrderDetails></OrderDetails></PrivateRoute>
            },
            {
                path: 'approved-orders',
                element: <ManagerRoute><ApprovedOrders></ApprovedOrders></ManagerRoute>
            },
            {
                path: 'profile',
                element: <ManagerRoute><MyProfile></MyProfile></ManagerRoute>
            },

            // Admin Routes 
            {
                path: 'manage-users',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: 'all-products',
                loader: () => fetch('https://gtracker-server.vercel.app/all-products'),
                element: <AdminRoute><AllProducts></AllProducts></AdminRoute>
            },
            {
                path: 'all-orders',
                element: <AdminRoute><AllOrders></AllOrders></AdminRoute>
            },

        ]

    }
]);

export default router;