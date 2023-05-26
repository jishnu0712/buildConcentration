import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import HomeBackButtonHandler from '../OtherComponents/HomeBackButtonHandler'
import badResult from '../images/badResult.png'

const Result = ({ navigation, route }) => {
  const { rightAnswer, totalAnswered, title, subTitle } = route.params
  return (
    <>
      <HomeBackButtonHandler />
      <Text style={styles.resultTitle}>Result</Text>
      <View style={styles.container}>
        <View >
          <Image source={badResult} style={{ alignSelf: 'center' }} />
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
  resultTitle: {
    fontWeight: '800',
    color: 'black',
    fontSize: 32,
    paddingTop: 12,
    textAlign: 'center',
    fontFamily: 'serif'

  },
  resultFont: {
    fontWeight: 600,
    fontSize: 16,
    fontFamily: 'monospace'
  },
  container: {
    padding: 24,
    height: '80%',
    justifyContent: 'center',
    // borderColor: 'red',
    // borderWidth: 1,
    margin: 24,
  }
})