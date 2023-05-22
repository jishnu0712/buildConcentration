import { TouchableOpacity, Text, View, SafeAreaView, FlatList } from 'react-native'
import styleSheet from '../styles/Stylesheet'
import { useContext } from 'react'
import UserContext from '../context/Context'



const Home = ({ navigation }) => {
  const myContext = useContext(UserContext)
  const gamesList = require('../json/GamesList.json')
  return (
    <View style={styleSheet.mainArea}>
      <Text style={styleSheet.headerTextStyle}>Excercises.</Text>
      <Text style={styleSheet.excerciseDescription}>Practice daily to improve focus</Text>

      <FlatList
        style={{ width: '98%' }}
        data={gamesList}
        renderItem={({ item, index }) => (
          <>
            <TouchableOpacity style={styleSheet.excercises} onPress={() => navigation.navigate('Game', item)}>
              <Text >
                <Text style={styleSheet.serialNo}>{index + 1}. </Text>
                <Text style={styleSheet.excercisesName}>{item.title}</Text>
              </Text>
              <View>
                <Text style={styleSheet.excerciseDescription}>{item.subTitle}</Text>
              </View>
            </TouchableOpacity>
          </>
        )}
      />

    </View>
  )
}

export default Home