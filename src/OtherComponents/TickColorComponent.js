import { View } from 'react-native'

const TickColorComponent = ({tickColor}) => {
  return (
    <View style={{ backgroundColor: tickColor, width: 20, height: 20, borderRadius: 50, alignSelf: 'flex-end' }}></View>
  )
}

export default TickColorComponent
