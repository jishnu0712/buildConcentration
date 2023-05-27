import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import StartButtonComponent from '../OtherComponents/StartButtonComponent'
import TickColorComponent from '../OtherComponents/TickColorComponent'
import { randomNumber, shuffleArray } from '../Helper/Helper'
import ExitComponent from '../OtherComponents/ExitComponent'
import { useContext, useEffect, useState } from 'react'
import globalStyleSheet from '../styles/Stylesheet'
import TimerNew from '../OtherComponents/TimerNew'
import UserContext from '../context/Context'

const SelectRightNumber = ({ navigation, route }) => {
  const MyContext = useContext(UserContext)
  const [Numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
  const [RandIndex, setRandIndex] = useState(randomNumber(0, Numbers.length - 1))
  const [rightAnswer, setRightAnswer] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [tickColor, setTickColor] = useState(null)

  useEffect(() => {
    setNumbers(prev => shuffleArray(prev))
  }, [])

  const setTickColorAfterChange = () => {
    setTimeout(() => {
      setTickColor(null)
    }, 200)
  }

  const tapNumber = (bgcolor) => {
    if (bgcolor === Numbers[RandIndex]) {
      setRightAnswer(prev => prev + 1)
      setTickColor('green')
      setTickColorAfterChange()
    } else {
      setTickColor('red')
      setTickColorAfterChange()
    }
    setTotalAnswered(prev => prev + 1)
    setRandIndex(randomNumber(0, Numbers.length - 1))
    setNumbers(prev => shuffleArray(prev))
  }

  const Item = ({ title, bgcolor, index }) => (
    <TouchableOpacity onPress={() => tapNumber(bgcolor)} style={[styles.item,]}>
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
            <TickColorComponent tickColor={tickColor}/>
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, }}>
              <Text style={{ fontSize: 50, color: 'black', fontWeight: 'bold' }}>
                {Numbers[RandIndex]}

              </Text>
            </View>

            <FlatList
              data={Numbers}
              renderItem={({ item, index }) => <Item title={item} bgcolor={item} index={index} />
              }
              numColumns={3}
            />
          </>
        )}
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    width: '26%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    border: 2,
    borderWidth: 1

  },
  title: {
    fontSize: 32,
  },
})


export default SelectRightNumber