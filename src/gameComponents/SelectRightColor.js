import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { useContext, useEffect, useState } from 'react'
import ExitComponent from '../OtherComponents/ExitComponent'
import UserContext from '../context/Context'
import StartButtonComponent from '../OtherComponents/StartButtonComponent'
import { randomNumber } from '../Helper/Helper'
import TimerComponent from '../OtherComponents/TimerComponent'



const SelectRightColor = ({ navigation, route }) => {
  const MyContext = useContext(UserContext)
  const namedColors = ["blue", "green", "orange", "purple", "red", "yellow",]
  let [textColor, setColorIndex] = useState(0)
  const [rightAnswer, setRightAnswer] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)

  const shuffleArray = (array) => {
    array.sort(() => Math.random() - 0.5);
  }
  console.log('whole page');
  useEffect(() => {
    console.log('effect')
    shuffleArray(namedColors)
    setColorIndex(namedColors[randomNumber(0, 5)])
  }, [totalAnswered])
  

  // const [colorIndex, setColorIndex] = useState(randomNumber(0, namedColors.length - 1))

  
  
  TimerComponent(navigation, route, totalAnswered, rightAnswer)
  const tapColor = (index, bgcolor) => {
    // console.log('jar opor tap hocche   00', bgcolor);
    // console.log('this is ans          ', namedColors[index])
    if(bgcolor === namedColors[index]){
      setRightAnswer(prev => prev + 1)
    }
    setTotalAnswered(prev => prev + 1)
    const clrs = randomNumber(0, namedColors.length - 1)
  }

  const Item = ({ title, bgcolor, index }) => (
    <TouchableOpacity onPress={() => tapColor(index, bgcolor)} style={[styles.item, { backgroundColor: bgcolor }]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
  

  return (
    <>
      <ExitComponent navigation={navigation} />

      {!MyContext.gameStarted ? (
        <>
          <StartButtonComponent navigation={navigation} route={route} />
        </>
      ) : (
        <>

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 50, color: textColor, fontWeight: 'bold' }}>
              {namedColors[MyContext.colorIndex].charAt(0).toUpperCase() + namedColors[MyContext.colorIndex].slice(1, 20)}
             
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
    borderRadius: 10

  },
  title: {
    fontSize: 32,
  },
})


export default SelectRightColor