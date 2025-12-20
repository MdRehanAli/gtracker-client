import React from 'react';
import useRole from '../../hooks/useRole';
import Loading from '../../components/Loading/Loading';
import AdminDashboardHome from './AdminDashboardHome';
import ManagerDashboardHome from './ManagerDashboardHome';
import UserDashboardHome from './UserDashboardHome';

const DashboardHome = () => {
    const {role, roleLoading} = useRole();
    if(roleLoading){
        return <Loading></Loading>
    }
    if(role === 'admin'){
        return <AdminDashboardHome></AdminDashboardHome>
    }
    else if(role === 'manager'){
        return <ManagerDashboardHome></ManagerDashboardHome>
    }
    else{
        return <UserDashboardHome></UserDashboardHome>
    }
};

export default DashboardHome;