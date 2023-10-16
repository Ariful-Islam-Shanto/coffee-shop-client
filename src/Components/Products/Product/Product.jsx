import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaEye, FaPen, FaDeleteLeft } from "react-icons/fa6";
import swal from 'sweetalert';

const Product = ({product, products, setProducts}) => {

    const {_id, name, chef, supplier, taste, photo, category, details} = product || {};

    const handleDelete = (_id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              fetch(`https://coffee-shop-server-av2394yjk-shantos-projects-4e456a1b.vercel.app/coffees/${_id}`, {
                method: "DELETE"
              })
              .then(res => res.json())
              .then(data => {
                if(data.deletedCount > 0) {
                    swal({
                        title: "Deleted",
                        text: "Your file has been deleted.",
                        icon: "success",
                    })
                    const remaining = products?.filter(product => product._id !== _id)

                    setProducts(remaining);
                }
              })
            }
          });
    }

    return (
       
        <div className='flex gap-10 items-center justify-between border-white border-2 p-10 bg-[#F5F4F1] rounded-md drop-shadow-md h-full'>
            <div className='flex-1'>
            <img src={photo} alt="" className='w-full h-[220px]'/>
            </div>
            <div className='flex-1'>
                <h1 className='text-xl text-black font-semibold'>Name: <span className='text-xl text-gray-600 font-thin'>{name}</span></h1>
                <h1 className='text-xl text-black font-semibold'>Chef: <span className='text-xl text-gray-600 font-thin'>{chef}</span></h1>
                <h1 className='text-xl text-black font-semibold'>Price: <span className='text-xl text-gray-600 font-thin'>890 Taka</span></h1>
            </div>
            <div className='flex-1 flex items-center justify-around flex-col w-full h-full'>
            <Link to={`/details/${_id}`}>
                <div className='p-3 bg-yellow-600 rounded-md flex items-center justify-center text-white'>
                <FaEye></FaEye>
                </div>
            </Link>
            <Link to={`/updateData/${_id}`}>
                <div  className='p-3 bg-amber-950 rounded-md flex items-center justify-center text-white'>
                <FaPen></FaPen>
                </div>
                </Link>
                <div onClick={() => {
                    handleDelete(_id);
                }}  className='p-3 bg-red-600 rounded-md flex items-center justify-center text-white'>
                <FaDeleteLeft></FaDeleteLeft>
                </div>
            </div>
        </div>

    );
};

export default Product;