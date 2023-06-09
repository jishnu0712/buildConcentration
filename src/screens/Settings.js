import { Text, View, Linking, TouchableOpacity } from 'react-native'
import ExitComponent from '../OtherComponents/ExitComponent'
import globalStyleSheet from '../styles/Stylesheet'
import DeviceInfo from 'react-native-device-info'
import { shareFile } from '../Helper/Helper'



const Settings = ({navigation}) => {
    const packageName = DeviceInfo.getBundleId()
    const playStoreURL = `https://play.google.com/store/apps/details?id=${packageName}`
    const sharableText = `An awosome concentration building App.\nDownload now\n${playStoreURL}`

    const contactEmailText = `mailto:concentration.build@gmail.com?subject=Build Concentration&body=Hi,\n`

    const privacyPolicyURL = `http://thejishnu.com/buildconcentration/privacy`
    const termsAndConditionURL = `http://thejishnu.com/buildconcentration/termscondition`

    return (
        <View style={globalStyleSheet.mainArea}>
            <ExitComponent navigation={navigation} />
            <Text style={{...globalStyleSheet.headerTextStyle, paddingBottom: 24}}>Settings</Text>

            <TouchableOpacity style={globalStyleSheet.settingListView} onPress={() => Linking.openURL(playStoreURL)}>
                <Text style={globalStyleSheet.settingListTitle}>Rate US</Text>
                <Text style={globalStyleSheet.settingListSubTitle}>We try out best for you!</Text>
            </TouchableOpacity>

            <TouchableOpacity style={globalStyleSheet.settingListView} onPress={() => shareFile(sharableText)}>
                <Text style={globalStyleSheet.settingListTitle}>Share App</Text>
                <Text style={globalStyleSheet.settingListSubTitle}>Share with your friends!</Text>
            </TouchableOpacity>

            <TouchableOpacity style={globalStyleSheet.settingListView} onPress={() => Linking.openURL(contactEmailText)}>
                <Text style={globalStyleSheet.settingListTitle}>Contact US</Text>
                <Text style={globalStyleSheet.settingListSubTitle}>Have question, always ready to replay!</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL(privacyPolicyURL)} style={{...globalStyleSheet.settingListView, marginTop: 20, }}>
                <Text style={{ fontFamily: 'serif', fontSize: 16, color: 'blue', textDecorationLine: 'underline' }}>Privacy Policy</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL(termsAndConditionURL)} style={{...globalStyleSheet.settingListView, marginTop: 4, }}>
                <Text style={{ fontFamily: 'serif', fontSize: 16, color: 'blue', textDecorationLine: 'underline' }}>Terms & Condition</Text>
            </TouchableOpacity>

        </View>

    )
}

export default Settings