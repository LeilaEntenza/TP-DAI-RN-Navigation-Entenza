import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';  
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useRoute } from '@react-navigation/native';
import React from 'react';

function ScreenHome1() {
  const navigation = useNavigation();
  return(
    <SafeAreaView style={styles.home}>
    <Text style={styles.textoPredeterminado}>Bienvenido!</Text>
    <Image style={styles.image}
        source={{
          uri: 'https://i.pinimg.com/736x/37/ed/47/37ed470cd6729954616baa2e8d8bf237.jpg',
        }}
      />
    <Text style={styles.textoPredeterminado}>¿Cómo te sentís el día de hoy :)?</Text>
    <TextInput style={styles.input} placeholder='Algo'/>
    <Pressable style={styles.button} onPress={() => navigation.navigate('ScreenHome2')}><Text style={styles.textoPredeterminado}>Comenzar</Text></Pressable>
    </SafeAreaView>
  );
}

function ScreenHome2() {
  const navigation = useNavigation();
  return(
    <SafeAreaView style={styles.home}>
    <Text style={styles.textoPredeterminado}>Estoy probando navigation en RN!</Text>
    <Text style={styles.textoPredeterminado}>This cat says hi!!</Text>
    <Image style={styles.image}
        source={{
          uri: 'https://i.pinimg.com/736x/4a/58/c8/4a58c821206a4b7534de8b3d4ed6ac85.jpg',
        }}
      />
    </SafeAreaView>
  );
}

function ScreenContactar1() {
  const navigation = useNavigation();
  const [nombre, setNombre] = React.useState('');
  const [telefono, setTelefono] = React.useState('');
  return(
    <SafeAreaView style={styles.contactar}>
    <Text style={styles.textoPredeterminado}>Contactar</Text>
    <TextInput style={styles.input} onChangeText={(text) => setNombre(text)} value={nombre} placeholder='Nombre'/>    
    <TextInput style={styles.input} onChangeText={(text) => setTelefono(text)} value={telefono} placeholder='Teléfono'/>
    <Pressable style={styles.button} title="Contactar" onPress={() => navigation.navigate('ScreenContactar2', {nombre, telefono})}><Text style={styles.textoPredeterminado}>Contactar</Text></Pressable>
    </SafeAreaView>
  );
}

function ScreenContactar2() {
  const navigation = useNavigation();
  const route = useRoute();
  const { nombre, telefono } = route.params;
  return(
    <SafeAreaView style={styles.contactar}>
    <Text style={styles.textoPredeterminado}>Gracias {nombre} pronto nos contactaremos al teléfono {telefono} :)</Text>
        <Image style={styles.image}
        source={{
          uri: 'https://i.pinimg.com/736x/73/a3/c3/73a3c3954647105bdcfd695ff6b635f1.jpg'
        }}
      />
    </SafeAreaView>
  );
}

function ScreenReserva1() {
  const navigation = useNavigation();
  return(
    <SafeAreaView style={styles.reserva}>
    <Text style={styles.textoPredeterminado}>Reserva</Text>
    <TextInput style={styles.input} placeholder='Nombre'/>
    <TextInput style={styles.input} placeholder='Teléfono'/>
    <TextInput style={styles.input} placeholder='Cantidad de personas'/>
    <Text style={styles.textoPredeterminado}>Restricciones alimentarias (en caso de no tener escribir "no")</Text>
    <TextInput style={styles.input} placeholder='Restricciones'/>
    <Pressable style={styles.button} onPress={() => navigation.navigate('ScreenReserva2')}><Text style={styles.textoPredeterminado}>Reservar</Text></Pressable>
    </SafeAreaView>
  );
}

function ScreenReserva2() {
  const navigation = useNavigation();
  return(
    <SafeAreaView style={styles.reserva}>
    <Text style={styles.textoPredeterminado}>Pronto nos pondremos en contacto para establecer la fecha en base a las mesas :)</Text>
    <Image style={styles.image} source={{uri: 'https://i.pinimg.com/736x/74/6a/db/746adbb898a813ea676ffccc1a03104c.jpg'}}/>
    </SafeAreaView>
  );
}

function ScreenInformacion1() {
  const navigation = useNavigation();
  return(
    <SafeAreaView style={styles.informacion}>
    <Text style={styles.textoPredeterminado}>Te gustaría que agreguemos sushi de chocolate al menú :D?</Text>
    <Pressable style={styles.button} onPress={() => navigation.navigate('ScreenInformacion2')}><Text style={styles.textoPredeterminado}>Sí</Text></Pressable>
    <Pressable style={styles.button} onPress={() => navigation.navigate('ScreenInformacion3')}><Text style={styles.textoPredeterminado}>No</Text></Pressable>
    </SafeAreaView>
  );
}
function ScreenInformacion2() {
  const navigation = useNavigation();
  return(
    <SafeAreaView style={styles.informacion}>
    <Text style={styles.textoPredeterminado}>:D</Text>
    <Image style={styles.image} source={{uri: 'https://i.pinimg.com/736x/7e/5f/4f/7e5f4f575eb03dcbc6c6ed7aa54f68c1.jpg'}}/>
    </SafeAreaView>
  );
}

function ScreenInformacion3() {
  const navigation = useNavigation();
  return(
    <SafeAreaView style={styles.informacion}>
    <Text style={styles.textoPredeterminado}>:(</Text>
    <Image style={styles.image} source={{uri: 'https://i.pinimg.com/736x/79/74/54/797454db238f199a56efd3fa2580a77c.jpg'}}/>
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
      <StackA.Screen name="ScreenHome" component={ScreenHome1}/>
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
      <StackD.Screen name="ScreenInformacion3" component={ScreenInformacion3}/>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgreen'
  },
  contactar: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow'
  },
  reserva: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue'
  },
  informacion: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink'
  },
  textoPredeterminado: {
    fontSize: 20,
    margin: 10,
    fontFamily: "sans-serif",
  },
   image: {
    margin: 20,
    width: 200,
    height: 200,
    borderRadius: 10,
     },
   input: {
    height: 50,
    backgroundColor: 'white',
    width: '80%',
    borderWidth: 1.5,
    margin: 5,
    borderRadius: 10,
    borderColor: 'black',
    padding: 5,
    fontSize: 20
   },
   button: {
    width: 300,
    height: 50,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black'
   }
});
