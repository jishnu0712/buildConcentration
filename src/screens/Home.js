import { TouchableOpacity, Text, View, SafeAreaView } from 'react-native'
import styleSheet from '../styles/Stylesheet'
import { useContext } from 'react'
import UserContext from '../context/Context';



const Home = ({navigation}) => {
  const myContext = useContext(UserContext)
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
  )
}

export default Home