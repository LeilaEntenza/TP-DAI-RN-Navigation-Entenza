import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-web';  
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

function ScreenHome1() {
  const navigation = useNavigation();
  return(
    <SafeAreaView style={styles.home}>
    <Text>Bienvenido!</Text>
    <TextInput placeholder='Algo'/>
    <Pressable title="Comenzar" onPress={() => navigation.navigate('ScreenHome2')}><Text>Comenzar</Text></Pressable>
    </SafeAreaView>
  );
}

function ScreenHome2() {
  const navigation = useNavigation();
  return(
    <SafeAreaView>
    <Text>Bienvenido!</Text>
    <TextInput placeholder='Algo'/>
    <Pressable title="Comenzar"><Text>Comenzar</Text></Pressable>
    </SafeAreaView>
  );
}

function ScreenContactar1() {
  const navigation = useNavigation();
  return(
    <SafeAreaView>
    <Text>Contactar</Text>
    <TextInput placeholder='Nombre'/>
    <TextInput placeholder='Teléfono'/>
    <Pressable title="Contactar" onPress={() => navigation.navigate('ScreenContactar2')}><Text>Contactar</Text></Pressable>
    </SafeAreaView>
  );
}

function ScreenContactar2() {
  const navigation = useNavigation();
  return(
    <SafeAreaView>
    <Text>Gracias nombre pronto nos contactaremos al teléfono teléfono</Text>
    <TextInput placeholder='Nombre'/>
    <TextInput placeholder='Teléfono'/>
    <Pressable title="Contactar"><Text>Contactar</Text></Pressable>
    </SafeAreaView>
  );
}

function ScreenReserva1() {
  const navigation = useNavigation();
  return(
    <SafeAreaView>
    <Text>Reserva</Text>
    <TextInput placeholder='Nombre'/>
    <TextInput placeholder='Teléfono'/>
    <TextInput placeholder='Cantidad de personas'/>
    <Pressable title="Reservar" onPress={() => navigation.navigate('ScreenReserva2')}><Text>Reservar</Text></Pressable>
    </SafeAreaView>
  );
}

function ScreenReserva2() {
  const navigation = useNavigation();
  return(
    <SafeAreaView>
    <Text>Restricciones alimentarias (en caso de no tener escribir "no")</Text>
    <TextInput placeholder='Restricciones'/>
    <Pressable title="Finalizar"><Text>Finalizar</Text></Pressable>
    </SafeAreaView>
  );
}

function ScreenInformacion1() {
  const navigation = useNavigation();
  return(
    <SafeAreaView>
    <Text>Hay algo que te gustaría añadir a nuestro menú?</Text>
    <Pressable title="Si" onPress={() => navigation.navigate('ScreenInformacion2')}><Text>Sí</Text></Pressable>
    <Pressable title="No"><Text>No</Text></Pressable>
    </SafeAreaView>
  );
}
function ScreenInformacion2() {
  const navigation = useNavigation();
  return(
    <SafeAreaView>
    <Text>¿Qué te gustaría añadir?</Text>
    <TextInput placeholder='Nuevas comidas'/>
    <Pressable title="Enviar"><Text>Enviar</Text></Pressable>
    </SafeAreaView>
  );
}

const StackA = createNativeStackNavigator();
const StackB = createNativeStackNavigator();
const StackC = createNativeStackNavigator();
const StackD = createNativeStackNavigator();

function StackANavigator(){
  return(
    <StackA.Navigator>
      <StackA.Screen name="ScreenHome1" component={ScreenHome1}/>
      <StackA.Screen name="ScreenHome2" component={ScreenHome2}/>
    </StackA.Navigator>
  );
}

function StackBNavigator(){
  return(
    <StackB.Navigator>
      <StackB.Screen name="ScreenContactar1" component={ScreenContactar1}/>
      <StackB.Screen name="ScreenContactar2" component={ScreenContactar2}/>
    </StackB.Navigator>
  );
}

function StackCNavigator(){
  return(
    <StackC.Navigator>
      <StackC.Screen name="ScreenReserva1" component={ScreenReserva1}/>
      <StackC.Screen name="ScreenReserva2" component={ScreenReserva2}/>
    </StackC.Navigator>
  );
}

function StackDNavigator(){
  return(
    <StackD.Navigator>
      <StackD.Screen name="ScreenInformacion1" component={ScreenInformacion1}/>
      <StackD.Screen name="ScreenInformacion2" component={ScreenInformacion2}/>
    </StackD.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function Tabs() {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={StackANavigator} options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={20} color={color} />          
            ),
        }}/>
      <Tab.Screen name="Contactar" component={StackBNavigator} options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="contact-book" size={20} color={color} />          
            ),
        }}/>
      <Tab.Screen name="Reserva" component={StackCNavigator} options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="note-sticky" size={20} color={color} />            
            ),
        }}/>
      <Tab.Screen name="Informacion" component={StackDNavigator} options={{
          tabBarIcon: ({ color }) => (
          <FontAwesome5 name="info" size={20} color={color} />           
           ),
        }}/>
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
  home: {
    flex:1,
    backgroundColor: 'green'
  }
});
