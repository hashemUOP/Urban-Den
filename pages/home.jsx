import {View} from 'react-native';
import React from 'react';;
import Header from '../components/home/Header';
import SearchBar from '../components/home/SearchBar';
import MenuBar from '../components/home/MenuBar';
import AdSection from '../components/home/AdSection';
import ScrollProducts from '../components/home/ScrollProducts';
import Footer from '../components/home/Footer';

function Home({navigation}){
    return(
        <View style={{ flex: 1 }}>
            <Header/>
            <SearchBar navigation={{navigation}}/>
            <MenuBar/>
            <ScrollProducts navigation={navigation}/>
            <Footer/>
        </View>
    );
}


export default Home;

