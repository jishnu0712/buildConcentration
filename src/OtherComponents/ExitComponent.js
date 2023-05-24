import { View, TouchableOpacity, Image} from 'react-native'
import styles from '../styles/ExitComponentsStyle'
import UserContext from '../context/Context'
import { useContext } from 'react'
const ExitComponent= ({navigation}) => {
    const crossIcon = require('../images/crossIcon.png')
    const MyContext = useContext(UserContext);

    const GoBack = () => {
        MyContext.setIsGameStarted(false)
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