import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const BottomNavigator = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <MaterialIcons name="menu" size={24} color="red" style={{padding: 10}}/>
            {/* <Text style={{fontSize: 30}}>Menu</Text> */}
          </TouchableOpacity>
        ),
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
