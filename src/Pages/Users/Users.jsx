import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import swal from 'sweetalert';

const Users = () => {

    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers || []);
    console.log(users);

    const colors = ['blue', 'red', 'green','amber', 'yellow', 'orange', 'purple'];

    const handleDelate = (id) => {
        console.log(id);
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                fetch(`https://coffee-shop-server-av2394yjk-shantos-projects-4e456a1b.vercel.app/users/${id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0) {
                        toast.success('Deleted one user successfully.', {
                            icon: "success",
                          })
                        const remaining = users?.filter(user => user._id !== id);
                        setUsers(remaining);
                    }
                })
            } else {
              swal("Your imaginary file is safe!");
            }
          });
    }


    return (
        <div>
            <h1>Total users : {users.length}</h1>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Last Logged At</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
       {
        users?.map((user, index) =>  <tr key={user._id} className="bg-base-200">
        <th>1</th>
        <td>User</td>
        <td>{user.email}</td>
        <td>{user.lastLoggedAt}</td>
        <td><button onClick={() => {
            handleDelate(user._id)
        }} className='btn bg-black'>X</button></td>
      </tr>)
       }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;