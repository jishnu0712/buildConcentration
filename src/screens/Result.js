import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeBackButtonHandler from '../OtherComponents/HomeBackButtonHandler'

const Result = ({navigation, route}) => {
  const {rightAnswer, totalAnswered, title, subTitle} = route.params
  return (
    <>
      <HomeBackButtonHandler/>
      <View>
        <Text style={styles.resultTitle}>Result</Text>
        <Text style={styles.resultTitle}>Total Answered : {totalAnswered}</Text>
        <Text style={styles.resultTitle}>Right Answer : {rightAnswer}</Text>
        <Text style={styles.resultTitle}>Percentage : {Math.round((rightAnswer*100) / totalAnswered)}%</Text>
        <Text style={styles.resultTitle}>Game Title : {title}</Text>
        <Text style={styles.resultTitle}>Game Sub Title : {subTitle}</Text>
      </View>
    </>
  )
}

export default Result

const styles = StyleSheet.create({
  resultTitle: {
    fontWeight: 'bold',
    fontSize: 30
  }
})