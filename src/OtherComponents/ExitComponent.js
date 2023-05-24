import { View, TouchableOpacity, Image} from 'react-native'
import styles from '../styles/ExitComponentsStyle'
import UserContext from '../context/Context'
import { useContext } from 'react'
const ExitComponent= ({navigation}) => {
    const crossIcon = require('../images/crossIcon.png')
    const MyContext = useContext(UserContext);
    const timer = require('../json/Timer.json')

    const GoBack = () => {
        MyContext.setIsGameStarted(false)
        MyContext.setSecond(timer.timer)
        navigation.goBack()
      }
    return (
        <View style={styles.exitView}>
          <TouchableOpacity onPress={GoBack}>
            <Image style={styles.crossIcon} source={crossIcon} />
          </TouchableOpacity>
        </View>
    )
}

export default ExitComponent