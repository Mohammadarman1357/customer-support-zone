import React from 'react';
import { toast } from 'react-toastify';

const TaskCard = ({ card, completeTask, resolvedTask, setResolvedTask, removeTicket }) => {
    const handleComplete = (cardData) => {
        toast.success("Completed!");
        completeTask(cardData);
        setResolvedTask([...resolvedTask, cardData]);
        removeTicket(cardData);
    }

    return (
        <div className='bg-[#f5f5f5] border-1 border-gray-400 rounded-[10px] p-3 mt-3'>
            <h1 className='font-bold mb-2'>{card.title}</h1>
            <button onClick={() => { handleComplete(card) }} className='btn border-none font-normal w-full bg-[#02A53B] text-white'>Complete</button>
        </div>
    );
};

export default TaskCard;