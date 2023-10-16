import React, { useContext } from 'react';
import logo from '../../assets/images/more/logo1.png';
import bg1 from '../../assets/images/more/15.jpg';
import { AuthContext } from '../Auth Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);

    const bg = {
        backgroundImage : `url(${bg1})`
    }
    
    return (
        <div>
              <div style={bg} className=' flex items-center justify-center w-full h-[10vh] bg-cover bg-center'>
                <img src={logo} alt="" className='w-10'/>
                <h1 className='text-white'>Espresso Emporium</h1>
                <button onClick={() => {
                    navigate('/users')
                }} className='px-5 py-2 hover:bg-yellow-600/80 rounded-md border-none'>Go to users</button>
                {
                    user ?
                    <div className='flex ml-2 items-center justify-center gap-2'>
                    <p>{user.email}</p>  <button className='px-5 py-2 border-2 border-sky-600/90 hover:bg-sky-600/90 rounded-md'>Sign Out</button>
                    </div>
                    :
                    <Link to={'/logIn'}>
                   <button className='px-5 py-2 border-2 border-sky-600/90 hover:bg-sky-600/90 rounded-md border-none'>Sign in</button>
                   </Link>
                }
            </div>
        </div>
    );
};

export default Header;