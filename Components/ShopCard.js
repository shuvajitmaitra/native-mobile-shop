import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ShopCard = ({item}) => {
    const {model, brand, price, quantity, image} = item;
  return (
    <View style={{margin: 10, borderColor: "red", backgroundColor: "#EAE7DE", width: 200}}>
        <Image source={image}  />
      <Text><Text style={{fontWeight:"bold"}}>Model Name:</Text> {model}</Text>
      <View style={{flexDirection: "row",justifyContent: "space-evenly"}}>
        <Text style={{fontSize: 12}}>Price: {price}</Text>
        <Text style={{fontSize: 12}}>Quantity: {quantity} </Text>
      </View>
      <TouchableOpacity style={{alignItems:"center"}}>
        <Text style={{padding: 4, backgroundColor: "#65C1C3", width: 100, borderRadius: 10, textAlign: "center"}}>Add To Cart</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ShopCard