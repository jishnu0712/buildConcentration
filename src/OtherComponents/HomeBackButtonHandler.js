import React, { useEffect } from 'react'
import { BackHandler } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const HomeBackButtonHandler = () => {
  const navigation = useNavigation()

  useEffect(() => {
    const backAction = () => {
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
