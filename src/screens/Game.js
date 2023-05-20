import { Text, View } from 'react-native'
import styleSheet from '../styles/Stylesheet'

const Game = ({navigation, route}) => {
  console.log(route.params.gameNo)
  return (
    <View>
      <Text>Game</Text>
    </View>
  )
}

export default Game

