import {SAVE_USERS} from '../actions/types'

const initialState = {
    Signup:{},
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
        default: return state
    }

}

export default userReducer;