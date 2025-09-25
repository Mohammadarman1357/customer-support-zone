import React from 'react';

import twitImg from '../../assets/twit.png'
import linkedinImg from '../../assets/linkedin.png'
import fbImg from '../../assets/fb.png'
import mailImg from '../../assets/mail.png'


const Footer = () => {
    return (
        <footer className=' bg-neutral text-neutral-content px-6 pt-6 md:px-20 md:pt-20 max-w-[1280px] mx-auto'>
            <section className="footer flex flex-col md:flex-row inter-font border-b-1 border-b-[#E5E7EB] pb-6 md:pb-20">
                <nav className='md:flex-2'>
                    <h1 className='font-bold text-2xl'>CS - Ticket System </h1>
                    <p className='text-[#A1A1AA]'>helps teams manage customer support and internal issues in one place. Users can create, assign, and track tickets with ease. With priorities, updates, and clear records, it makes problem-solving faster and more organized.</p>
                </nav>

                <nav className='flex-1'>
                    <h6 className="text-xl font-medium">Company</h6>
                    <a className="link link-hover text-[#A1A1AA]">About us</a>
                    <a className="link link-hover text-[#A1A1AA]">Our Mission</a>
                    <a className="link link-hover text-[#A1A1AA]">Contact Saled</a>
                </nav>

                <nav className='flex-1'>
                    <h6 className="text-xl font-medium">Services</h6>
                    <a className="link link-hover text-[#A1A1AA]">Products & Services</a>
                    <a className="link link-hover text-[#A1A1AA]">Customer Stories</a>
                    <a className="link link-hover text-[#A1A1AA]">Download Apps</a>
                </nav>
                <nav className='flex-1'>
                    <h6 className="text-xl font-medium">Information</h6>
                    <a className="link link-hover text-[#A1A1AA]">Privacy Policy</a>
                    <a className="link link-hover text-[#A1A1AA]">Terms & Conditions</a>
                    <a className="link link-hover text-[#A1A1AA]">Join Us</a>
                </nav>
                <nav className='flex-1'>
                    <h6 className="text-xl font-medium">Social Links</h6>

                    <a className="link link-hover text-[#A1A1AA]">
                        <div className='flex items-center'>
                            <span></span><img src={twitImg} alt="" />
                            <span className='ml-2'>@CS - Ticket System</span>
                        </div>
                    </a>
                    <a className="link link-hover text-[#A1A1AA] mt-4">
                        <div className='flex items-center'>
                            <span></span><img src={linkedinImg} alt="" />
                            <span className='ml-2'>@CS - Ticket System</span>
                        </div>
                    </a>
                    <a className="link link-hover text-[#A1A1AA] mt-4">
                        <div className='flex items-center'>
                            <span></span><img src={fbImg} alt="" />
                            <span className='ml-2'>@CS - Ticket System</span>
                        </div>
                    </a>
                    <a className="link link-hover text-[#A1A1AA] mt-4">
                        <div className='flex items-center'>
                            <span></span><img src={mailImg} alt="" />
                            <span className='ml-2'>support@cst.com</span>
                        </div>
                    </a>
                </nav>
            </section>
            <section className='text-[#FAFAFA] text-center p-[30px]'>© 2025 CS - Ticket System. All rights reserved.</section>
        </footer>
    );
};

export default Footer;