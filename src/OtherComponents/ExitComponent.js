import { View, TouchableOpacity, Image} from 'react-native'
import styles from '../styles/ExitComponentsStyle'

const ExitComponent= ({navigation}) => {
    const crossIcon = require('../images/crossIcon.png')
    const GoBack = () => {
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