import { StyleSheet } from 'react-native'

const styleSheet = StyleSheet.create({
    mainArea: {
        height: '100%',
        paddingVertical: 16,
        paddingHorizontal: 12,
    },
    textStyle: {
        fontSize: 36,
        fontWeight: 600,
    },
    subtitleTextStyle: {
        fontSize: 24,
        fontWeight: 400,
        // color: 'black'
    },
    //game screen
    


    // react native default styles (use as reference)
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
      },
      sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
      },
      highlight: {
        fontWeight: '700',
      },
      excercises: {
        // backgroundColor: 'white',
        // marginTop: 10,
        // padding: 15,
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 2
      },
      serialNo: {
        fontWeight: 'bold',
        fontSize: 35
      },
      excercisesName: {
        fontWeight: 'bold'
      }
})

export default styleSheet