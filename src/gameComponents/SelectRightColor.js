import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { useContext, useEffect, useState } from 'react'
import ExitComponent from '../OtherComponents/ExitComponent'
import UserContext from '../context/Context'
import StartButtonComponent from '../OtherComponents/StartButtonComponent'
import { randomNumber, shuffleArray } from '../Helper/Helper'
import TimerComponent from '../OtherComponents/TimerComponent'
import TimerViewComponent from '../OtherComponents/TimerViewComponent'
import TickColorComponent from '../OtherComponents/TickColorComponent'


const SelectRightColor = ({ navigation, route }) => {
  const MyContext = useContext(UserContext)
  const [namedColors, setNamedColors] = useState(["blue", "green", "orange", "purple", "red", "yellow",])  
  const [colorIndex, setColorIndex] = useState(randomNumber(0, 5))
  const [randIndex, setRandIndex] = useState(randomNumber(0, 5))
  const [rightAnswer, setRightAnswer] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)

  useEffect(() => {
    setNamedColors(prev => shuffleArray(prev))
  }, [])
  
  TimerComponent(navigation, route, totalAnswered, rightAnswer)

  const setTickColorAfterChange = () => {
    setTimeout(() => {
      MyContext.setTickColor(null)
    }, 200)
  }

  const tapColor = (index, bgcolor) => {
    if(bgcolor === namedColors[colorIndex]){
      setRightAnswer(prev => prev + 1)
      MyContext.setTickColor('green')
      setTickColorAfterChange()
    }else{
      MyContext.setTickColor('red')
      setTickColorAfterChange()
    }
    setTotalAnswered(prev => prev + 1)
    setColorIndex(randomNumber(0, 5))
    setRandIndex(randomNumber(0, 5))
    setNamedColors(prev => shuffleArray(prev))
  }

  const Item = ({ title, bgcolor, index }) => (
    <TouchableOpacity onPress={() => tapColor(index, bgcolor)} style={[styles.item, { backgroundColor: bgcolor }]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
  

  return (
    <>
    <View style={{ flex: 1,  }}>
      <ExitComponent navigation={navigation} />

      {!MyContext.gameStarted ? (
        <>
          <StartButtonComponent navigation={navigation} route={route} />
        </>
      ) : (
        <>
          <TimerViewComponent/>
          <TickColorComponent />
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
    backgroundColor: '#f9c2ff',
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