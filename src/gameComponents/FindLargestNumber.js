import { Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import styles from '../styles/FindLargestNumStyleSheet'
import globalStyleSheet from '../styles/Stylesheet'
import ExitComponent from '../OtherComponents/ExitComponent'
import StartButtonComponent from '../OtherComponents/StartButtonComponent'
import UserContext from '../context/Context'
import {randomNumber} from '../Helper/Helper'
import TickColorComponent from '../OtherComponents/TickColorComponent'

const FindLargestNumber = ({ navigation, route }) => {
  const MyContext = useContext(UserContext);

  // const randomNumber = (min, max) => {
  //   return Math.floor(Math.random() * (max - min + 1)) + min
  // }

  const [leftVal, setLeftVal] = useState(randomNumber(0, 99))
  const [rightVal, setRightVal] = useState(randomNumber(0, 99))

  const [leftValue, setLeftValue] = useState(leftVal)
  const [rightValue, setRightValue] = useState(leftVal === rightVal ? rightVal + 1 : rightVal)
  const [rightAnswer, setRightAnswer] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [second, setSecond] = useState(50)
  // const [tickColor, setTickColor] = useState(null)

  useEffect(() => {
    let intervalId = null

    if (MyContext.gameStarted) {
      intervalId = setInterval(() => {
        setSecond(prevSecond => prevSecond - 1)
      }, 1000)
    }

    if (second === 0) {
      clearInterval(intervalId)
      navigation.navigate('Result', { ...route, totalAnswered: totalAnswered, rightAnswer: rightAnswer })
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [MyContext.gameStarted, second])

  const setTickColorAfterChange = () => {
    setTimeout(() => {
      MyContext.setTickColor(null)
    }, 200)
  }

  const changeNumber = button => {
    if (second === 0) {
      return false
    }
    if (button === 'left') {
      if (leftValue > rightValue) {
        setRightAnswer(prev => prev + 1)
        MyContext.setTickColor('green')
        setTickColorAfterChange()
      } else {
        MyContext.setTickColor('red')
        setTickColorAfterChange()
      }
    } else {
      if (leftValue < rightValue) {
        setRightAnswer(prev => prev + 1)
        MyContext.setTickColor('green')
        setTickColorAfterChange()
      } else {
        MyContext.setTickColor('red')
        setTickColorAfterChange()
      }
    }
    setTotalAnswered(prev => prev + 1)
    const lVal = randomNumber(0, 99)
    setLeftValue(lVal)
    const rVal = randomNumber(0, 99)
    setRightValue(rVal === lVal ? rVal + 1 : rVal)
  }

  return (
    <>
      <View style={globalStyleSheet.mainArea}>
        <ExitComponent navigation={navigation} />
        
        {!MyContext.gameStarted ? (
          <>
              <StartButtonComponent navigation={navigation} route={route}/>
          </>
        ) : (
          <>
            <View style={styles.timer}>
              <Text style={styles.timerText}>00:{second}</Text>
            </View>
            {/* <View style={{ backgroundColor: tickColor, width: 20, height: 20, borderRadius: 50 }}></View> */}
            <TickColorComponent/>
            <View style={styles.gameStartedView}>
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
          </>
        )}
      </View>
    </>
  )

}

export default FindLargestNumber