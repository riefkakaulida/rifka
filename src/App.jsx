import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import KasirApp from './screens/kasir';
import Account from './screens/account';
import kirim from './screens/kirim';
import Beranda from './screens/beranda';
import { StyleSheet } from 'react-native';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: '#FF5BAE',
      headerStyle: {backgroundColor: "#FF5BAE"},
      headerTitleStyle: {color: "black"}
    }}>
      <Tab.Screen name='Kasir' component={KasirApp} options={{
      tabBarLabel: 'Kasir',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="cash-register" color={color} size={25} />
      ), }} />
      <Tab.Screen name='Beranda' component={Beranda} options={{
      tabBarLabel: 'Beranda',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="home" color={color} size={25} />
      ), }} />
      <Tab.Screen name='Account' component={Account} options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={25} />
          ),
      }} />
      </Tab.Navigator>
  )
}

const App = () => {
    return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name='root' component={BottomTab} />
        <Stack.Screen name='Layanan' component={kirim} />
      </Stack.Navigator>
     </NavigationContainer>
  );
  };

  export default App;

  const styles = StyleSheet.create({});