// In App.js in a new project

import * as React from 'react';
import { View, Text, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1}}>
      <ScrollView horizontal contentContainerStyle={{ height: 250, width: '200%' }} style={{ flex: 1 }}>
        <ImageBackground style={styles.image} source={{ uri: 'https://reactjs.org/logo-og.png' }}> 
        <View style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)' }}></View>
            <Text style={{ fontSize: 29, color: 'white' }}>MINHA NOTICIA</Text>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

function NoticiaScreen({ navigation }) {
  return (
    <View style={{ flex: 1}}>

    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Portal" component={HomeScreen} />
        <Stack.Screen name="Noticia" component={NoticiaScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  image:{
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    width: '50%'
  },
});


export default App;