import React from 'react';

const TicketCard = ({ customer }) => {
    // const ticketData = use(customer)
    // console.log(ticketData)
    const handleTicket = (title) => {
        console.log(title)
    }
    return (


        <div onClick={() => { handleTicket(customer.title) }} className='bg-white p-4 rounded-[4px] col-span-1 shadow-md space-y-2'>
            <div className='flex items-center justify-between'>
                <h3>{customer.title}</h3>
                <button className='bg-[#B9F8CF] px-2 py-1 rounded-[400px] font-medium text-xs'><span className='text-[#02A53B]'><i className="fa-solid fa-circle"></i></span><span className='text-[#0B5E06] ml-1'>{customer.status}</span></button>
            </div>
            <h1 className='text-[#627382]'>{customer.description}</h1>

            <div className='flex justify-between'>
                <div className='flex'>
                    <h3 className='text-[#627382] text-[14px] font-medium'>{customer.id}</h3>
                    <h3 className='text-[#F83044] text-[14px] font-medium ml-2'>{customer.priority}</h3>
                </div>
                <div className='flex'>
                    <h3 className='text-[#627382] text-[14px] mr-2'>{customer.customer}</h3>
                    <span className='text-[#627382] text-[14px]'>
                        <span><i className="fa-regular fa-calendar"></i></span><span className='ml-1'>{customer.createdAt}</span>
                    </span>
                </div>
            </div>
        </div>


    );
};

export default TicketCard;