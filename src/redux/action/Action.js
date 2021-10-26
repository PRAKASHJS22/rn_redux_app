//counter
export const INCREMENT='INCREMENT'
export const DECREMENT='DECREMENT'


//todo

export const ADD_TODO='ADD_TODO'
export const DELETE_TODO='DELETE_TODO'
export const CLEAR_ALL_TODO='CLEAR_ALL_TODO'


export const increment=()=>{
    return{
        type:INCREMENT
    }
}


export const decrement=()=>{
    return{
        type:DECREMENT
    }
}

export const addTodo=(content)=>{
    console.log(content)
    return{
        type:ADD_TODO,
        payload:content
    }
}

export const deleteTodo=(id)=>{
    return{
        type:DELETE_TODO,
        payload:id

    }
}

export const clearAll=()=>{
    return {
        type:CLEAR_ALL_TODO
    }
}