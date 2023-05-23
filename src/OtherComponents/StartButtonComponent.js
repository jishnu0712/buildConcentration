import { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import UserContext from '../context/Context'
import globalStyleSheet from '../styles/Stylesheet'
import styles from '../styles/FindLargestNumStyleSheet'

const StartButtonComponent = ({navigation, route}) => {
    const MyContext = useContext(UserContext);
    const startGame = () => {
        MyContext.setIsGameStarted(prev => !prev)
    }
    return (
        <>
            <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
                <Text style={globalStyleSheet.headerTextStyle}>{route.title}</Text>
            </View>
            <View style={styles.startButtonView}>
                <TouchableOpacity onPress={startGame}>
                <Text style={styles.startButton}>Start</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default StartButtonComponent
