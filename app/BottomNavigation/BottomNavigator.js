import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import { SimpleLineIcons  } from "@expo/vector-icons";
import Shop from "../Pages/Shop";
import Cart from "../Pages/Cart";

const Tab = createBottomTabNavigator();
const BottomNavigator = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerRight: () => (
          <SimpleLineIcons 
            onPress={() => navigation.openDrawer()}
            name="menu"
            size={30}
            style={{color: "black",paddingHorizontal: 10}}
          />
        ),
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
