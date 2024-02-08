import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Pages/Home";
import { SimpleLineIcons } from "@expo/vector-icons";
import Shop from "../Pages/Shop";
import Cart from "../Pages/Cart";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();
const BottomNavigator = ({ navigation }) => {
  const addedProduct = useSelector((state) => state.mobilesData.mobilesData);
  // console.log(JSON.stringify(addedProduct, null, 1))

  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerRight: () => (
          <SimpleLineIcons
            onPress={() => navigation.openDrawer()}
            name="menu"
            size={30}
            style={{ color: "black", paddingHorizontal: 10 }}
          />
        ),
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarActiveTintColor: "#e71d36",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home-outline"
              size={24}
              style={{
                fontSize: 24,
                color: focused ? "#e71d36" : "black",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarLabel: "Shop",
          tabBarActiveTintColor: "#e71d36",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="storefront-outline"
              size={24}
              style={{
                fontSize: 24,
                color: focused ? "#e71d36" : "black",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: "Cart",
          tabBarActiveTintColor: "#e71d36",
          tabBarIcon: ({ focused }) => (
            <View style={{ position: "relative" }}>
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  borderRadius: 100,
                  position: "absolute",
                  paddingHorizontal: 6,
                  top: -15,
                  right: -15,
                  backgroundColor: addedProduct.length && (focused ? "#e71d36" : "black"),
                }}
              >
                {addedProduct?.length && addedProduct?.length}
              </Text>
              <AntDesign
                name="shoppingcart"
                style={{
                  fontSize: 24,
                  color: focused ? "#e71d36" : "black",
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
