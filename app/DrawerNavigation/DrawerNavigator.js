import { createDrawerNavigator } from "@react-navigation/drawer";
import { SimpleLineIcons } from "@expo/vector-icons";
const Drawer = createDrawerNavigator();
import React from "react";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerLabel: "Home",
            title: "Home",
            drawerIcon: () => (
              <SimpleLineIcons name="home" size={24} color="black" />
            ),
            headerTitleAlign: "center",
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{
            drawerLabel: "Profile",
            title: "Profile",
            drawerIcon: () => (
              <SimpleLineIcons name="user" size={24} color="black" />
            ),
            headerTitleAlign: "center",
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
