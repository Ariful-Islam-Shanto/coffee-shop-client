import React from 'react';
import logo from '../../assets/images/more/logo1.png';
import bg1 from '../../assets/images/more/15.jpg';

const Header = () => {

    const bg = {
        backgroundImage : `url(${bg1})`
    }
    
    return (
        <div>
              <div style={bg} className=' flex items-center justify-center w-full h-[10vh] bg-cover bg-center'>
                <img src={logo} alt="" className='w-10'/>
                <h1 className='text-white'>Espresso Emporium</h1>
            </div>
        </div>
    );
};

export default Header;