import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/screens/Home'
// import styleSheet from './src/styles/Stylesheet'
import Game from './src/screens/Game'
import Result from './src/screens/Result'
import UserContext from './src/context/Context'

const Stack = createNativeStackNavigator()

function App() {
  
  return (
    <NavigationContainer>
      <UserContext.Provider value={'dummy value'}>

        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Game" component={Game} options={{ headerShown: false }} />
          <Stack.Screen name="Result" component={Result} options={{ headerShown: false }} />
        </Stack.Navigator>
      </UserContext.Provider>
    </NavigationContainer>

  )
}

export default App
