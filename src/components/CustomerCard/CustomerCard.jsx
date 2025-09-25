import React, { use } from 'react';
import TicketCard from '../TicketCard/TicketCard';

const CustomerCard = ({ customerPromise }) => {
    const customerData = use(customerPromise);
    return (
        <div className='inter-font max-w-[1280px] mx-auto p-4 md:p-6'>
            <div className='grid grid-cols-1 md:grid-cols-3'>

                {/* left section */}
                <div className='col-span-2'>
                    <h1 className='font-semibold text-2xl text-[#34485A] mb-4'>Customer Tickets</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {
                            customerData.map(customer =>
                                <TicketCard customer={customer}></TicketCard>
                            )
                        }
                    </div>

                </div>

                {/* right section */}
                <div className='col-span-1 p-4'>

                    {/* task status */}
                    <div className='p-4 bg-white shadow-md rounded-[10px]'>
                        <h1 className='font-semibold text-2xl text-[#34485A] mb-4'>Task Status</h1>

                        <div className='bg-[#f5f5f5] border-1 border-gray-400 rounded-[10px] p-3 mt-3'>
                            <h1 className='font-bold mb-2'>Login Issue</h1>
                            <button className='btn border-none font-normal w-full bg-[#02A53B] text-white'>Complete</button>
                        </div>

                    </div>

                    {/* resolved task */}
                    <div className='p-4 bg-white shadow-md rounded-[10px] mt-4'>
                        <h1 className='font-semibold text-2xl text-[#34485A] mb-4'>Resolved Task</h1>

                        <div className='bg-green-50 border-1 border-gray-400 rounded-[10px] p-3 mt-3'>
                            <h1 className='font-bold mb-2'>Login Issue</h1>
                            <div className='flex justify-between items-center'>
                                <span className='text-[#099c02] font-medium '><i className="fa-solid fa-check"></i> Completed</span>
                                <button className='text-[14px] text-gray-600'>Click to remove</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default CustomerCard;