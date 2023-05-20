import { TouchableOpacity,Text, View } from 'react-native'
import styleSheet from '../styles/Stylesheet'

const Home = ({navigation}) => {
  return (
    <View style={styleSheet.mainArea}>
          <Text style={styleSheet.textStyle}>Excercises.</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('Game')}>
            <Text style={styleSheet.subtitleTextStyle}>
              1. Find Larger Number
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity>
            <Text style={styleSheet.subtitleTextStyle}>
              2. Select Color
            </Text>
          </TouchableOpacity>

        </View>
  )
}

export default Home