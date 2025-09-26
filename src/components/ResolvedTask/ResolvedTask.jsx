import React from 'react';
import { toast } from 'react-toastify';

const ResolvedTask = ({ solve, removeData }) => {
    const handleRemove = (solveData) => {
        removeData(solveData);
        toast.success("Removed Task!" )
    }
    return (
        <div className='bg-green-50 border-1 border-gray-400 rounded-[10px] p-3 mt-3'>
            <h1 className='font-bold mb-2'>{solve.title}</h1>
            <div className='flex justify-between items-center'>
                <span className='text-[#099c02] font-medium '><i className="fa-solid fa-check"></i> Completed</span>
                <button onClick={() => { handleRemove(solve) }} className='text-[14px] text-gray-600'>Click to remove</button>
            </div>
        </div>
    );
};

export default ResolvedTask;