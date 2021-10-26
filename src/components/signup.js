import { useState } from "react";
import { useDispatch } from 'react-redux';
import './signup.css';
import userRegisterAction from "../actions/userRegister";
// import { Field } from 'redux-form' 

const Signup = () => {
    const [first_name, setFirstName] = useState()
    const [last_name, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [date_of_birth, setDate] = useState();
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let item = { first_name, last_name, email, password, date_of_birth }
            console.log(item);
            let response = await dispatch(userRegisterAction(item));
            alert("Data Send Successfully")
            //response = response?.payload
            console.log('response**********************',response)
        } catch (error) {
            console.log(error?.response);
            if (error?.response?.status === 400) {
                alert(error?.response?.data?.email);
            }
        }

    }
   

    return (
        <>
            {/* <userRegisterAction /> */}

            <div className="col-sm-6 offset-sm-3">
                <h1>Registration Form</h1>
              
                <form method="post" onSubmit={handleSubmit}>

                    First name<input type="text"   value={first_name} onChange={(e) => setFirstName(e.target.value)} className="form-control" required />
                    <br />
                    Last name<input type="text"  value={last_name} onChange={(e) => setLastName(e.target.value)} className="form-control" required />
                    <br />
                    Email address<input type="email"  value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" required />
                    <br />
                    Password<input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" required />
                    <br />
                    Date of birth<input type="string" value={date_of_birth} onChange={(e) => setDate(e.target.value)} className="form-control" placeholder="yyyy/mm/dd" required />
                    <br />

                    <button type="submit" >signup</button>


                </form>
            </div>
        </>
    )
}

export default Signup;