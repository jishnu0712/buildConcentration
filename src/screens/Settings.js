import { Text, View } from 'react-native'
import globalStyleSheet from '../styles/Stylesheet'

const Settings = () => {
    return (
        <View style={globalStyleSheet.container}>
            <Text style={{...globalStyleSheet.headerTextStyle, paddingBottom: 24}}>Settings</Text>
            <Text style={globalStyleSheet.excercisesName}>Privacy Policy</Text>
            <Text style={globalStyleSheet.excercisesName}>Contact Us</Text>
            <Text style={globalStyleSheet.excercisesName}>Full version</Text>
            <Text style={globalStyleSheet.excercisesName}>Rate App</Text>
        </View>

    )
}

export default Settings