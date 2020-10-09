
import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';



import RootStackScreen from './screens/RootStackScreen';


const App = () => {

  return (
  
    <NavigationContainer>
      <RootStackScreen/>
    </NavigationContainer>
  
  );
}

export default App;
