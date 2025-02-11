import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage1 from './screens/HomePage1';
import HomePage2 from './screens/HomePage2';
import HomePage3 from './screens/HomePage3';
import HomePage4 from './screens/HomePage4';
import HomePage5 from './screens/HomePage5';
import ticket from './screens/ticket';
import Battery_status from './screens/Battery_status';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomePage1" component={HomePage1} />
        <Stack.Screen name="HomePage2" component={HomePage2} />
        <Stack.Screen name="HomePage3" component={HomePage3} />
        <Stack.Screen name="HomePage4" component={HomePage4} />
        <Stack.Screen name="HomePage5" component={HomePage5} />
        <Stack.Screen name="ticket" component={ticket} />
        <Stack.Screen name="Battery_status" component={Battery_status} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
