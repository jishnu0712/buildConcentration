import React, { useContext } from 'react'
import styles from '../styles/FindLargestNumStyleSheet'
import UserContext from '../context/Context'
import { View, Text } from 'react-native'

const TimerViewComponent = () => {
    const MyContext = useContext(UserContext);
    return (
    <View style={styles.timer}>
        <Text style={styles.timerText}>00:{MyContext.second}</Text>
    </View>
    )
}

export default TimerViewComponent
