import { Text, View } from 'react-native'
import styleSheet from '../styles/Stylesheet'
import SelectRightColor from '../gameComponents/SelectRightColor'
const Game = ({navigation, route}) => {
  console.log(route.params.gameNo)
  return (
    <View>
      <SelectRightColor/>
    </View>
  )
}

export default Game

