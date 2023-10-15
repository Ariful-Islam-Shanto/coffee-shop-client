import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import bg from '../../assets/images/more/11.png';
import Footer from '../Footer/Footer';
import { FaArrowLeft } from "react-icons/fa6";

const Details = () => {

    const coffee = useLoaderData();
    console.log(coffee);

    const {_id, name, chef, supplier, taste, photo, category, details} = coffee || {};


    const bgImg = {
        backgroundImage : `url(${bg})`
    }
    return (
        <>
        <div style={bgImg} className='bg-cover bg-center'>
            <div className='max-w-4xl mx-auto py-20 space-y-6'>
            <Link to={'/'}>
           <h1 className='text-2xl text-black flex items-center justify-start gap-1 font-normal'><FaArrowLeft></FaArrowLeft>  Back to home</h1>
           </Link>

        <div className='flex gap-10 items-center justify-center border-white border-2 p-10 bg-[#F5F4F1] rounded-md drop-shadow-md'>
            <div className='flex-1 '>
               
            <img src={photo} alt="" className='w-full h-[400px]'/>
            </div>
            <div className='flex-1'>
            <h1 className='text-2xl text-black font-normal'>Niceties</h1>
                <h1 className='text-xl text-black font-semibold'>Name: <span className='text-xl text-gray-600 font-thin'>{name}</span></h1>
                <h1 className='text-xl text-black font-semibold'>Chef: <span className='text-xl text-gray-600 font-thin'>{chef}</span></h1>
                <h1 className='text-xl text-black font-semibold'>Supplier: <span className='text-xl text-gray-600 font-thin'>{supplier}</span></h1>
                <h1 className='text-xl text-black font-semibold'>Taste: <span className='text-xl text-gray-600 font-thin'>{taste}</span></h1>
                <h1 className='text-xl text-black font-semibold'>Category: <span className='text-xl text-gray-600 font-thin'>{category}</span></h1>
                <h1 className='text-xl text-black font-semibold'>Details: <span className='text-xl text-gray-600 font-thin'>{details}</span></h1>
            </div>
        </div>
        </div>
        </div>
        <Footer></Footer>
        </>
            
    );
};

export default Details;