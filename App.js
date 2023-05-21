import React, { useEffect, useState } from 'react';
import {
  useColorScheme,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styleSheet from './src/styles/Stylesheet';
import Game from './src/screens/Game';
import Result from './src/screens/Result';
import UserContext from './src/context/Context';

const Stack = createNativeStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  const [backgroundStyle, setBackgroundStyle] = useState( {backgroundColor: isDarkMode ? Colors.darker : Colors.lighter})

  useEffect(()=> {
    setBackgroundStyle({backgroundColor: isDarkMode ? Colors.darker : Colors.lighter})
  },[])
  
  return (
    <NavigationContainer>
      <UserContext.Provider value={backgroundStyle}>

        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Game" component={Game} options={{ headerShown: false }} />
          <Stack.Screen name="Result" component={Result} options={{ headerShown: false }} />
        </Stack.Navigator>
      </UserContext.Provider>
    </NavigationContainer>

  );
}

export default App;
