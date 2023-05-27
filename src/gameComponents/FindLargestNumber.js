import { Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import styles from '../styles/FindLargestNumStyleSheet'
import globalStyleSheet from '../styles/Stylesheet'
import ExitComponent from '../OtherComponents/ExitComponent'
import StartButtonComponent from '../OtherComponents/StartButtonComponent'
import UserContext from '../context/Context'
import { randomNumber } from '../Helper/Helper'
import TickColorComponent from '../OtherComponents/TickColorComponent'
import TimerComponent from '../OtherComponents/TimerComponent'
import TimerViewComponent from '../OtherComponents/TimerViewComponent'
const FindLargestNumber = ({ navigation, route }) => {
  const MyContext = useContext(UserContext);

  const [leftVal, setLeftVal] = useState(randomNumber(0, 99))
  const [rightVal, setRightVal] = useState(randomNumber(0, 99))

  const [leftValue, setLeftValue] = useState(leftVal)
  const [rightValue, setRightValue] = useState(leftVal === rightVal ? rightVal + 1 : rightVal)
  const [rightAnswer, setRightAnswer] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [tickColor, setTickColor] = useState(null)

  TimerComponent(navigation, route, totalAnswered, rightAnswer)

  const setTickColorAfterChange = () => {
    setTimeout(() => {
      setTickColor(null)
    }, 200)
  }

  const changeNumber = button => {
    if (MyContext.second === 0) {
      return false
    }
    if (button === 'left') {
      if (leftValue > rightValue) {
        setRightAnswer(prev => prev + 1)
        setTickColor('green')
        setTickColorAfterChange()
      } else {
        setTickColor('red')
        setTickColorAfterChange()
      }
    } else {
      if (leftValue < rightValue) {
        setRightAnswer(prev => prev + 1)
        setTickColor('green')
        setTickColorAfterChange()
      } else {
        setTickColor('red')
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
            <StartButtonComponent navigation={navigation} route={route} />
          </>
        ) : (
          <>
            <TimerViewComponent />
            <TickColorComponent tickColor = {tickColor}/>
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