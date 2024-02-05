import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import Data from '../Data/Data'
import SlideItem from './SlideItem'

const NewSlider = () => {
  return (
    <View>
     <FlatList data={Data} renderItem={({item})=><SlideItem key={item.id} item={item}/>}/>


    </View>
  )
}

export default NewSlider