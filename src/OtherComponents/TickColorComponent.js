import React, { useContext } from 'react'
import UserContext from '../context/Context'
import { View } from 'react-native'

const TickColorComponent = () => {
    const MyContext = useContext(UserContext);
  return (
    <View style={{ backgroundColor: MyContext.tickColor, width: 20, height: 20, borderRadius: 50 }}></View>
  )
}

export default TickColorComponent
