
import { INCREMENT,DECREMENT } from "../action/Action";

// const inititalState={
//     count = 0
// }

const reducer =(state={count:0},action)=>{
    switch(action.type){
        case INCREMENT:
            return{
                ...state,
                count:state.count+1
            }
        case DECREMENT:
            return{
                ...state,
                count:state.count-1
            }
        default:
            return state
    }
}

export default reducer