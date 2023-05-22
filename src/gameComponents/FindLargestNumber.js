import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from '../styles/FindLargestNumStyleSheet'
import globalStyleSheet from '../styles/Stylesheet'

const crossIcon = require('../images/crossIcon.png')

const FindLargestNumber = ({ navigation, route }) => {
  const GoBack = () => {
    navigation.goBack()
  }
  const [gameStarted, setIsGameStarted] = useState(false)


  const leftVal = Math.floor(Math.random() * 99)
  const rightVal = Math.floor(Math.random() * 99)

  const [leftValue, setLeftValue] = useState(leftVal)
  const [rightValue, setRightValue] = useState((leftVal === rightVal) ? rightVal + 1 : rightVal)
  const [rightAnswer, setRightAnswer] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [second, setSecond] = useState(50)
  const [tickColor, setTickColor] = useState(null)


  const startGame = () => {
    setIsGameStarted((prev) => !prev)
  }

  useEffect(() => {
    let intervalId = null

    if (gameStarted) {
      intervalId = setInterval(() => {
        setSecond((prevSecond) => prevSecond - 1)
      }, 1000)
    }

    if (second === 0) {
      clearInterval(intervalId)
      navigation.navigate('Result', { ...route, totalAnswered: totalAnswered, rightAnswer: rightAnswer })
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [gameStarted, second])

  const setTickColorAfterChange = () => {
    setTimeout(() => {
      setTickColor(null)
    }, 200)
  }

  const changeNumber = (button) => {
    if (second == 0) {
      return false
    }
    if (button == 'left') {
      if (leftValue > rightValue) {
        setRightAnswer((prev) => prev + 1)
        setTickColor('green')
        setTickColorAfterChange()
      } else {
        setTickColor('red')
        setTickColorAfterChange()
      }
    } else {
      if (leftValue < rightValue) {
        setRightAnswer((prev) => prev + 1)
        setTickColor('green')
        setTickColorAfterChange()

      } else {
        setTickColor('red')
        setTickColorAfterChange()
      }
    }
    setTotalAnswered((prev) => prev + 1)
    const lVal = Math.floor(Math.random() * 99)
    setLeftValue(lVal)
    const rVal = Math.floor(Math.random() * 99)
    setRightValue((rVal === lVal) ? rVal + 1 : rVal)
  }

  return (
    <>
      <View style={globalStyleSheet.mainArea}>
          <View style={styles.exitView}>
            <TouchableOpacity onPress={GoBack}>
              <Image style={styles.crossIcon} source={crossIcon} />
            </TouchableOpacity>
          </View>
        <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
          <Text style={globalStyleSheet.headerTextStyle}>Find Largest Number</Text>
          <View style={{ backgroundColor: tickColor, width: 20, height: 20, borderRadius: 50, }}></View>
        </View>
        {
          !gameStarted ? (
            <View style={styles.startButtonView}>
              <TouchableOpacity onPress={startGame}>
                <Text style={styles.startButton}>Start</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.gameStartedView}>
              <View style={styles.timer}>
                <Text style={styles.timerText}>00:{second}</Text>
              </View>
              <View>

                <View style={styles.numberButtonView}>
                  <TouchableOpacity style={styles.leftButton} onPress={() => changeNumber('left')}>
                    <Text style={styles.startButton}>{leftValue}</Text>
                  </TouchableOpacity>
                  <View style={styles.redDot}></View>
                  <TouchableOpacity style={styles.rightButton} onPress={() => changeNumber('right')}>
                    <Text style={styles.startButton}>{rightValue}</Text>
                  </TouchableOpacity>
                </View>

              </View>
            </View>
          )
        }

      </View>

    </>
  )
}

export default FindLargestNumber