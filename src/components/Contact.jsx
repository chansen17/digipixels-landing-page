import React from 'react';

const Contact = () => {
    return (
        <div className="w-full h-full py-24" style={{
            'background-image': 'linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,.02) 1px, transparent 1px)',
            'background-size': '100px 100px',
            'background-color':' rgba(255, 255, 255, 0)',
            }}>
            <div className="mxw-lg grid grid-cols-1 md:grid-cols-2 gap-8 items-start overflow-y-hidden">
                <div className='space-y-4'>
                    <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-rose-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent'>contact us</h2>
                    <p className='text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-100 uppercase leading-lose'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <p className="text-gray-200 font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia.</p>
                    <div className="w-full flex items-center gap-4 md:gap-8">
                        <button className='py-3 px-4 border-b border-b-rose-300 bg-zinc-800 rounded-xl text-gray-100'>Call Today</button>
                        <button className='py-3 px-4 border-b border-b-rose-300 bg-zinc-800 rounded-xl text-gray-100'>hello@digipixel.com</button>
                    </div>
                </div>
                <div className=''>
                    <div className='py-6 bg-zinc-900 px-4 border border-rose-400/40 rounded-2xl'>
                        <form className=''>
                            <div className=''>
                                <p className='px-1 text-sm md:text-md text-gray-300 py-2'>Full Name</p>
                                <input className='w-full py-3 px-4 text-rose-300 caret-inherit placeholder:text-gray-600 bg-zinc-800 border border-zinc-700 outline-none rounded-xl' type="text" placeholder="Your Name" />
                            </div>
                            <div className=''>
                                <p className='px-1 text-sm md:text-md text-gray-300 py-2'>Email</p>
                                <input className='w-full py-3 px-4 text-rose-300 caret-inherit placeholder:text-gray-600 bg-zinc-800 border border-zinc-700 outline-none rounded-xl' type="text" placeholder="Your Email" />
                            </div>
                            <div className=''>
                                <p className='px-1 text-sm md:text-md text-gray-300 py-2'>Message</p>
                                <textarea className='w-full py-3 px-4 text-rose-300 caret-inherit placeholder:text-gray-600 bg-zinc-800 border border-zinc-700 outline-none rounded-xl' type="text" placeholder="Your Message" rows={3}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <section className="mxw-lg w-full h-72 grid place-items-center mb-14 md:mb-24">
                <div className='max-w-3xl text-center pt-32 pb-12'>
                   <div className='space-y-4'>
                    <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-rose-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent'>Connect Now</h2>
                    <p className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-100 font-bold leading-loose uppercase'>Lorem ipsum dolor sit.</p>
                    <p className='text-gray-200 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente nobis, doloribus exercitationem dolorum incidunt iste esse voluptatum perspiciatis itaque?</p>
                   </div>
                    <div className="mt-10 w-full flex items-center justify-center gap-4 md:gap-8">
                        <button className="py-3 px-4 font-medium text-gray-100 bg-purple-600 rounded-lg">Sign Up Now</button>
                        <button className="py-3 px-4 font-medium text-gray-100 bg-none rounded-lg">Request Demo</button>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Contact;