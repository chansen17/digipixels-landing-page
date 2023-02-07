import React from 'react';
import Marquee from "react-fast-marquee";

const Banner = () => {

    let options = ['facebook', 'twitter', 'instagram', 'tiktok', 'other social media platforms', 'personal website', 'blogs'];
    return (
        <Marquee className='w-full h-full py-8 bg-purple-600 overflow-x-clip overflow-y-hidden' gradient={true} gradientColor={[147, 51, 234, .05]} pauseOnHover={false} speed={50} loop={0}>
            {options.map(o => (
                <p className='inline-block text-2xl md:text-3xl lg:text-5xl text-gray-100 uppercase font-semibold mx-6 md:mx-12'>{o}</p>
            ))}
        </Marquee>
    );
}

export default Banner;
