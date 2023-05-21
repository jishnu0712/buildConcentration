import React, { useState } from 'react'
import { View } from 'react-native'
import styleSheet from '../styles/Stylesheet'
import AllComponents from '../gameComponents/AllComponents'

const Game = ({ navigation, route }) => {

  const Comp = AllComponents[route.params.gameName]
  return (
    <View>
      <Comp/>
    </View>
  )
}

export default Game


