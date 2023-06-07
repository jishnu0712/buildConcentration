import { TouchableOpacity, Text, View, FlatList, Image, BackHandler, ToastAndroid } from 'react-native'
import globalStyleSheet from '../styles/Stylesheet'
import UserContext from '../context/Context'
import { useContext, useState, useEffect } from 'react'



const Home = ({ navigation }) => {
  const MyContext = useContext(UserContext)
  const gamesList = require('../json/GamesList.json')
  const lockIcon = require('../../src/images/lock.png')

  const [lastBackPressTime, setLastBackPressTime] = useState(0)

  useEffect(() => {
    const onBackPress = () => {
      if(navigation.canGoBack()){
        navigation.goBack()
        return true
      }
      const currentTime = new Date().getTime()
      if (currentTime - lastBackPressTime < 2000) {
        BackHandler.exitApp()
      } else {
        setLastBackPressTime(currentTime)
        ToastAndroid.show('Press back again to exit', ToastAndroid.LONG)
        return true
      }
    }
    const backHandler = BackHandler.addEventListener('hardwareBackPress', onBackPress)
    return () => backHandler.remove()
  }, [lastBackPressTime])

  return (
    <>
      <View style={{ flexDirection: 'row-reverse', alignItems: 'baseline', backgroundColor : '#f5f8f9' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Image
            style={{ height: 24, width: 24, marginHorizontal: 12, marginVertical: 10, padding: 10 }}
            source={require('../images/setting.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={globalStyleSheet.mainArea}>
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

                <View style={{ position: 'absolute', alignSelf: 'flex-end', flexDirection: 'column', alignItems:'center', height: '100%', backgroundColor: 'red' }}>
                  <Image source={lockIcon}/>
                </View>
              </TouchableOpacity>
            </>
          )}
        />

      </View>
    </>
  )
}

export default Home