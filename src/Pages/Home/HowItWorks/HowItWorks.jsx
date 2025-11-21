import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';

const HowItWorks = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <h2 className='text-3xl font-bold my-6'>How It Works</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div className='bg-white p-5 space-y-3 rounded-2xl'>
                    <span><TbTruckDelivery size={50} /></span>
                    <h2 className='text-xl font-bold'>Booking Pick & Drop</h2>
                    <p>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='bg-white p-5 space-y-3 rounded-2xl'>
                    <span><TbTruckDelivery size={50} /></span>
                    <h2 className='text-xl font-bold'>Cash On Delivery</h2>
                    <p>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='bg-white p-5 space-y-3 rounded-2xl'>
                    <span><TbTruckDelivery size={50} /></span>
                    <h2 className='text-xl font-bold'>Delivery Hub</h2>
                    <p>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='bg-white p-5 space-y-3 rounded-2xl'>
                    <span><TbTruckDelivery size={50} /></span>
                    <h2 className='text-xl font-bold'>Booking SME & Corporate</h2>
                    <p>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;