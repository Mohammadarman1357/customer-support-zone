import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar inter-font md:py-4 md:px-6 bg-white max-w-[1280px] mx-auto text-[#130B2D]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a href="">Home</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Changelog</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Download</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <a className="text-xl">
                    <h1 className='font-bold text-2xl'>CS - Ticket System</h1>
                </a>
            </div>

            <div className="navbar-end">
                <div className='flex items-center'>
                    <ul className="menu menu-horizontal px-1 text-[#000000e6] hidden lg:flex">
                        <li><a href="">Home</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Changelog</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Download</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                    <button className='font-semibold bg-gradient-to-br from-[#632ee3] to-[#9f62f2] py-3 px-4 rounded-[4px] text-white hover:opacity-50 ml-5'>+ New Ticket</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;