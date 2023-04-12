import React, { useState, useRef } from "react";
import userStyle from './user.module.css'

function User() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [users, setUsers] = useState([]);
    const updateRef = useRef(null);

    function submitHandler(e) {
        e.preventDefault();
        let newUsers = {
            name: name,
            email: email,
            number: number,
        }
        // setUsers({...users,name,email,number});
        setUsers([...users, newUsers]);
        setName('');
        setEmail('');
        setNumber('');
    }

    function handleDelete(email) {
        setUsers(
            users.filter((item) => item.email !== email)
        )

    }

    function handleUpdate(index) {
        let updatedUser = { name, email, number };
        let newUser = [...users];
        newUser[index] = updatedUser;
        setUsers(newUser);

        setName('');
        setEmail('');
        setNumber('');

        updateRef.current.focus();


    }

    return (
        <>
            <div className={userStyle.container}>
                <div className={userStyle.top}>
                    <div className={userStyle.left}>
                        <form onSubmit={submitHandler}>
                            <div className={userStyle.formContainer}>
                                <div className={userStyle.formGroup}>
                                    <label htmlFor='name'>Name:</label>
                                    <input name='name' type='text' ref={updateRef} value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className={userStyle.formGroup}>
                                    <label htmlFor='email'>Email:</label>
                                    <input name='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className={userStyle.formGroup}>
                                    <label htmlFor='number'>Mobile:</label>
                                    <input name='number' type='tel' value={number} onChange={(e) => setNumber(e.target.value)} />
                                </div>
                                <div>
                                    <input type='submit' className={userStyle.submit} />

                                </div>
                            </div>


                        </form>


                    </div>
                    <div className={userStyle.right}>
                        <h3>Name : {name}</h3>
                        <h3>Email : {email}</h3>
                        <h3>Number : {number}</h3>

                    </div>
                </div>
                <div className={userStyle.bottom}>
                    <table className={userStyle.table}>
                        <thead>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Number</th>
                            <th>Delete Action</th>
                            <th>Remove Action</th>

                        </thead>
                        <tbody>
                            {
                                users.map((item, index) => (
                                    <>
                                        <tr key={item.number}>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.number}</td>
                                            <td><button className={userStyle.delete} onClick={() => handleDelete(item.email)}>Delete</button></td>
                                            <td><button className={userStyle.update} onClick={() => handleUpdate(index)}>Update</button></td>
                                        </tr>
                                    </>
                                ))
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}

export default User;
