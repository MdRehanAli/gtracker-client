import React from 'react';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';
import Loading from '../components/Loading/Loading';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const AdminRoute = ({children}) => {
    const { loading } = useAuth();
    const { role, roleLoading } = useRole();

    if (loading || roleLoading) {
        return <Loading></Loading>
    }

    if (role !== 'admin') {
        return <ErrorPage></ErrorPage>
    }

    return children
};

export default AdminRoute;