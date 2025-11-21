import React from 'react';
import logo from '../../assets/Other/logo.png'
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to='/'>
        <div className='flex items-end cursor-pointer'>
            <img src={logo} alt="ZapShift" />
            <h3 className="text-3xl font-bold -ms-2.5">ZapShift</h3>
        </div>
        </Link>
    );
};

export default Logo;