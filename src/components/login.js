import { useState } from "react";
import userActionLogin from "../actions/userActionLogin";
import { useDispatch } from 'react-redux';
import './login.css';
import { useHistory } from "react-router";
import { useEffect } from "react";

const Login = () => {
    useEffect(() => {
        if(localStorage.getItem('auth_token')){
          history.push('/');
        }
      }, [])
      const history = useHistory(); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
  


    const loginSubmit = async (e) => {
        e.preventDefault();
        try {
            let result = { email, password }
            console.log(result);
            let response = await dispatch(userActionLogin(result));
            response = response?.payload
            console.log('///////////////////',response);
            localStorage.setItem("auth_token", (response.auth_token))
            history.push('/');
            

        } catch (error) {
            if (error?.response?.status === 404) {
                alert(error?.response?.data?.detail);
            }else if(error?.response?.status === 401) {
                alert(error?.response?.data?.detail);
            }

        }

    }


    return (
        <>
            <div className="col-sm-6 offset-sm-3">
                <h1>Login Form</h1>
                <form onSubmit={loginSubmit}>
                    Email address<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" required />
                    <br />
                    Password<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" required />
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    )
}
export default Login;