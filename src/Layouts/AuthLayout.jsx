import React from 'react';
import Logo from '../Components/Logo/Logo';
import { Outlet } from 'react-router';
import authImage from '../assets/Other/authImage.png'

const AuthLayout = () => {
    return (
        <div className='bg-gray-100'> 
            <Logo></Logo>
            <div className='flex justify-center items-center min-h-screen mx-38'>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                <div className='flex-1'>
                    <img src={authImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;