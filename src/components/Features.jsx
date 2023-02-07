import React from 'react';

const Features = () => {
    return (
        <div className='w-full h-full py-24 md:py-32'>
            <div className='mxw-lg'>
                <section className='max-w-5xl mx-auto space-y-3 text-center'>
                    <h3 className='text-xl md:text-2xl uppercase bg-gradient-to-r font-semibold from-cyan-500 to-rose-500 bg-clip-text text-transparent'>Advantages</h3>
                    <p className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase text-gray-100'>Lorem ipsum dolor sit amet adipisicing.</p>
                </section>
                <section className='mt-10'>
                    <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className='text-center text-gray-100'>
                            <div className='bg-purple-500 h-64 py-5 px-3 rounded-2xl overflow-hidden relative'>
                                <img className='w-full h-full -bottom-12 left-0 absolute object-cover rounded-2xl' src="/feature-4.png" alt="" />
                            </div>
                            <div className='py-4 px-2 space-y-3'>
                                <h2 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold'>Tracking</h2>
                                <p className='text-md md:text-lg font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatum harum consectetur.</p>
                            </div>
                        </div>
                        <div className='text-center text-gray-100'>
                            <div className='bg-rose-500 h-64 py-5 px-3 rounded-2xl overflow-hidden relative'>
                                <img className='w-full h-full -bottom-12 left-0 absolute object-cover rounded-2xl' src="/feature-5.png" alt="" />
                            </div>
                            <div className='py-4 px-2 space-y-3'>
                                <h2 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold'>Tracking</h2>
                                <p className='text-md md:text-lg font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatum harum consectetur.</p>
                            </div>
                        </div>
                        <div className='text-center text-gray-100'>
                            <div className='bg-sky-500 h-64 py-5 px-3 rounded-2xl overflow-hidden relative'>
                                <img className='w-full h-full -bottom-12 left-0 absolute object-cover rounded-2xl' src="/feature-6.png" alt="" />
                            </div>
                            <div className='py-4 px-2 space-y-3'>
                                <h2 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold'>Tracking</h2>
                                <p className='text-md md:text-lg font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatum harum consectetur.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Features;
