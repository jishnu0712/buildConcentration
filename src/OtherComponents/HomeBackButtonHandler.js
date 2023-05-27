import React, { useEffect, useContext } from 'react'
import { BackHandler } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import UserContext from '../context/Context'

const HomeBackButtonHandler = () => {
  const MyContext = useContext(UserContext)
  const navigation = useNavigation()
  const timer = require('../json/Timer.json')

  useEffect(() => {
    const backAction = () => {
      MyContext.setIsGameStarted(false)
      MyContext.setSecond(timer.timer)
      navigation.popToTop()
      return true
    }

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    )

    return () => backHandler.remove()
  }, [navigation])

  return null
}

export default HomeBackButtonHandler
