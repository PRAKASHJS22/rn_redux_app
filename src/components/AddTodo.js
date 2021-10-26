import React,{useState} from 'react'
import {StyleSheet, TextInput, View,Text,Touch,FlatList,TouchableOpacity } from 'react-native'
import { useDispatch,useSelector} from 'react-redux'
import { addTodo,deleteTodo,clearAll} from '../redux/action/Action'

const AddTodo =() => {

const [todo, setTodo] = useState('')
const dispatch = useDispatch()

const todos = useSelector(state=>state.todo);

const handleAddTodo=()=>{
    if(!todo) return;
    dispatch(addTodo(todo))
    setTodo('')
}

const handleDeleteTodo=(id)=>{
     dispatch(deleteTodo(id))
}

const handleClearAll=()=>{
    dispatch(clearAll())
}



    return (
       <View style={styles.container}>

            <View>
                <Text style={styles.text0}>TODO LIST APP</Text>
            </View>

            <View style={styles.todoContainer}>
                <TextInput style={styles.text} placeholder="Enter Someting" value={todo} onChangeText={(val)=>setTodo(val)}></TextInput>
                <TouchableOpacity  onPress={handleAddTodo} style={styles.button}>
                    <Text style={styles.text2}>SAVE TODO</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={handleClearAll} style={{...styles.button,backgroundColor:'red'}}>
                    <Text style={styles.text2}>CLEAR ALL</Text>
                </TouchableOpacity>
            </View>

            <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
               
                    <FlatList 
                        data={todos}
                        // horizontal={true}
                        // ListFooterComponent={()=> <View style={{marginBottom:80}}></View>}
                        renderItem={({item}) => (
                            <View style={styles.todolistview}>
                                <Text style={styles.todolisttext}>{item.text}</Text>
                                <TouchableOpacity style={styles.tododelete} onPress={()=>handleDeleteTodo(item.id)}>
                                    <Text style={styles.tododeletetext} >Delete todo</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        keyExtractor={(item, index) => index}
                    />
            </View>
       </View>
       
    )
}


export default AddTodo

const styles=StyleSheet.create({
    container:{
        flex:1,
        margin:30,
        alignItems:'center',
        
    },
    text0:{
        fontSize:40,
        color:'purple',
        textDecorationLine:'underline'
    },
    todoContainer:{
        flexDirection:'row',
        margin:10,
        padding:10,
        alignContent:'space-around',
        alignItems:'center'

    },
    text:{
        borderWidth:1,
        width:"60%",
        borderRadius:10
    },
    button:{
        backgroundColor:'steelblue',
        width:"30%",
        height:"70%",
        // flex:.4,
        borderRadius:20,
        margin:10,

    },
    text2:{
        // flex:.5,
        alignContent:'center',
        textAlign:'center',
        justifyContent:'center',
        alignSelf:'center',
        color:"#fff",
        marginVertical:10
    },
    todolistview:{
        marginHorizontal:10,
        borderWidth:.5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'space-between',
        borderRadius:10,
        marginVertical:4
    },
    todolisttext:{
        fontSize:16,
        fontWeight:'bold',
        margin:4,
        color:'#000'
    },
    tododelete:{
        backgroundColor:'red',
        margin:5,
        borderRadius:5
    },
    tododeletetext:{
        color:'#fff',
        textAlign:'center',
        marginHorizontal:2
    }
})