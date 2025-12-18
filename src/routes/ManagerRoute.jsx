import React from 'react';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';
import Loading from '../components/Loading/Loading';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const ManagerRoute = ({ children }) => {
    const { loading, user } = useAuth();
    const { role, roleLoading } = useRole();

    if (loading || !user || roleLoading) {
        return <Loading></Loading>
    }

    if (role !== 'manager') {
        return <ErrorPage></ErrorPage>
    }

    return children
};

export default ManagerRoute;