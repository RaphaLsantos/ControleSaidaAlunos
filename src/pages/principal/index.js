import { StatusBar, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableHighlight, Modal, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-web';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import imgADD from './assets/img/add.png';

export default function inicio() {
    const [searchText, setSearchText] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [modal, setModal] = useState(false);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [idade, setIdade] = useState('');
    const [addAlunos, setAddAlunos] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [cardToDeleteIndex, setCardToDeleteIndex] = useState(null);
    const [filteredAlunos, setFilteredAlunos] = useState([]);
    const [modalEdit, setModalEdit] = useState(false);
    const [editedNome, setEditedNome] = useState('');


    {/*inicio update*/}
    const atualizarDados = (novoNome) => {

    const alunoId = addAlunos[index].id;
    fetch(`http://localhost/apiAgenda/salvar.php?id=${alunoId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome: novoNome }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Atualizar o estado local com os dados atualizados
          const novaLista = addAlunos.map((aluno) =>
            aluno.id === alunoId ? { ...aluno, nome: novoNome } : aluno
          );
          setAddAlunos(novaLista);
        } else {
          console.error("Erro ao atualizar aluno no servidor:", data.error);
        }
      })
      .catch((error) =>
        console.error("Erro ao atualizar aluno no servidor:", error)
      );
  };
    {/*final update*/}


    useEffect(() => {
        fetch("http://localhost/apiAgenda/selectAll.php")
          .then((response) => response.json())
          .then((data) => setAddAlunos(data))
          .catch((error) =>
            console.error("Erro ao obter alunos do servidor:", error)
          );
      }, [{addAlunos}]);
      
      
        
    const openModalEdit = () => {
        setModalEdit(true);
    };
    
    const closeModalEdit = () => {
        setModalEdit(false);
    };
    


    const openModal = () => {
        setModal(true);
    };
    
    const closeModal = () => {
        setModal(false);
    };
    

      const adicionarAluno = () => {
        const novoAluno = {
          nome: nome,
          email: email,
          telefone: telefone,
          idade: idade,
            };
        
            fetch("http://localhost/apiAgenda/salvar.php", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(novoAluno),
              })
                .then((response) => response.json())
                .then((data) => {
                  if (data.success) {
                    setAddAlunos(data.alunos);
              
                  } else {
                    console.error("Erro ao adicionar aluno no servidor:", data.error);
                  }
                })
                .catch((error) =>
                  console.error("Erro ao adicionar aluno no servidor:", error)
                );
                closeModal();
                
      };
    


      const removerCard = (index) => {
        setCardToDeleteIndex(index);
        setModalVisible(true);
      };
    
      const excluirCard = (index) => {
        const alunoId = addAlunos[index].id;
    
        fetch(`http://localhost/apiAgenda/excluir.php?id=${alunoId}`, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    const novaLista = addAlunos.filter((aluno) => aluno.id !== alunoId);
                    setAddAlunos(novaLista);
                } else {
                    console.error("Erro ao excluir aluno no servidor:", data.error);
                }
    
                setModalVisible(false);
            })
            .catch((error) =>
                console.error("Erro ao excluir aluno no servidor:", error)
            );
    };
    
      
    
      const filterAlunos = () => {
        const filtered = addAlunos.filter((aluno) => {
          const alunoData = `${aluno.nome} ${aluno.email} ${aluno.telefone} ${aluno.idade}`.toLowerCase();
          return alunoData.includes(searchText.toLowerCase());
        });
        setFilteredAlunos(filtered);
      };
    
      useEffect(() => {
        filterAlunos();
      }, [searchText, addAlunos]);


    return(
        <View style={styles.container}>
            {/*inicio nav*/} 
            <View style={styles.nav}>
                <View style={{display:'flex', marginLeft:60, flexDirection:'row', alignItems:'center', marginTop:20}}>
                {/*Caixa de texto inicio*/} 
                <Animatable.View
                        style={isFocused ? styles.inputContainerFocused : styles.inputContainer}
                        animation={isFocused ? 'fadeIn' : undefined}
                        duration={300}
                    >
                        <TextInput
                        style={styles.input_search}
                        placeholder="Pesquisar..."
                        placeholderTextColor="#a9a9a9"
                        value={searchText}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onChangeText={(text) => setSearchText(text)}
                        />
                    </Animatable.View>
                    <Icon
                        name="search"
                        size={20}
                        color="#2f4f4f"
                        style={styles.searchIcon}
                        onPress={() => setSearchText('')}
                    />
                {/*Caixa de texto final*/} 
                </View>
                {/*final nav*/} 



                {/*inicio adicionar aluno(a)*/}  
                <View style={styles.corpo_add}>
                    <View style={styles.add}>
                        <Text style={{fontWeight:'bold', color:'white', fontSize:20}}>Adicionar aluno(a)</Text>
                        {/*inicio modal add*/}
                        <TouchableHighlight
                        onPress={openModal}
                        > 
                        <Image
                            style={{width:40, height:40, display:'flex'}}
                            source={imgADD}
                        />
                        </TouchableHighlight>

                        <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modal}
                        >
                        <Animatable.View
                            style={styles.modalContainer}
                            animation={modal ? 'slideInUp' : 'slideOutDown'}
                            duration={500}
                            useNativeDriver
                        >
                           <View style={styles.modalContent}>
                            <View style={styles.info}>
                                <Text style={styles.infoText}>Informe os dados logo abaixo:</Text>
                            </View>
                            <View style={styles.form}>
                                <TextInput
                                placeholder="Nome"
                                style={styles.input}
                                onChangeText={(text) => setNome(text)}
                                />
                                <TextInput
                                placeholder="Email institucional"
                                style={styles.input}
                                onChangeText={(text) => setEmail(text)}
                                />
                                <TextInput
                                placeholder="Telefone"
                                style={styles.input}
                                onChangeText={(text) => setTelefone(text)}
                                />
                                <TextInput
                                placeholder="Idade"
                                style={styles.input}
                                onChangeText={(text) => setIdade(text)}
                                />
                            </View>
                            <TouchableHighlight
                                style={styles.addButton}
                                onPress={adicionarAluno} 
                            >
                                <Text style={styles.addButtonText}>Adicionar Aluno(a)</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.closeButton} onPress={closeModal}>
                                <Text style={styles.closeButtonText}>Fechar Modal</Text>
                            </TouchableHighlight>
                            </View>
                        </Animatable.View>
                        </Modal>
                        {/*final modal add*/}
                    </View>
                </View>
                {/*final adicionar aluno(a)*/}
            </View>

            {/*inicio flatList*/}
            <View style={styles.flatList}>
                <FlatList
                    data={filteredAlunos.length > 0 ? filteredAlunos : addAlunos}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                      <Animatable.View
                        style={styles.cardContainer}
                        animation="fadeInUp"
                        delay={100 * index}
                      >
                        <View style={styles.cardContent}>
                        <View style={styles.cardRow}>
                            <View style={{display:'flex', flexDirection:'row', gap:'80%'}}>
                                <Text style={styles.cardTitle}>ID:</Text>
                                <Icon onPress={openModalEdit} name="edit" size={30} color="#000" />
                            </View>    
                            <Text style={styles.cardText}>{index + 1}</Text>
                        </View>
                        <View style={styles.cardRow}>
                            <Text style={styles.cardTitle}>Nome:</Text>
                            <Text style={styles.cardText}>{item.nome}</Text>
                        </View>
                        <View style={styles.cardRow}>
                            <Text style={styles.cardTitle}>Email institucional:</Text>
                            <Text style={styles.cardText}>{item.email}</Text>
                        </View>
                        <View style={styles.cardRow}>
                            <Text style={styles.cardTitle}>Telefone:</Text>
                            <Text style={styles.cardText}>{item.telefone}</Text>
                        </View>
                        <View style={styles.cardRow}>
                            <Text style={styles.cardTitle}>Idade:</Text>
                            <Text style={styles.cardText}>{item.idade}</Text>
                        </View>
                        <TouchableHighlight
                            style={styles.deleteButton} // Estilos para o contêiner do botão
                            onPress={() => removerCard(index)}
                            >
                            <View style={styles.deleteButtonContainer}>
                                <Text style={styles.deleteButtonText}>Apagar</Text> 
                            </View>
                        </TouchableHighlight>
                        {/*Modal apagar card inicio*/}
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            >
                            <View style={styles.modalContainer}>
                                <Animatable.View
                                style={styles.modalContent}
                                animation="zoomIn" 
                                duration={500}
                                useNativeDriver
                                >
                                <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20,}}>Deseja apagar</Text>
                               <View style={styles.modalButtons}>
                                    <TouchableOpacity
                                        style={styles.cancelButton}
                                        onPress={() => setModalVisible(false)}
                                    >
                                        <View style={styles.buttonContainer}>
                                        <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>Cancelar</Text> 
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.confirmButton}
                                        onPress={() => {
                                        excluirCard(cardToDeleteIndex);
                                        setModalVisible(false);
                                        }}
                                    >
                                        <View style={styles.buttonContainer}> 
                                        <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>Confirmar</Text> 
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                </Animatable.View>
                            </View>
                        </Modal>
                        {/*Modal apagar card final*/}
                        </View>
                    </Animatable.View>
                    )}
                />
            </View>
            {/*final flatList*/}




            {/*inicio modal editar card*/}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalEdit}
                >
                <View style={styles.modalContainer}>
                    <Animatable.View
                    style={styles.modalContent}
                    animation="zoomIn" 
                    duration={500}
                    useNativeDriver
                    >
                    <View style={styles.modalButtons}>
                        <Text>Editar dados</Text>
                        {/*dados salvos inicio*/}
                        {/*dados salvos inicio*/}
                        <TouchableOpacity
                            style={styles.cancelButton}
                            onPress={() => setModalEdit(false)}
                        >
                            <View style={styles.buttonContainer}>
                            <Text style={styles.cancelButtonText}>Cancelar</Text> 
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.cancelButton}
                            onPress={() => setModalEdit(false)}
                        >
                            <View style={styles.buttonContainer}>
                            <Text style={styles.cancelButtonText}>Confirmar</Text> 
                            </View>
                        </TouchableOpacity>
                    </View>
                    </Animatable.View>
                </View>
            </Modal>
            {/*final modal editar card*/}
                    
            <StatusBar style="auto" />
        </View>
    );
}