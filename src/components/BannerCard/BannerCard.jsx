import React from 'react';
import bgImg from '../../assets/vector1.png';
// import bgImg2 from '../../assets/vector2.png';

const BannerCard = ({ availableProgress, availableResolved }) => {
    return (

        <div className='max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between gap-4 p-6 md:p-10'>

            <div className='relative inter-font bg-gradient-to-b from-[#632ee3] to-[#9f62f2] flex-1 text-center py-10 rounded-[8px]'>

                <div className='absolute top-0 left-0  w-full h-[300px] bg-no-repeat bg-cover' style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "250px 250px" }}></div>
                <div className='absolute top-0 right-0  w-full h-full bg-no-repeat bg-cover' style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "250px 250px", transform: "scaleX(-1)" }}></div>

                <h1 className='text-2xl text-white'>In-Progress</h1>
                <h1 className='text-6xl font-semibold text-white'>{availableProgress}</h1>

            </div>
            <div className='relative inter-font bg-gradient-to-r from-[#54cf68] to-[#00827a] flex-1 text-center py-10 rounded-[8px]'>

                <div className='absolute top-0 left-0  w-full h-[300px] bg-no-repeat bg-cover' style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "250px 250px" }}></div>
                <div className='absolute top-0 right-0  w-full h-full bg-no-repeat bg-cover' style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "250px 250px", transform: "scaleX(-1)" }}></div>

                <h1 className='text-2xl text-white'>Resolved</h1>
                <h1 className='text-6xl font-semibold text-white'>{availableResolved}</h1>

            </div>
        </div>
    );
};

export default BannerCard;