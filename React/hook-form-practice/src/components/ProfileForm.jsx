import React, {useState} from 'react';

const ProfileForm = () => {

    let [firstName, setFirst] = useState("");
    let [lastName, setLast] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirm, setConfirm] = useState("");
    
    return (

        <>

            <div className='container'>

                <div className='gray padding margin border'>
                    <h1>Create Your Account</h1>
                    <form>
                        <div className='form-group container'>
                            <label htmlFor="">First Name:</label>
                            <input type="text" className='form-control' onChange={(e)=>setFirst(e.target.value)}/>
                        </div>
                        <div className='form=group container'>
                            <label htmlFor="">Last Name:</label>
                            <input type="text" className='form-control' onChange={(e)=>setLast(e.target.value)}/>
                        </div>
                        <div className='form=group container'>
                            <label htmlFor="">Email:</label>
                            <input type="email" className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className='form=group container'>
                            <label htmlFor="">Password:</label>
                            <input type="password" className='form-control' onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <div className='form=group container'>
                            <label htmlFor="">Confirm Password:</label>
                            <input type="password" className='form-control' onChange={(e)=>setConfirm(e.target.value)}/>
                        </div>
                    </form>
                </div>

                <hr />

                <div className='gray padding margin border'>
                    <h4>Your Account Data</h4>
                    <div className='flex container'>
                        <div className='left'>
                            <p>First Name</p>
                            <p>Second Name</p>
                            <p>Email</p>
                            <p>Password</p>
                            <p>Confirm</p>
                        </div>
                        <div className='right'>
                            <div>
                                <p>{firstName}</p>
                            </div>
                            <div>
                                <p>{lastName}</p>
                            </div>
                            <div>
                                <p>{email}</p>
                            </div>
                            <div>
                                <p>{password}</p>
                            </div>
                            <div>
                                <p>{confirm}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}

export default ProfileForm;