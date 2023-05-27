import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useContext, useEffect, useState } from 'react'
import ExitComponent from '../OtherComponents/ExitComponent'
import UserContext from '../context/Context'
import StartButtonComponent from '../OtherComponents/StartButtonComponent'
import { randomNumber, shuffleArray } from '../Helper/Helper'
import TimerComponent from '../OtherComponents/TimerComponent'
import TimerViewComponent from '../OtherComponents/TimerViewComponent'
import TickColorComponent from '../OtherComponents/TickColorComponent'
// Import all the images statically
import Image1 from '../images/internet/1.png';
import Image2 from '../images/internet/2.png';
import Image3 from '../images/internet/3.png';
import Image4 from '../images/internet/4.png';
import Image5 from '../images/internet/5.png';
import Image6 from '../images/internet/6.png';
import Image7 from '../images/internet/7.png';
import Image8 from '../images/internet/8.png';
import Image9 from '../images/internet/9.png';

const SelectIdenticalImage = ({ navigation, route }) => {
  const MyContext = useContext(UserContext)
  const [Images, setImages] = useState([Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9])
  const [RandIndex, setRandIndex] = useState(randomNumber(0, Images.length - 1))
  const [rightAnswer, setRightAnswer] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [tickColor, setTickColor] = useState(null)

  useEffect(() => {
    setImages(prev => shuffleArray(prev))
  }, [])

  TimerComponent(navigation, route, totalAnswered, rightAnswer)

  const setTickColorAfterChange = () => {
    setTimeout(() => {
      setTickColor(null)
    }, 200)
  }

  const tapShapes = (image) => {
    if (image === Images[RandIndex]) {
      setRightAnswer(prev => prev + 1)
      setTickColor('green')
      setTickColorAfterChange()
    } else {
      setTickColor('red')
      setTickColorAfterChange()
    }
    setTotalAnswered(prev => prev + 1)
    setRandIndex(randomNumber(0, Images.length - 1))
    setImages(prev => shuffleArray(prev))
  }

  const Item = ({ title, image }) => (
    <TouchableOpacity onPress={() => tapShapes(image)} style={[styles.item,]}>
      <Image source={title} style={styles.randomImages} />
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
            <TickColorComponent tickColor = {tickColor}/>
            <View style={{ alignItems: 'center', marginBottom: 24 }}>
              <Image source={Images[RandIndex]} style={{ width: 100, height: 100, }} />
            </View>

            <FlatList
              data={Images}
              renderItem={({ item, index }) => <Item title={item} image={item} index={index} />
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
    padding: 8,
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
  randomImages: {
    width: 60,
    height: 60
  }
})

export default SelectIdenticalImage