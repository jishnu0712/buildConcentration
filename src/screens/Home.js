import { TouchableOpacity, Text, View, SafeAreaView } from 'react-native'
import styleSheet from '../styles/Stylesheet'
import { useContext } from 'react'
import UserContext from '../context/Context';

const Home = ({ navigation }) => {

  const myContext = useContext(UserContext)

  return (
    <SafeAreaView style={myContext}>
      <View style={styleSheet.mainArea}>
        <Text style={styleSheet.textStyle}>Excercises.</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Game')}>
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
    </SafeAreaView>
  )
}

export default Home