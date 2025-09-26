import React from 'react';
import { toast } from 'react-toastify';

const TicketCard = ({ customer, setAvailableProgress, availableProgress, selectedTask, setSelectedTask }) => {

    const handleTicket = (customerData) => {
        toast.success("In Progress!");
        setAvailableProgress(availableProgress + 1);
        setSelectedTask([...selectedTask, customerData]);
    }
    return (


        <div onClick={() => { handleTicket(customer) }} className='bg-white p-4 rounded-[4px] col-span-1 shadow-md space-y-2'>
            <div className='flex items-center justify-between'>
                <h3>{customer.title}</h3>
                <button className={`px-2 py-1 rounded-[400px] font-medium text-xs ${customer.status === "Open" ? "bg-[#B9F8CF]" : customer.status === "In Progress" ? "bg-[#F8F3B9]" : "bg-black"}`}>
                    <span className={`${customer.status === "Open" ? "text-[#0B5E06]" : customer.status === "In Progress" ? "text-[#9C7700]" : "text-white"}`}>
                        <span className={`${customer.status === "Open" ? "text-[#02A53B] mr-1" : customer.status === "In Progress" ? "text-[#FEBB0C] mr-1" : "text-white mr-1"}`}><i className="fa-solid fa-circle"></i></span>
                        {customer.status}</span>
                </button>
            </div>
            <h1 className='text-[#627382]'>{customer.description}</h1>

            <div className='flex justify-between'>
                <div className='flex'>
                    <h3 className='text-[#627382] text-[14px] font-medium'>{customer.id}</h3>
                    <h3 className={`text-[#F83044] text-[14px] font-medium ml-2
                    ${customer.priority === "HIGH PRIORITY" ? "text-[#F83044]" : customer.priority === "MEDIUM PRIORITY" ? "text-[#FEBB0C]" : customer.priority === "LOW PRIORITY" ? "text-[#02A53B]" : "text-blue-800"}
                        `}>
                        {customer.priority}
                    </h3>
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