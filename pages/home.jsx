import {View} from 'react-native';
import React from 'react';;
import Header from '../components/home/Header';
import SearchBar from '../components/home/SearchBar';
import MenuBar from '../components/home/MenuBar';
import AdSection from '../components/home/AdSection';
import ScrollProducts from '../components/home/ScrollProducts';

function Home(){
    return(
        <View>
            <Header/>
            <SearchBar/>
            <AdSection/>
            <MenuBar/>
            <ScrollProducts/>
        </View>
    );
}


export default Home;

