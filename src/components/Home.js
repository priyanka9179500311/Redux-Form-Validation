import { useHistory } from 'react-router';


const Home=()=>{
    const history = useHistory();
    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('auth_token');
        localStorage.clear();
        history.push('/');
        

    }
    return(
        <div>
           <h1> Home Page</h1>
           <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Home;