import {SAVE_USERS, USERS_LOGIN} from '../actions/types'

const initialState = {
    Signup:{},
    Login:{},
    loading:true
}

const userReducer=(state = initialState, action)=>{
    console.log('#########',action)
    switch(action.type){

        case SAVE_USERS:
        return {
            ...state,
            Signup:action.payload,
            loading:false

        }
        case USERS_LOGIN:
        return{
            ...state,
            Login:action.payload,
            loading:false
        }
        default: return state
    }

}

export default userReducer;