import { TouchableOpacity, Text, View, FlatList, Image, BackHandler, ToastAndroid } from 'react-native'
import globalStyleSheet from '../styles/Stylesheet'
import UserContext from '../context/Context'
import { useContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';


const Home = ({ navigation }) => {
  // AsyncStorage.clear()
  const isFocused = useIsFocused();
  const MyContext = useContext(UserContext)
  const [gamesList, setGamesList] = useState(null)
  const lockIcon = require('../../src/images/lock.png')

  const [lastBackPressTime, setLastBackPressTime] = useState(0)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedGamesList = await AsyncStorage.getItem('gameList');
        if (storedGamesList) {
          setGamesList(JSON.parse(storedGamesList));
        } else {
          const fallbackGamesList = require('../json/GamesList.json');
          setGamesList(fallbackGamesList);
        }
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, [isFocused]);


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
              <TouchableOpacity
                style={globalStyleSheet.excercises}
                onPress={item.isopen ? () => {
                  navigation.navigate('Game', {...item, index:index});
                } : 
                () => ToastAndroid.show('Before play you have to pass previous one.', ToastAndroid.SHORT)
              }
              >
                <Text >
                  <Text style={globalStyleSheet.serialNo}>{index + 1}. </Text>
                  <Text style={globalStyleSheet.excercisesName}>{item.title}</Text>
                </Text>

                <View>
                  <Text style={globalStyleSheet.descriptionText}>{item.subTitle}</Text>
                </View>
                { !item.isopen && 
                  <View style={globalStyleSheet.lockIconView}>
                    <Image source={lockIcon}/>
                  </View>
                }

              </TouchableOpacity>
            </>
          )}
        />

      </View>
    </>
  )
}

export default Home