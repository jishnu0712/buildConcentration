import { TouchableOpacity,Text, View, FlatList, SafeAreaView } from 'react-native'
import styleSheet from '../styles/Stylesheet'
import { useContext } from 'react'
import UserContext from '../context/Context';

const Home = ({ navigation }) => {

  const myContext = useContext(UserContext)

const Home = ({navigation}) => {
  const games = require('../json/GamesList.json')
  return (
    <View style={styleSheet.mainArea}>
          <Text style={styleSheet.textStyle}>Excercises.</Text>
          <FlatList
          style={{ width: '98%' }}
          data={games}
          renderItem={({ item, index }) => (
            <>
              <TouchableOpacity style={styleSheet.excercises} onPress={()=>navigation.navigate('Game', {gameNo : index + 1})}>
                <Text style={styleSheet.subtitleTextStyle}>
                  <Text style={styleSheet.serialNo}>{index + 1}.</Text> <Text style={styleSheet.excercisesName}>{item.title}</Text>
                </Text>
                <View>
                  <Text>{item.subTitle}</Text>
                </View>
              </TouchableOpacity>
            </>
          )}
        />

    </View>

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