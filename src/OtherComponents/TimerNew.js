import { useContext, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import UserContext from '../context/Context';
import styles from '../styles/FindLargestNumStyleSheet'

const timer = require('../json/Timer.json')

const TimerNew = ({navigation, route, totalAnswered, rightAnswer}) => {
  const MyContext = useContext(UserContext)
  const [second, setSecond] = useState(timer.timer)

  useEffect(() => {
    let intervalId = null

    if (MyContext.gameStarted) {
      intervalId = setInterval(() => {
        setSecond(prevSecond => prevSecond - 1)
      }, 1000)
    }

    if (second === 0) {
      MyContext.setIsGameStarted(false)
      clearInterval(intervalId)
      navigation.navigate('Result', { ...route, totalAnswered, rightAnswer })
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [MyContext.gameStarted, second])



  return (
    <View style={styles.timer}>
        <Text style={styles.timerText}>00:{second.toString().length === 1 ? '0'+second : second }</Text>
    </View>
  )
}

export default TimerNew