import { ADD_TODO,DELETE_TODO,CLEAR_ALL_TODO} from "../action/Action";


const initialState={
    todolist:[]
}

const todo=(state=[],action)=>{
  
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
               {
                   text:action.payload,
                   id:Math.floor(Math.random() * 100) + 1
               }
           ]
    //     return {
    //         ...state, 
    //         todolist: [ ...state.todolist, action.payload] ,
    //         id:Math.floor(Math.random() * 100) + 1
    //    } 
        case DELETE_TODO:
            return [
                ...state,
               { // todo: state.filter((todo) => todo.id != action.payload)
                todo:state.todo.filter(item=>item.id!=action.payload)
               }
            ]
        case CLEAR_ALL_TODO:
            return {
                state
            }
        default:
            return state
    }
}

export default todo