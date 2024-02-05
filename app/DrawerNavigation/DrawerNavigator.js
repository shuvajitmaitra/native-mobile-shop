import React from "react";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { SimpleLineIcons } from "@expo/vector-icons";
const Drawer = createDrawerNavigator();

import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { Button, TouchableOpacity } from "react-native";
import BottomNavigator from "../BottomNavigation/BottomNavigator";
import ScreenOne from "../Pages/ScreenOne";

const CustomDrawerContent = (props) => {

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label={"Home"}
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      />
      <DrawerItem
        label={"Profile"}
        onPress={() => {
          props.navigation.navigate("Profile");
        }}
      />
      <DrawerItem
        label={"Shop"}
        onPress={() => {
          props.navigation.navigate("Shop");
        }}
      />
    </DrawerContentScrollView>
  );
};
const DrawerNavigator = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerShown: false, drawerPosition: "right"}} drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="BottomNavigator" component={BottomNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
