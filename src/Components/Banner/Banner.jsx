import React from 'react';
import bg2 from '../../assets/images/more/3.png';

const Banner = () => {
  
    const bigBg = {
        backgroundImage : `url(${bg2})`
    }
    
    return (
        <div>
          
            <div style={bigBg} className='px-24  flex items-center justify-between bg-cover bg-center h-[90vh] w-full'>
                <div className='w-3/4'>

                </div>
                <div className='space-y-4'>
                    <h1 className='flex-1  text-5xl font-normal text-white'>Would you like a Cup of Delicious Coffee?</h1>
                    <p className='font-normal text-gray-200'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className='bg-[#E3B577] px-5 py-2 text-sm text-black  border-none font-normal rounded-sm'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;