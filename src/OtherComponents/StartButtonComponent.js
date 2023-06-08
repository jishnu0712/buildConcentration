import { View, Text, TouchableOpacity, Vibration } from 'react-native'
import styles from '../styles/FindLargestNumStyleSheet'
import globalStyleSheet from '../styles/Stylesheet'
import UserContext from '../context/Context'
import { useContext } from 'react'

const StartButtonComponent = ({navigation, route}) => {
    const MyContext = useContext(UserContext)
    const startGame = () => {
        MyContext.setIsGameStarted(prev => !prev)
        Vibration.vibrate(100)
    }
    return (
        <>
            <View style={{ marginHorizontal: 15 }}>
                <View>
                    <Text style={globalStyleSheet.headerTextStyle}>{route.title}</Text>
                </View>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 17, fontFamily: 'serif', }}>{route.subTitle}</Text>
                </View>
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
