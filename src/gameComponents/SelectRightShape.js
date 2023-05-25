import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useContext, useEffect, useState } from 'react'
import ExitComponent from '../OtherComponents/ExitComponent'
import UserContext from '../context/Context'
import StartButtonComponent from '../OtherComponents/StartButtonComponent'
import { randomNumber, shuffleArray } from '../Helper/Helper'
import TimerComponent from '../OtherComponents/TimerComponent'
import TimerViewComponent from '../OtherComponents/TimerViewComponent'
import TickColorComponent from '../OtherComponents/TickColorComponent'


const SelectRightNumber = ({ navigation, route }) => {
  const MyContext = useContext(UserContext)
  const [Numbers, setNumbers] = useState(['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png'])
  const [RandIndex, setRandIndex] = useState(randomNumber(0, Numbers.length - 1))
  const [rightAnswer, setRightAnswer] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)

  useEffect(() => {
    setNumbers(prev => shuffleArray(prev))
  }, [])

  // TimerComponent(navigation, route, totalAnswered, rightAnswer)

  const setTickColorAfterChange = () => {
    setTimeout(() => {
      MyContext.setTickColor(null)
    }, 200)
  }

  const tapNumber = (index, bgcolor) => {
    if (bgcolor === Numbers[RandIndex]) {
      setRightAnswer(prev => prev + 1)
      MyContext.setTickColor('green')
      setTickColorAfterChange()
    } else {
      MyContext.setTickColor('red')
      setTickColorAfterChange()
    }
    setTotalAnswered(prev => prev + 1)
    setRandIndex(randomNumber(0, Numbers.length - 1))
    setNumbers(prev => shuffleArray(prev))
  }

  const Item = ({ title, bgcolor, index }) => (
    <TouchableOpacity onPress={() => tapNumber(index, bgcolor)} style={[styles.item,]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )


  return (
    <>
      <View style={{ flex: 1, }}>
        <ExitComponent navigation={navigation} />

        {!MyContext.gameStarted ? (
          <>
            <StartButtonComponent navigation={navigation} route={route} />
          </>
        ) : (
          <>
            <TimerViewComponent />
            <TickColorComponent />
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, }}>
              <Text style={{ fontSize: 50, color: 'black', fontWeight: 'bold' }}>
                {/* <Image source={ require(`../images/shapes/${Numbers[RandIndex]}`) }/> */}
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
    width: '25%',
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