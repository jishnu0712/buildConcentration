import { TouchableOpacity, Text, View, FlatList, Image } from 'react-native'
import globalStyleSheet from '../styles/Stylesheet'
import { useContext } from 'react'
import UserContext from '../context/Context'



const Home = ({ navigation }) => {
  const MyContext = useContext(UserContext)
  const gamesList = require('../json/GamesList.json')

  return (
    <View style={globalStyleSheet.mainArea}>
      <View style={{ flexDirection: 'row-reverse', alignItems: 'baseline', }}>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Image
            style={{ height: 24, width: 24 }}
            source={require('../images/setting.png')}
          />
        </TouchableOpacity>
      </View>
      <Text style={globalStyleSheet.headerTextStyle}>Excercises.</Text>
      <Text style={globalStyleSheet.descriptionText}>Practice daily to improve focus</Text>

      <FlatList
        style={{ width: '98%' }}
        data={gamesList}
        renderItem={({ item, index }) => (
          <>
            <TouchableOpacity style={globalStyleSheet.excercises} onPress={() => navigation.navigate('Game', item)}>
              <Text >
                <Text style={globalStyleSheet.serialNo}>{index + 1}. </Text>
                <Text style={globalStyleSheet.excercisesName}>{item.title}</Text>
              </Text>
              <View>
                <Text style={globalStyleSheet.descriptionText}>{item.subTitle}</Text>
              </View>
            </TouchableOpacity>
          </>
        )}
      />

    </View>
  )
}

export default Home