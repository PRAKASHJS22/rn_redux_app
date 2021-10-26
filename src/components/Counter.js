import React from 'react'
import { TouchableOpacity, View,Text,StyleSheet } from 'react-native'
import {connect} from 'react-redux'
import { useDispatch,useSelector } from 'react-redux'
import { increment,decrement } from '../redux/action/Action'

const Counter = () => {

const dispatch = useDispatch()

const data = useSelector(state=>state.count)

const incr=()=>{
    dispatch(increment())
}
const decr=()=>{
    dispatch(decrement())
}

return (
    
        <View style={styles.container}>
            <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold'}}> The count value is :{data}</Text>
        
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity   onPress={incr}  style={styles.button}>
                    <Text style={styles.text} >INCREMENT</Text>
                </TouchableOpacity>
                
                <TouchableOpacity  onPress={decr} style={styles.button} >
                    <Text style={styles.text}>DECREMENT</Text>
                </TouchableOpacity>
             </View>
        </View>

    )
}


// const mapStateToProps=(state)=>{
//     return{
//         count:state.count
//     }

// }
// export default connect(mapStateToProps)(Counter)

export default Counter

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        backgroundColor:'steelblue',
        width:"30%",
        height:"70%",
        // flex:.4,
        borderRadius:20,
        margin:10,
    },
    text:{
        // flex:.5,
        alignContent:'center',
        textAlign:'center',
        justifyContent:'center',
        alignSelf:'center',
        color:"#fff",
        marginVertical:10

    }
})