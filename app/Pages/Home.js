import React from "react";
import { View, Text, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import NewSlider from "../Components/NewSlider";
import { useSelector } from "react-redux";

const Home = () => {
const allData = useSelector(state=> console.log(JSON.stringify(state, null, 1)))
  return (
    <View>
   <View className='flex-row justify-between items-center p-2 border border-gray-400 mx-2 mt-3 rounded-xl '>
    <TextInput placeholder="Search mobile" className=''/>
    <AntDesign name="search1" size={24} color="#e71d36" className='font-3xl' />
   </View>
   <NewSlider/>
   <View>
    <Text></Text>
   </View>
    </View>
  );
};

export default Home;
