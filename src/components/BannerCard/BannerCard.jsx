import React from 'react';
import bgImg from '../../assets/vector1.png';
// import bgImg2 from '../../assets/vector2.png';

const BannerCard = () => {
    return (

        <div className='max-w-[1280px] mx-auto flex justify-between gap-4 p-6 md:p-10'>

            <div className='bg-gradient-to-t from-[#632ee3] to-[#9f62f2] flex-1 text-center py-10'>
                <div className='relative bg-left bg-no-repeat bg-contain inter-font' style={{ backgroundImage: `url(${bgImg})` }}>
                    <div className='absolute top-0 right-0  w-full h-[300px] bg-no-repeat bg-cover' style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "150px 150px", transform: "scaleX(-1)" }}></div>

                    <h1 className='text-2xl text-white'>In-Progress</h1>
                    <h1 className='text-6xl font-semibold text-white'>0</h1>
                </div>
            </div>

            <div className='bg-gradient-to-t from-[#632ee3] to-[#9f62f2] flex-1 text-center py-10'>
                <div className='relative bg-left bg-no-repeat bg-contain inter-font' style={{ backgroundImage: `url(${bgImg})` }}>
                    <div className='absolute top-0 right-0  w-full h-[300px] bg-no-repeat bg-cover' style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "150px 150px", transform: "scaleX(-1)" }}></div>

                    <h1 className='text-2xl text-white'>In-Progress</h1>
                    <h1 className='text-6xl font-semibold text-white'>0</h1>
                </div>
            </div>
        </div>
    );
};

export default BannerCard;