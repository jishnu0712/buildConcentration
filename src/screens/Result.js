import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import HomeBackButtonHandler from '../OtherComponents/HomeBackButtonHandler'
import badResult from '../images/badResult.png'
import passedImage from '../images/pass.png'
import globalStyleSheet from '../styles/Stylesheet'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Result = ({ navigation, route }) => {
  let gamesList = require('../json/GamesList.json')
  const { rightAnswer, totalAnswered, title, subTitle, percentageofpassing, totalofpassing } = route.params
  const Percentage = Math.round((rightAnswer * 100) / totalAnswered)
  const isPassed = ((Percentage >= percentageofpassing) && (totalAnswered >= totalofpassing))

  if(isPassed && (route.params.index+1 !== gamesList.length)){
    gamesList[route.params.index+1].isopen = true
    const storeData = async () => {
      try {
        await AsyncStorage.setItem('gameList', JSON.stringify(gamesList));
        console.log('Data stored successfully!');
      } catch (error) {
        console.log('Error storing data:', error);
      }
    };
    
    storeData();
  }

  return (
    <>
      <HomeBackButtonHandler />
      <View style={{ backgroundColor: '#f5f8f9', height: '100%' }}>
        <View style={{  margin: 20,  }}>
          <Text style={globalStyleSheet.headerTextStyle}>Result</Text>
          <Text style={{ ...globalStyleSheet.settingListSubTitle, fontSize: 14}}>{title}</Text>

          <View style={globalStyleSheet.settingListView}>
            <Text style={globalStyleSheet.settingListTitle}>Percentage of correct answer : {Percentage ? Percentage : '0'}</Text>
            <Text style={globalStyleSheet.settingListSubTitle}>The minimum limit for passing : {percentageofpassing}%</Text>
          </View>

          <View style={globalStyleSheet.settingListView}>
            <Text style={globalStyleSheet.settingListTitle}>The number of rounds played : {totalAnswered}</Text>
            <Text style={globalStyleSheet.settingListSubTitle}>The minimum limit for passing : {totalofpassing}</Text>
          </View>

          <View style={{ marginTop: 80 }}>
            <View>
              <Image source={!isPassed ? badResult : passedImage} style={{ alignSelf: 'center', width: 100, height: 100 }} />
              <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontFamily: 'serif', fontSize: 18, marginTop: 10, color: 'black' }}>
                {!isPassed ? `Oops. You need to try\na little more!` : 'You passed the round.'}
              </Text>

            </View>
          </View>

          <View style={{ marginTop: 300 }}>
            <View style={globalStyleSheet.resultBottomButtonView}>
              <TouchableOpacity style={globalStyleSheet.resultBottomButton} onPress={() => navigation.popToTop()}>
                <Text style={globalStyleSheet.resultBottomButtonText}>Go to Home</Text>
              </TouchableOpacity>

              <TouchableOpacity style={globalStyleSheet.resultBottomButton} onPress={() => navigation.goBack()}>
                <Text style={globalStyleSheet.resultBottomButtonText}>Repeat</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </View>
    </>
  )
}

export default Result

// const styles = StyleSheet.create({
//   resultFont: {
//     fontWeight: 600,
//     fontSize: 16,
//     fontFamily: 'serif',
//     alignSelf: 'center'
//   },
//   container: {
//     padding: 24,
//     height: '80%',
//     justifyContent: 'space-between',
//     margin: 24,
//   }
// })