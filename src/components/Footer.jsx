import react from 'react';

const Footer = () => {
    return (
        <div className='w-full pb-12'>
            <div className='w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-10'/>
            <div className="mxw-lg w-full grid grid-cols-1 md:grid-cols-4 items-start gap-6 md:gap-10 text-gray-200">
                <div className='space-y-3'>
                    <h2 className='text-2xl md:text-3xl font-black bg-gradient-to-r from-rose-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent'>DigiPixel</h2>
                    <p className='font-light md:max-w-md'>Lorem ipsum dolor sit amet consectetur, ciatis fugit doloremque.</p>
                </div>
                <div>
                    <ul className=''>
                        <li className='font-bold uppercase'>Products</li>
                        <li className='font-light'>{'>'} <a href="#">Data Analytics</a></li>
                        <li className='font-light'>{'>'} <a href="#">Follower Growth</a></li>
                        <li className='font-light'>{'>'} <a href="#">Influence Meter</a></li>
                    </ul>
                </div>
                <div>
                    <ul className=''>
                        <li className='font-bold uppercase'>About Us</li>
                        <li className='font-light'>{'>'} <a href="#">Who we are</a></li>
                        <li className='font-light'>{'>'} <a href="#">The Team</a></li>
                    </ul>
                </div>
                <div>
                    <ul className=''>
                        <li className='font-bold uppercase'>Menu</li>
                        <li className='font-light'>{'>'} <a href="#">Products</a></li>
                        <li className='font-light'>{'>'} <a href="#">Pricing</a></li>
                        <li className='font-light'>{'>'} <a href="#">Demo</a></li>
                    </ul>
                </div>
            </div>
            <p className='mxw-lg py-4 text-gray-400'>&copy;2023 GidiPixel, Lorem ipsum dolor sit amet.</p>
        </div>
    )
}

export default Footer;