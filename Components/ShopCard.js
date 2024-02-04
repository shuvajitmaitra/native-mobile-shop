import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons';

const ShopCard = ({ item }) => {
  const { model, brand, price, quantity, image } = item;
  console.log(image);
  return (
    <View
      style={{
        margin: 10,
        borderColor: "red",
        backgroundColor: "#e9ecef",
        width: 170,
        height: 230,
        padding: 14,
        borderRadius: 5
      }}
    >
      <View style={{alignItems: "center", justifyContent: "center"}}>
        <Image
          source={{ uri: image }}
          width={120}
          height={120}
          style={{ alignItems: "center", justifyContent: "center",borderRadius:4 }}
        />
      </View>
      <Text style={{ fontSize: 12,marginTop: 3,fontWeight: "bold"  }}>
        Model: {model}
      </Text>
        <Text style={{ fontSize: 12, color: "gray", marginTop: 3 }}>Quantity: {quantity} </Text>
          {/* <View style={{ flexGrow: 1 }}></View> */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 3, alignItems: "center" }}>
        <Text style={{ fontSize: 12, color: "gray" }}>$ {price}</Text>
        <TouchableOpacity style={{ alignItems: "center" ,marginTop: 3}}>

          <AntDesign name="shoppingcart" style={{fontSize: 20,  backgroundColor: "#e71d36", padding: 6, borderRadius: 100, color: "white"}} />
      </TouchableOpacity>
      </View>
     
    </View>
  );
};

export default ShopCard;
