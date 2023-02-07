import React from 'react';

const Hero = () => {
    return (
        <section className='h-full w-full relative pt-20 overflow-y-hidden' style={{
            'background-image': 'linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,.02) 1px, transparent 1px)',
            'background-size': '100px 100px',
            'background-color':' rgba(255, 255, 255, 0)',
        }}>
            <div className='max-w-[1640px] mx-auto px-5 md:px-10 text-center text-gray-100 '>
                <div className='space-y-5 relative'>
                    {/* blob */}
                    <div className='h-44 w-72 absolute bottom-10 left-0 md:left-1/4 rounded-b-full rounded-t-full bg-gradient-to-br from-red-500 via-transparent to-violet-500 rotate-12 blur-3xl opacity-50 -z-10'/>
                    <div className='h-44 w-80 absolute top-0 right-0 md:right-1/4 rounded-b-full rounded-t-full bg-gradient-to-br from-blue-500 via-transparent to-cyan-500 -rotate-12 blur-3xl opacity-50 -z-10'/>
                    <h2 className='text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold uppercase'>Lorem ipsum dolor sit<br/> <span className="text-rose-400">conestetuer</span> <span className='bg-gradient-to-r from-rose-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent'>ipsum dolor</span></h2>
                    <p className='text-lg md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias asperiores rerum perspiciatis!</p>
                    <div className='flex items-center bg-zinc-800 border border-gray-700 rounded-2xl max-w-sm md:max-w-lg mx-auto py-2 px-2'> 
                        <input className='w-full md:w-full py-2 md:py-3 px-2 bg-transparent text-md md:text-lg border-none outline-none rounded-md placeholder-zinc-600' type="text" placeholder="tony@starkinc"/>
                        <button className='w-1/2 md:w-1/4 py-2 md:py-3 px-2 text-md md:text-lg border-none outline-none rounded-lg bg-purple-600 text-white font-medium whitespace-nowrap'>Get Started</button>
                    </div>
                </div>
                <div className='mt-16 -mb-16 md:-mb-24 relative overflow-hidden'>
                    {/* gradient */}
                    <div className='absolute h-full w-full bg-gradient-to-t from-zinc-900 via-zinc-900/70'/>
                    <img className='h-full w-full rounded-2xl shadow-2xl shadow-purple-500' src="/hero-asset.png" alt="" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
