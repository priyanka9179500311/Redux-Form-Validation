import { SAVE_USERS } from './types';
import axios from '../components/BaseUrl';
 
//import axios from 'axios';



const  userRegisterAction  =  (item) => async dispatch => {
  
     await axios.post(`/api/register/`,item)
    .then((response)=>{
        console.log(response.data)
        return  dispatch({
            type: SAVE_USERS,
            payload: response.data
        })
    }).catch((error)=>{
        throw error;
        
  
    })
    
     
}
export default  userRegisterAction ;