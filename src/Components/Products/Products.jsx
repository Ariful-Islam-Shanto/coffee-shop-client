import React, { useEffect, useState } from 'react';
import bg from '../../assets/images/more/1.png';
import { Link } from 'react-router-dom';
import Product from './Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4001/coffees')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const bg1 = {
        backgroundImage : `url(${bg})`,
        height: '100%',
        width:'100%'
    }
    return (
        <div style={bg1} className='bg-cover  bg-white w-full h-full py-24 '>
            <div className='flex space-y-6 items-center justify-center flex-col'>
            <p>--- Sip & Savor ---</p>
            <h1 className='text-5xl text-[#331A15] font-normal'>Our Popular Products</h1>
            <Link to={'/createData'}>
            <button className='bg-[#E3B577] border-[#331A15] border-2 text-[#331A15] px-7 py-3 font-normal'>Add Coffee</button>
            </Link>
            </div>

            <div className='grid gap-6 grid-cols-2 max-w-4xl mx-auto py-12'>
                {
                    products?.map(product => <Product key={product._id} product={product} products={products} setProducts={setProducts}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;