import { SAVE_USERS } from './types';
import axios from '../components/BaseUrl';

//import axios from 'axios';



export const userRegisterAction = (item) =>  dispatch => {

    return axios.post(`/api/register/`, item)
        .then((response) => {
            console.log(response)
            return dispatch({
                type: SAVE_USERS,
                payload: response.data
            })
        }).catch((error) => {
            throw error;


        })

    


}
// export default  userRegisterAction ;



// try{
    //      return axios.post(`/api/register/`,item).then((res)=>{

    //          return dispatch( {
    //              type: SAVE_USERS,
    //              payload: res.data
    //          })
    //      }).catch((err)=>{throw err})
    // }
    // catch(error){
    //     throw error;
    // }