import React from 'react';
import { LiaHandsHelpingSolid } from 'react-icons/lia';
import { FaBusinessTime, FaCalendarCheck, FaClipboardList, FaRegCalendarCheck, FaRegCreditCard, FaRegUser, FaRoute } from 'react-icons/fa6';
import { FaBoxes, FaUserCircle, FaUserCog } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { Link, NavLink, Outlet } from 'react-router';
import useRole from '../hooks/useRole';
import { CiShoppingTag } from 'react-icons/ci';
import logo from '../assets/logo.png'
import { MdAddBox, MdAddShoppingCart, MdAssignment, MdEditNote, MdInventory, MdInventory2, MdListAlt, MdLocalShipping, MdManageAccounts, MdOutlineSpaceDashboard, MdOutlineTrackChanges, MdPlaylistAdd, MdSettings } from 'react-icons/md';
import { TbClockQuestion, TbLayoutGrid, TbTruckDelivery } from "react-icons/tb";
import { HiMiniPencilSquare } from 'react-icons/hi2';
import { FiCheckSquare } from 'react-icons/fi';


const DashboardLayout = () => {

    const { role } = useRole();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Navbar */}
                <nav className="navbar w-full bg-base-300">
                    <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        {/* Sidebar toggle icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                    </label>
                    <div className="px-4">GTracker Dashboard</div>
                </nav>
                {/* Page content here */}
                <Outlet></Outlet>
            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                    {/* Sidebar content here */}
                    <ul className="menu w-full grow">
                        {/* List item */}
                        <li>
                            <Link to='/' className="is-drawer-close:tooltip is-drawer-close:tooltip-right  text-lg mb-2" data-tip="GTracker">
                                {/* Home icon */}
                                <img className='w-6' src={logo} alt="" />
                                <span className="is-drawer-close:hidden">GTracker</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/dashboard' className="is-drawer-close:tooltip is-drawer-close:tooltip-right  text-lg mb-2" data-tip="Dashboard">
                                {/* Home icon */}
                                <MdOutlineSpaceDashboard className='text-2xl' />
                                <span className="is-drawer-close:hidden">Dashboard</span>
                            </Link>
                        </li>

                        {/* Our dashboard links  */}



                        {
                            role === 'user' && <>

                                <li>
                                    <NavLink to="/dashboard/my-order" className="is-drawer-close:tooltip is-drawer-close:tooltip-right  text-lg mb-2" data-tip="My Order">
                                        {/* <LiaHandsHelpingSolid className='text-2xl'></LiaHandsHelpingSolid> */}
                                        <BsCartPlus className='text-2xl' />
                                        <span className="is-drawer-close:hidden">My Order</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/payment-history" className="is-drawer-close:tooltip is-drawer-close:tooltip-right  text-lg mb-2" data-tip="Payment History">
                                        <FaRegCreditCard className='text-2xl'></FaRegCreditCard>
                                        <span className="is-drawer-close:hidden">Payment History</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/dashboard/track-order" className="is-drawer-close:tooltip is-drawer-close:tooltip-right  text-lg mb-2" data-tip="Track Order">
                                        <MdOutlineTrackChanges className='text-2xl'></MdOutlineTrackChanges>
                                        <span className="is-drawer-close:hidden">Track Order</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/dashboard/user-profile" className="is-drawer-close:tooltip is-drawer-close:tooltip-right  text-lg mb-2" data-tip="My Profile">
                                        <FaUserCircle className='text-2xl' />
                                        <span className="is-drawer-close:hidden">My Profile</span>
                                    </NavLink>
                                </li>
                            </>
                        }

                        {/* Manager only Links  */}
                        {
                            role === 'manager' && <>
                                <li>
                                    <NavLink to="/dashboard/add-product" className="is-drawer-close:tooltip is-drawer-close:tooltip-right  text-lg mb-2" data-tip="Add Product">
                                        <MdAddShoppingCart className='text-2xl'></MdAddShoppingCart>
                                        <span className="is-drawer-close:hidden">Add Product</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manage-products" className="is-drawer-close:tooltip is-drawer-close:tooltip-right  text-lg mb-2" data-tip="Manage Products">
                                        <HiMiniPencilSquare className='text-2xl' />
                                        <span className="is-drawer-close:hidden">Manage Products</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/pending-orders" className="is-drawer-close:tooltip is-drawer-close:tooltip-right  text-lg mb-2" data-tip="Pending Orders">
                                        <TbClockQuestion className='text-2xl' />
                                        <span className="is-drawer-close:hidden">Pending Orders</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/approved-orders" className="is-drawer-close:tooltip is-drawer-close:tooltip-right  text-lg mb-2" data-tip="Approved Orders">
                                        <FiCheckSquare className='text-2xl' />
                                        <span className="is-drawer-close:hidden">Approved Orders</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/profile" className="is-drawer-close:tooltip is-drawer-close:tooltip-right  text-lg mb-2" data-tip="My Profile">
                                        <FaUserCircle className='text-2xl' />
                                        <span className="is-drawer-close:hidden">My Profile</span>
                                    </NavLink>
                                </li>
                            </>
                        }

                        {/* Admin only Links  */}
                        {
                            role === 'admin' && <>
                                <li>
                                    <NavLink to="/dashboard/manage-users" className="is-drawer-close:tooltip is-drawer-close:tooltip-right  text-lg mb-2" data-tip="Manage Users">
                                        <FaUserCog className='text-2xl' />
                                        <span className="is-drawer-close:hidden">Manage Users</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/all-products" className="is-drawer-close:tooltip is-drawer-close:tooltip-right  text-lg mb-2" data-tip="All Products">
                                        {/* <CiShoppingTag></CiShoppingTag> */}
                                        <TbLayoutGrid className='text-2xl'></TbLayoutGrid>
                                        <span className="is-drawer-close:hidden">All Products</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/all-orders" className="is-drawer-close:tooltip is-drawer-close:tooltip-right  text-lg mb-2" data-tip="All Orders">
                                        <MdListAlt className='text-2xl'></MdListAlt>
                                        <span className="is-drawer-close:hidden">All Orders</span>
                                    </NavLink>
                                </li>
                            </>
                        }

                        {/* List item */}
                        <li>
                            <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right  text-lg mb-2" data-tip="Settings">
                                {/* Settings icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
                                <span className="is-drawer-close:hidden">Settings</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;