import { View, Text, Image } from 'react-native'
import React from 'react'

const SlideItem = ({item}) => {
  return (
    <View>
        <Image source={{uri:item.image}} resizeMode='contain' className='h-36'/>
      <View>
        <Text>{item.model}</Text>
      </View>
    </View>
  )
}

export default SlideItem