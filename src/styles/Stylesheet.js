import { StyleSheet } from 'react-native'

const globalStyleSheet = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    height: '100%',
    // justifyContent: 'space-between',
    margin: 24,
},
  mainArea: {
    height: '100%',
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  headerTextStyle: {
    fontSize: 32,
    fontWeight: 800,
    color: 'black',
    fontFamily: 'serif'
  },
  //game screen
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
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 2
  },
  serialNo: {
    fontWeight: 'bold',
    fontSize: 35,
    color: 'black'
  },
  excercisesName: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 24,
    fontWeight: 400,
  },
  descriptionText: {
    color: 'gray'
  }
})

export default globalStyleSheet