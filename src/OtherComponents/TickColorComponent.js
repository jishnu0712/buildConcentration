import React, { useContext } from 'react'
import UserContext from '../context/Context'
import { View } from 'react-native'

const TickColorComponent = ({tickColor}) => {
  console.log(tickColor);
  // const MyContext = useContext(UserContext);
  return (
    <View style={{ backgroundColor: tickColor, width: 20, height: 20, borderRadius: 50 }}></View>
  )
}

export default TickColorComponent
