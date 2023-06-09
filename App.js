import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import UserContext from './src/context/Context'
import Settings from './src/screens/Settings'
import Result from './src/screens/Result'
import { StatusBar } from 'react-native'
import Game from './src/screens/Game'
import Home from './src/screens/Home'
import { useState } from 'react'


const Stack = createNativeStackNavigator()

function App() {
  const [gameStarted, setIsGameStarted] = useState(false)
  
  const timer = require('./src/json/Timer.json')
  const [second, setSecond] = useState(timer.timer)
  const [colorIndex, setColorIndex] = useState(0)


  return (
    <>
      <StatusBar
          // animated={true}
          backgroundColor="#f5f8f9"
          // barStyle={statusBarStyle}
          // showHideTransition={statusBarTransition}
          // hidden={hidden}
          barStyle="dark-content"
        />
      <NavigationContainer>
        <UserContext.Provider value={{ gameStarted, setIsGameStarted, second, setSecond, colorIndex, setColorIndex }}>

          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Game" component={Game} options={{ headerShown: false }} />
            <Stack.Screen name="Result" component={Result} options={{ headerShown: false }} />
            <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
          </Stack.Navigator>
        </UserContext.Provider>
      </NavigationContainer>
    </>

  )
}

export default App
