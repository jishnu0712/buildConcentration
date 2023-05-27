import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import StartButtonComponent from '../OtherComponents/StartButtonComponent'
import TickColorComponent from '../OtherComponents/TickColorComponent'
import { randomNumber, shuffleArray } from '../Helper/Helper'
import ExitComponent from '../OtherComponents/ExitComponent'
import { useContext, useEffect, useState } from 'react'
import globalStyleSheet from '../styles/Stylesheet'
import TimerNew from '../OtherComponents/TimerNew'
import UserContext from '../context/Context'


const SelectRightColor = ({ navigation, route }) => {
  const MyContext = useContext(UserContext)
  const [namedColors, setNamedColors] = useState(["blue", "green", "orange", "purple", "red", "yellow",])  
  const [colorIndex, setColorIndex] = useState(randomNumber(0, namedColors.length - 1))
  const [randIndex, setRandIndex] = useState(randomNumber(0, namedColors.length - 1))
  const [rightAnswer, setRightAnswer] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [tickColor, setTickColor] = useState(null)


  useEffect(() => {
    setNamedColors(prev => shuffleArray(prev))
  }, [])
  

  const setTickColorAfterChange = () => {
    setTimeout(() => {
      setTickColor(null)
    }, 200)
  }

  const tapColor = (index, bgcolor) => {
    if(bgcolor === namedColors[colorIndex]){
      setRightAnswer(prev => prev + 1)
      setTickColor('green')
      setTickColorAfterChange()
    }else{
      setTickColor('red')
      setTickColorAfterChange()
    }
    setTotalAnswered(prev => prev + 1)
    setColorIndex(randomNumber(0, namedColors.length - 1))
    setRandIndex(randomNumber(0, namedColors.length - 1))
    setNamedColors(prev => shuffleArray(prev))
  }

  const Item = ({ title, bgcolor, index }) => (
    <TouchableOpacity onPress={() => tapColor(index, bgcolor)} style={[styles.item, { backgroundColor: bgcolor }]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
  

  return (
    <>
    <View style={globalStyleSheet.mainArea}>
      <ExitComponent navigation={navigation} />

      {!MyContext.gameStarted ? (
        <>
          <StartButtonComponent navigation={navigation} route={route} />
        </>
      ) : (
        <>
          <TimerNew route={route} navigation={navigation} totalAnswered={totalAnswered} rightAnswer={rightAnswer} />
          <TickColorComponent tickColor = {tickColor}/>
          <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, }}>
            <Text style={{ fontSize: 50, color: namedColors[randIndex], fontWeight: 'bold' }}>
              {namedColors[colorIndex].charAt(0).toUpperCase() + namedColors[colorIndex].slice(1, 20)}
             
            </Text>
          </View>

          <FlatList
            data={namedColors}
            renderItem={({ item, index }) => <Item title='' bgcolor={item} index={index} />
            }
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
          />
        </>
      )}
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  item: {
    // backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    width: '42%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4

  },
  title: {
    fontSize: 32,
  },
})


export default SelectRightColor