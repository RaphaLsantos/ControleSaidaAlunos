import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

import lampada from './img/1.png';
import logo from './img/2.png';
import gif from './img/gif.gif';

export default function Home() {
    const navigation = useNavigation();

    const [carregar, setCarregar] = useState(true);

    useEffect(() =>{
        const timer = setTimeout(()=>{
            setCarregar(false);
            navigation.navigate('inicio');
            },  5000);

            return ()=> clearTimeout(timer);
        }, []);

    return(
        <View style={styles.container}>
            <View style={styles.nav}>
                <View style={{display:'flex', marginLeft:60, flexDirection:'row', alignItems:'center', marginTop:20}}>
                    <Text style={{fontWeight:'bold', color:'black', fontSize:20}}>Controle pedagógico da ETEC</Text>
                    <Image 
                    style={styles.images}
                    source={lampada}
                    />
                </View>
               
            </View>

            <View style={styles.container_home}>
                <Text style={{alignItems:'center', fontWeight:'bold', fontSize:30, color:'white',}}>Controle de alunos</Text>
                <Image
                    style={{width:200, height:200}}
                    source={logo}
                />
                <Image
                    style={styles.loading}
                    source={gif}
                />

            </View>
    
            <StatusBar style="auto" />
        </View>
    );
}