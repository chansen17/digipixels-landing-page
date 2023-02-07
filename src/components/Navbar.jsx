import React from 'react';

const Navbar = () => {
    return (
        <div className='w-full py-6'>
            <nav className='max-w-[1640px] mx-auto px-5 md:px-10 flex items-center justify-between'>
                <div className='text-xl md:text-2xl font-black text-gray-100'>DIGIPIXEL.</div>
                <div className="hidden md:flex items-center gap-6">
                    <a className='text-gray-100' href="#">Products</a>
                    <a className='text-gray-100' href="#">Solutions</a>
                    <a className='text-gray-100' href="#">Pricing</a>
                    <a className='text-gray-100' href="#">Request Demo</a>
                </div>
                <div className="flex items-center gap-4">
                    <button className='py-2 px-4 border rounded-xl bg-none text-gray-100'>Sign In</button>
                    <button className='py-2 px-4 border rounded-xl bg-purple-500 text-gray-100'>Sign Up</button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
