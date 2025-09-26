import React, { use, useState } from 'react';
import TicketCard from '../TicketCard/TicketCard';
import TaskCard from '../TaskCard/TaskCard';
import ResolvedTask from '../ResolvedTask/ResolvedTask';

const CustomerCard = ({ customerPromise, setAvailableProgress, availableProgress, selectedTask, setSelectedTask, completeTask, resolvedTask, setResolvedTask, removeData }) => {
    const customerData = use(customerPromise);
    const [ticketData, setTicketData] = useState(customerData);

    const removeTicket = (cardData) => {
        const filterTicket = ticketData.filter(remove => remove.id !== cardData.id);
        setTicketData(filterTicket);
    }

    return (
        <div className='inter-font max-w-[1280px] mx-auto p-4 md:p-6'>
            <div className='grid grid-cols-1 md:grid-cols-3'>

                {/* left section */}
                <div className='col-span-2'>
                    <h1 className='font-semibold text-2xl text-[#34485A] mb-4'>Customer Tickets</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {
                            ticketData.map(customer =>
                                <TicketCard key={customer.id}  setSelectedTask={setSelectedTask} selectedTask={selectedTask} availableProgress={availableProgress} setAvailableProgress={setAvailableProgress} customer={customer}></TicketCard>
                            )
                        }
                    </div>

                </div>

                {/* right section */}
                <div className='col-span-1 p-4'>

                    {/* task status */}
                    <div className='p-4 bg-white shadow-md rounded-[10px]'>
                        <h1 className='font-semibold text-2xl text-[#34485A] mb-4'>Task Status</h1>

                        {
                            selectedTask.length === 0 ? (
                                <div className='p-5'>
                                    <h1 className='text-center text-[#627382]'>No tasks in progress</h1>
                                    <h1 className='text-center text-[#627382]'>Select a ticket to add to Task Status</h1>
                                </div>
                            ) :
                                (
                                    selectedTask.map(card => <TaskCard key={card.id} removeTicket={removeTicket} setResolvedTask={setResolvedTask} resolvedTask={resolvedTask} completeTask={completeTask} card={card}></TaskCard>)
                                )

                        }

                    </div>

                    {/* resolved task */}
                    <div className='p-4 bg-white shadow-md rounded-[10px] mt-4'>
                        <h1 className='font-semibold text-2xl text-[#34485A] mb-4'>Resolved Task</h1>

                        {
                            resolvedTask.length === 0 ? (
                                <div>
                                    <h1 className='text-center text-[#627382]'>No resolved tasks yet.</h1>
                                </div>
                            ) :
                                (
                                    resolvedTask.map(solve => <ResolvedTask key={solve.id} removeData={removeData} solve={solve}></ResolvedTask>)
                                )
                        }

                    </div>
                </div>
            </div>
        </div>

    );
};

export default CustomerCard;