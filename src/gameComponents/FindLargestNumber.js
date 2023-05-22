import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState, useEffect} from 'react'

const FindLargestNumber = ({navigation, route}) => {
  const crossIcon = require('../images/crossIcon.png')
  const GoBack = () => {
    navigation.goBack()
  }
  const [gameStarted, setIsGameStarted] = useState(false)


  
  const [leftValue, setLeftValue] = useState(Math.floor(Math.random() * 99))
  const [rightValue, setRightValue] = useState(Math.floor(Math.random() * 99))
  const [rightAnswer, setRightAnswer] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [second, setSecond] = useState(50)
  const [tickColor, setTickColor] = useState(null)


  const startGame = () => {
    setIsGameStarted((prev) => !prev)
  }

  useEffect(() => {
    let intervalId = null

    if (gameStarted) {
      intervalId = setInterval(() => {
        setSecond((prevSecond) => prevSecond - 1)
      }, 1000)
    }

    if (second === 0) {
      clearInterval(intervalId)
      navigation.navigate('Result', {...route, totalAnswered : totalAnswered, rightAnswer : rightAnswer})
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [gameStarted, second])
  
  const setTickColorAfterChange = () => {
    setTimeout(()=> {
      setTickColor(null)
    }, 200)
  }

  const changeNumber = (button) => {
    if(second == 0){
      return false
    }
    if(button == 'left'){
      if(leftValue > rightValue){
        setRightAnswer((prev) => prev + 1)
        setTickColor('green')
        setTickColorAfterChange()
      }else{
        setTickColor('red')
        setTickColorAfterChange()
      }
    }else{
      if(leftValue < rightValue){
        setRightAnswer((prev) => prev + 1)
        setTickColor('green')
        setTickColorAfterChange()
        
      }else{
        setTickColor('red')
        setTickColorAfterChange()
      }
    }
    setTotalAnswered((prev) => prev + 1)
    setLeftValue(Math.floor(Math.random() * 99))
    setRightValue(Math.floor(Math.random() * 99))
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.exitView} onPress={GoBack}>
          <Image style={styles.crossIcon} source={crossIcon}/>
        </TouchableOpacity>
        <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
          <Text style={styles.title}>Find Largest Number</Text>
          <View style={{ backgroundColor: tickColor, width: 20, height: 20, borderRadius: 50, }}></View>
        </View>
        {
          !gameStarted ? (
            <View style={styles.startButtonView}>
              <TouchableOpacity  onPress={startGame}>
                <Text style={styles.startButton}>Start</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.gameStartedView}>
              <View style={styles.timer}>
                <Text style={styles.timerText}>00:{second}</Text>
              </View>
              <View>

              <View style={styles.numberButtonView}>
                <TouchableOpacity style={styles.leftButton}  onPress={() => changeNumber('left')}>
                  <Text style={styles.startButton}>{leftValue}</Text>
                </TouchableOpacity>
                <View style={styles.redDot}></View>
                <TouchableOpacity style={styles.rightButton}  onPress={() => changeNumber('right')}>
                  <Text style={styles.startButton}>{rightValue}</Text>
                </TouchableOpacity>
              </View>

              </View>
            </View>
          )
        }

        </View>

    </>
  )
}

export default FindLargestNumber

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
  },
  timer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  timerText: {
    fontWeight: 'bold',
    fontSize: 30,
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
    margin : 10,
  },
  leftButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '40%',
    margin : 10,
  },
  redDot: {
    width: 12,
    height: 12,
    backgroundColor: 'red',
    borderRadius: 50,
  }

})