import react from 'react';

const Footer = () => {
    return (
        <div className='w-full py-24'>
            <div className="mxw-lg w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 text-gray-200">
                <div className='lg:col-span-2 space-y-3'>
                    <h2 className='text-2xl md:text-3xl font-black'>DigiPixel</h2>
                    <p className='font-light md:max-w-md'>Lorem ipsum dolor sit amet consectetur, ciatis fugit doloremque.</p>
                </div>
                <div>
                    <ul className=''>
                        <li className='font-bold uppercase'>Products</li>
                        <li className='FONT-LIGHT'>Attribution</li>
                        <li className='FONT-LIGHT'>Sales</li>
                    </ul>
                </div>
                <div>
                    <ul className=''>
                        <li className='font-bold uppercase'>Solution</li>
                        <li className='FONT-LIGHT'>Attribution</li>
                        <li className='FONT-LIGHT'>Sales</li>
                    </ul>
                </div>
                <div>
                    <ul className=''>
                        <li className='font-bold uppercase'>Menu</li>
                        <li className='FONT-LIGHT'>Attribution</li>
                        <li className='FONT-LIGHT'>Sales</li>
                    </ul>
                </div>
            </div>
            <div className="mxw-sm h-[1px] bg-zinc-800 mt-10"/>
            <p className='mxw-lg text-gray-400'>&copy;2023 GidiPixel, Lorem ipsum dolor sit amet.</p>
        </div>
    )
}

export default Footer;