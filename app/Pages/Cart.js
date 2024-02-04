import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeToCart } from "../Redux/CartSlice";

const Cart = () => {
const removed = useSelector(state => state.actions)
const dispatch = useDispatch()
const removeData = (index) => {
  dispatch(removeToCart(index))
}
  return (
    <ScrollView>
      {item?.map((singleItem) => (
        <View
          key={singleItem.index}
          style={{
            flexDirection: "row",
            margin: 5,
            backgroundColor: "#e9ecef",
            padding: 10,
          }}
        >
          <Image
            source={{ uri: singleItem.image }}
            width={80}
            height={80}
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 4,
            }}
          />
          <View style={{ marginHorizontal: 10 }}>
            <Text style={{ fontWeight: 500 }}>Model: {singleItem.model}</Text>
            <Text style={{ color: "gray", marginTop: 2 }}>
              Brand: {singleItem.brand}
            </Text>
            <Text style={{ color: "gray", marginTop: 2 }}>
              Price:{" "}
              <Text style={{ color: "#e71d36" }}>$ {singleItem.price}</Text>
            </Text>
          </View>

          {/* Column Two */}
          <View style={{ flexGrow: 1 }}></View>
          <TouchableOpacity
            onPress={() => {
             removeData(singleItem.index)
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
