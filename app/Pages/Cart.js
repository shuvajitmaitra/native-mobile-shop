import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { removeToCart } from "../Redux/CartSlice";
import { MaterialIcons } from '@expo/vector-icons';
const Cart = () => {
const items = useSelector(state => state.mobilesData)
console.log(items)
const dispatch = useDispatch()
const removeData = (index) => {
  dispatch(removeToCart(index))
}
  return (
    <ScrollView>
      {items?.map((item, index) => (
        <View
          key={index}
          style={{
            flexDirection: "row",
            margin: 5,
            backgroundColor: "#e9ecef",
            padding: 10,
          }}
        >
          <Image
            source={{ uri: item.image }}
            width={80}
            height={80}
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 4,
            }}
          />
          <View style={{ marginHorizontal: 10 }}>
            <Text style={{ fontWeight: 500 }}>Model: {item.model}</Text>
            <Text style={{ color: "gray", marginTop: 2 }}>
              Brand: {item.brand}
            </Text>
            <Text style={{ color: "gray", marginTop: 2 }}>
              Order: {item.order}
            </Text>
            <Text style={{ color: "gray", marginTop: 2 }}>
              Price:{" "}
              <Text style={{ color: "#e71d36" }}>$ {item.price}</Text>
            </Text>
          </View>

          {/* Column Two */}
          <View style={{ flexGrow: 1 }}></View>
          <TouchableOpacity
            onPress={() => {
             removeData(item.id)
            }}
          >
            <MaterialIcons
              name="remove-shopping-cart"
              size={24}
              color="#e71d36"
            />
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default Cart;
