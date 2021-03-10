import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { UserTypeScreen } from './src/pages/user-type-screen';
import { LoginScreen } from './src/pages/login-screen';
import { CreateAccoutScreen } from './src/pages/create-account-screen';
import { DashboardScreen } from './src/pages/dashboard-screen';
import { Palette } from './src/styles/palette';
import { Image } from 'react-native';
import { OrderScreen } from './src/pages/order-screen';

const Stack = createStackNavigator();

const HeaderLeft = () => <Image style={{ width: 40, height: 40 }} source={{ uri: 'https://gravatar.com/avatar/1c124f0f7d91cc5ccab3bc86cd534775?s=400&d=robohash&r=x' }} />

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="UserTypeScreen" component={UserTypeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="CreateAccoutScreen" component={CreateAccoutScreen} />
        <Stack.Screen options={{
          headerStyle: {
            backgroundColor: Palette.primaryLight
          },
          headerTitleStyle: {
            color: '#FFF'
          },
          title: 'Bem vindo, Chicão',
          headerRight: HeaderLeft
        }}
          name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen options={{
          headerStyle: {
            backgroundColor: Palette.primaryLight
          },
          headerTitleStyle: {
            color: '#FFF'
          },
          title: 'Pedidos',
          headerLeft: null as any
        }}
          name="OrderScreen" component={OrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


