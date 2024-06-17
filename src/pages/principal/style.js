import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:'#2f4f4f',
        borderRadius:20,
    },
    /*nav*/
    nav:{
        position:'absolute',
        top:-20,
        backgroundColor:'white',
        width:'100%',
        height:85,
        justifyContent:'center',
        borderRadius:20, 
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        padding: 8,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    input_search: {
        flex: 1,
        fontSize: 16,
        marginLeft: 8,
        color: 'black',
    },
    searchIcon: {
        marginLeft: '30%',
    },



    /*add aluno(a)*/
    modal:{
      borderWidth:2,
      borderRadius:12,
      borderColor:'black',
    },
    modalContent: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
      width: '80%',
      elevation: 5,
      borderWidth:2,
      borderRadius:12,
      borderColor:'black',
    },
    corpo_add:{
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
    },
    add:{
        display:'flex',
        position:'absolute',
        alignItems:'center',
        top:60,
        left:'20%',
        flexDirection:'row',
        gap:50,
    },  
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end', 
        borderRadius:12,
        borderWidth:4,
        borderColor:'#2f4f4f'
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 16,
    },
    info: {
        marginBottom: 16,
    },
    infoText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
    },
    form: {
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
    },
    closeButton: {
        backgroundColor: '#0077FF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    closeButtonText: {
        color: 'white',
    },
    addButton: {
        backgroundColor: '#0077FF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 16,
    },
    addButtonText: {
        color: 'white',
    },



    /*inicio flatList*/
    flatList: {
        flex: 1,
        marginTop: '50%',
      },
      cardContent: {
        marginVertical: 10,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 3,
        width:350,
        display:'flex',
      },
      cardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
      },
      cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      cardText: {
        fontSize: 16,
      },
      deleteButton: {
        backgroundColor: '#ff6961',
        borderRadius: 8,
        marginTop: 10,
      },
      deleteButtonContainer: {
        padding: 10,
        alignItems: 'center',
      },
      deleteButtonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContent: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        width: '80%',
        elevation: 5,
      },
      modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
      },
      cancelButton: {
        flex: 1,
        marginRight: 10,
        backgroundColor: 'red',
        borderRadius: 8,
        padding:10
      },
      confirmButton: {
        flex: 1,
        marginLeft: 10,
        backgroundColor: 'green',
        borderRadius: 8,
        padding:10
      },
      buttonText: {
        textAlign: 'center',
        padding: 10,
        color: '#fff',
        fontWeight: 'bold',
      },
    /*final flatList*/




    /*inicio editar dados*/
  
    /*final editar dados*/
});