import React from "react";
import {
  DrawerContentScrollView,
  DrawerItem,
  createDrawerNavigator,
} from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigator from "../BottomNavigation/BottomNavigator";

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
