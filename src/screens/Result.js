import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import HomeBackButtonHandler from '../OtherComponents/HomeBackButtonHandler'
import badResult from '../images/badResult.png'
import globalStyleSheet from '../styles/Stylesheet'

const Result = ({ navigation, route }) => {
  const { rightAnswer, totalAnswered, title, subTitle } = route.params
  return (
    <>
      <HomeBackButtonHandler />

      <View style={styles.container}>
        <Text style={globalStyleSheet.headerTextStyle}>Result</Text>
        <Image source={badResult} style={{ alignSelf: 'center', width: 150, height: 150 }} />
        <View >
          <Text style={styles.resultFont}>Game Title : {title}</Text>
          <Text style={styles.resultFont}>Total Answered : {totalAnswered}</Text>
          <Text style={styles.resultFont}>Right Answer : {rightAnswer}</Text>
          <Text style={styles.resultFont}>Percentage : {Math.round((rightAnswer * 100) / totalAnswered)}%</Text>
        </View>

      </View>
    </>
  )
}

export default Result

const styles = StyleSheet.create({
  resultFont: {
    fontWeight: 600,
    fontSize: 16,
    fontFamily: 'serif',
    alignSelf: 'center'
  },
  container: {
    padding: 24,
    height: '80%',
    justifyContent: 'space-between',
    margin: 24,
  }
})