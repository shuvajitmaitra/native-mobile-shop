import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'

const {width, height} = Dimensions.get('screen')
const SlideItem = ({item}) => {

  return (
    <View style={{width, height, backgroundColor: "white"}} className='py-10'>
        <Image source={{uri:item.image}} resizeMode='contain' className=' rounded-3xl' style={{width: "100%" , height: "60%"}}/>
      <View className='space-y-2'>
        <Text className='text-2xl font-medium text-center'>{item.model}</Text>
        <Text className='text-center text-gray-400'>{item.slogan}</Text>
        <Text className='font-bold text-3xl text-center'>$ {item.price}</Text>
      </View>
    </View>
  )
}

export default SlideItem;