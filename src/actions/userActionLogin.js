import { USERS_LOGIN } from './types';
import axios from '../components/BaseUrl';
 



const  userActionLogin  =  (result) => dispatch => {
  
    return axios.post(`/api/login/`,result)
    .then((response)=>{
        console.log(response)
        return dispatch({
            type: USERS_LOGIN,
            payload: response.data
        })
    }).catch((error)=>{
        throw error;
        
  
    })
    
     
}
export default  userActionLogin ;

