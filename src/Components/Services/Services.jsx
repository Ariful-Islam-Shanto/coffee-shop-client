import React from 'react';
import icon1 from '../../assets/images/icons/1.png';
import icon2 from '../../assets/images/icons/2.png';
import icon3 from '../../assets/images/icons/3.png';
import icon4 from '../../assets/images/icons/4.png';

const Services = () => {
    return (
        <div className='grid lg:grid-cols-4 xl:grid-cols-4 gap-6'>
            <div className='space-y-4'>
                <img src={icon1} alt="" className='w-10'/>
                <h3 className='text-4xl font-normal text-[#331A15]'>Awesome Aroma</h3>
                <p className=' font-normal text-[#331A15]'>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className='space-y-4'>
                <img src={icon2} alt="" className='w-10'/>
                <h3 className='text-4xl font-normal text-[#331A15]'>High Quality</h3>
                <p className=' font-normal text-[#331A15]'>We served the coffee to you maintaining the best quality</p>
            </div>
            <div className='space-y-4'>
                <img src={icon3} alt="" className='w-10'/>
                <h3 className='text-4xl font-normal text-[#331A15]'>Pure Grades</h3>
                <p className=' font-normal text-[#331A15]'>The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div className='space-y-4'>
                <img src={icon4} alt="" className='w-10'/>
                <h3 className='text-4xl font-normal text-[#331A15]'>Proper Roasting</h3>
                <p className=' font-normal text-[#331A15]'>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
        </div>
    );
};

export default Services;