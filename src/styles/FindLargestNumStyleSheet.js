import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    title: {
      fontWeight: 'bold',
      fontSize: 30,
      color: 'black',
    },
    crossIcon: {
      width: 25,
      height: 25,
    },
    exitView: {
      alignItems: 'flex-end',
      margin: 10,
    },
    startButton: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 30,
    },
    startButtonView: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      borderRadius: 10,
    },
    timer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
    },
    timerText: {
      fontWeight: 'bold',
      fontSize: 30,
      color: 'black'
    },
    numberButtonView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    rightButton: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      width: '40%',
      margin: 10,
      borderRadius: 10,
    },
    leftButton: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      width: '40%',
      margin: 10,
      borderRadius: 10,
    },
    redDot: {
      width: 12,
      height: 12,
      backgroundColor: 'red',
      borderRadius: 50,
    }, 
    gameStartedView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    }
    
  });

export default styles