import React from 'react'
import { FlatList, View,Text } from 'react-native'
import { useSelector } from 'react-redux'

const TodoList = () => {

const todo = useSelector(state=>state.todo);
console.log(todo)

const DATA=[{
    name:"PRakash",
    age:25

}]
    return (
        <View >
            <FlatList 
                data={todo}
                // ListFooterComponent={()=> <View style={{marginBottom:80}}></View>}
                renderItem={({item}) => (

                    <View style={{backgroundColor:'yellow',marginHorizontal:10,borderWidth:1,marginTop:-10}}>
                        <Text style={{}}>{item.text}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index}
            />
            {/* {todo.map(todo=>(
                <Text>{todo.Text}</Text>
            ))} */}
        </View>
    )
}

export default TodoList
