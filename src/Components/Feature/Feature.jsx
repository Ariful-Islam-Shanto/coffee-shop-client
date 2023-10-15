import React from 'react';
import img1 from '../../assets/images/cups/Rectangle 10.png';
import img2 from '../../assets/images/cups/Rectangle 11.png';
import img3 from '../../assets/images/cups//Rectangle 12.png';
import img4 from '../../assets/images/cups/Rectangle 13.png';
import img5 from '../../assets/images/cups/Rectangle 14.png';
import img6 from '../../assets/images/cups/Rectangle 15.png';
import img7 from '../../assets/images/cups/Rectangle 15.png';
import img8 from '../../assets/images/cups/Rectangle 9.png';

const Feature = () => {
    return (
        <div className='bg-white py-12'>
               <div className='flex space-y-4 items-center justify-center flex-col mb-12'>
            <p>Follow us on</p>
            <h1 className='text-5xl text-[#331A15] font-normal'>Our Popular Products</h1>
            </div>

            <div className='grid grid-cols-4 gap-2 max-w-4xl mx-auto'>
                <img src={img1} alt="" className='w-full rounded-md'/>
                <img src={img2} alt="" className='w-full rounded-md'/>
                <img src={img3} alt="" className='w-full rounded-md'/>
                <img src={img4} alt="" className='w-full rounded-md'/>
                <img src={img5} alt="" className='w-full rounded-md'/>
                <img src={img6} alt="" className='w-full rounded-md'/>
                <img src={img7} alt="" className='w-full rounded-md'/>
                <img src={img8} alt="" className='w-full rounded-md'/>
            </div>
        </div>
    );
};

export default Feature;