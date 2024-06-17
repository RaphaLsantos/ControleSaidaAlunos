import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:'#2f4f4f',
        borderRadius:20,
    },
    container_home:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:-50,
        gap:60,
    },
    nav:{
        position:'absolute',
        top:-20,
        backgroundColor:'white',
        width:'100%',
        height:85,
        justifyContent:'center',
        borderRadius:20, 
    },
    images:{
        width:50,
        height:50,
    },
    loading:{
        position:'absolute',
        top:250,
        height:200,
        width:500,
    },
});