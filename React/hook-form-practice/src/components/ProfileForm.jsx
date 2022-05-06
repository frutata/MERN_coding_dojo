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

                <div className='gray padding margin'>
                    <h1>Create Your Account</h1>
                    <form>
                        <div className='form-group container'>
                            <label htmlFor="">First Name:</label>
                            <input type="text" className='form-control' onChange={(e)=>setFirst(e.target.value)}/>
                            {
                                firstName.length<2? <p className='test-danger'>First name must be at LEAST two characters!</p> : null
                            }
                        </div>
                        <div className='form=group container'>
                            <label htmlFor="">Last Name:</label>
                            <input type="text" className='form-control' onChange={(e)=>setLast(e.target.value)}/>
                            {
                                lastName.length<2? <p className='test-danger'>Last name must be at LEAST two characters!</p> : null
                            }
                        </div>
                        <div className='form=group container'>
                            <label htmlFor="">Email:</label>
                            <input type="email" className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
                            {
                                email.length<5? <p className='test-danger'>Email must be at LEAST five characters!</p> : null
                            }
                        </div>
                        <div className='form=group container'>
                            <label htmlFor="">Password:</label>
                            <input type="password" className='form-control' onChange={(e)=>setPassword(e.target.value)}/>
                            {
                                password.length<8? <p className='test-danger'>Password must be at LEAST eight characters!</p> : null
                            }
                            {
                                password != confirm? <p className='test-danger'>Password and Confirmation MUST match!</p> : null
                            }
                        </div>
                        <div className='form=group container'>
                            <label htmlFor="">Confirm Password:</label>
                            <input type="password" className='form-control' onChange={(e)=>setConfirm(e.target.value)}/>
                            {
                                confirm.length<8? <p className='test-danger'>Confirmation must be at LEAST eight characters!</p> : null
                            }
                        </div>
                    </form>
                </div>

                <hr />

                <div className='gray padding margin border'>
                    <h4>Your Account Data</h4>
                    <div className='container'>

                        <div className='flex'>
                            <div className='left'>
                                <p>First Name</p>
                            </div>
                            <div className='right'>
                                <p>{firstName}</p>
                            </div>
                        </div>

                        <div className='flex'>
                            <div className='left'>
                                <p>Last Name</p>
                            </div>
                            <div className='right'>
                                <p>{lastName}</p>
                            </div>
                        </div>

                        <div className='flex'>
                            <div className='left'>
                                <p>Email</p>
                            </div>
                            <div className='right'>
                                <p>{email}</p>
                            </div>
                        </div>

                        <div className='flex'>
                            <div className='left'>
                                <p>Password</p>
                            </div>
                            <div className='right'>
                                <p>{password}</p>
                            </div>
                        </div>
                        
                        <div className='flex'>
                            <div className='left'>
                                <p>Confirmation</p>
                            </div>
                            <div className='right'>
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