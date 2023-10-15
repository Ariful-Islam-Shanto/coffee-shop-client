import React from 'react';
import swal from 'sweetalert';
import createBg from '../../assets/images/more/13.jpg';
import { Link, json } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';

const CreateData = () => {
    const bg = {
        backgroundImage : `url(${createBg})`
    }

    const handlePost = (e) => {
        e.preventDefault();

        const form = new FormData(e.target); 
        const name = form.get('name');
        const supplier = form.get('supplier');
        const category = form.get('category');
        const chef = form.get('chef');
        const taste = form.get('taste');
        const details = form.get('details');
        const photo = form.get('photo');


        console.log(name, supplier, category, chef, taste, details, photo);

        const coffee = {name, supplier, category, chef, taste: taste, details, photo }

        fetch('http://localhost:4001/coffees', {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(coffee)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertId > 0) {
                swal("Good job!", "You clicked the button!", "success", {
                    button: "Aww yiss!",
                  });
            }
        })
    }
    
    return (
        <>
        <div style={bg} className=' w-full py-16'>
            <div className='mb-8 w-2/3 mx-auto'>

            <Link to={'/'}>
            <button className='px-5 py-2 border-[#582d25] text-black rounded-md border-2'>Back to home</button>
            </Link>
            </div>
            <div className='bg-[#F4F3F0] border-[#331A15] border-2 rounded-md space-y-6  px-24 flex items-center flex-col justify-center w-2/3 mx-auto py-16 '>
                <h1 className='text-5xl text-[#374151] font-normal text-center'>Add New Coffee</h1>
                <p className='text-center'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form onSubmit={handlePost} className='w-full space-y-6'>
                    <div className=' flex w-full gap-6  items-center justify-center'>
                    <div className='flex w-full flex-col gap-4'>
                        <label htmlFor="name" >Name <br />
                        <input type="text" name='name' id='name'  className='bg-white w-full px-5 py-2 rounded-md '/>
                        </label>
                        <label htmlFor="supplier"> Supplier <br />
                        <input type="text" name='supplier' id='supplier' className='bg-white w-full px-5 py-2 rounded-md'/>
                        </label>
                        <label htmlFor="category"> Category <br />
                        <input type="text" name='category' id='category' className='bg-white w-full px-5 py-2 rounded-md'/>
                        </label>
                    </div>
                    <div className='flex  w-full flex-col gap-4'>
                        <label htmlFor="chef" >Chef <br />
                        <input type="text" name='chef' id='chef'  className='bg-white w-full px-5 py-2 rounded-md'/>
                        </label>
                        <label htmlFor="taste"> Taste <br />
                        <input type="text" name='taste' id='taste' className='bg-white w-full px-5 py-2 rounded-md'/>
                        </label>
                        <label htmlFor="details"> Details <br />
                        <input type="text" name='details' id='details' className='bg-white w-full px-5 py-2 rounded-md'/>
                        </label>
                    </div>
                    </div>
                        <label htmlFor="photo"> Photo <br />
                        <input type="text" name='photo' id='photo' className='bg-white w-full px-5 py-2'/>
                        </label>

                        <button type='submit' className='text-[#331A15] bg-[#D2B48C] font-normal rounded-sm py-2 text-center w-full border-none hover:border-2 hover:border-[#331A15]'>Add Coffee</button>
                </form>
            </div>

          
        </div>
        <Footer></Footer>
        </>
    );
};

export default CreateData;