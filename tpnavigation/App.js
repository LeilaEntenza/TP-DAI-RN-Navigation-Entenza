import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-web';

const Tab = createBottomTabNavigator();

function Tabs() {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" />
      <Tab.Screen name="Contactar" />
      <Tab.Screen name="Reserva" />
      <Tab.Screen name="Informacion"/>
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
