import { StyleSheet } from 'react-native'

const globalStyleSheet = StyleSheet.create({
  container: {
    height: '100%',
  },
  mainArea: {
    height: '100%',
    paddingHorizontal: 12,
    backgroundColor: '#f5f8f9'
  },
  headerTextStyle: {
    fontSize: 32,
    fontWeight: 800,
    color: 'black',
    fontFamily: 'serif',
  },
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
    fontFamily: 'serif',
  },
  descriptionText: {
    color: 'gray',
    fontFamily: 'serif',
  },
  settingListTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    fontFamily: 'serif',
  },
  settingListSubTitle: {
    fontSize: 12,
    fontFamily: 'serif',
  },
  settingListView: {
    margin: 10
  },
  resultBottomButtonView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  resultBottomButton: {
    padding: 14,
    backgroundColor: 'black',
    borderRadius: 6,
    width: '48%',
    alignItems: 'center'
  },
  resultBottomButtonText: {
    color: 'white',
    fontFamily: 'serif',
    fontWeight: 'bold',
    fontSize: 16
  }
})

export default globalStyleSheet