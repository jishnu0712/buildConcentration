import { View, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native'
import StartButtonComponent from '../OtherComponents/StartButtonComponent'
import TickColorComponent from '../OtherComponents/TickColorComponent'
import { randomNumber, shuffleArray } from '../Helper/Helper'
import ExitComponent from '../OtherComponents/ExitComponent'
import { useContext, useEffect, useState } from 'react'
import globalStyleSheet from '../styles/Stylesheet'
import TimerNew from '../OtherComponents/TimerNew'
import UserContext from '../context/Context'
// Import all the images statically
import Image1 from '../images/shapes/1.png';
import Image2 from '../images/shapes/2.png';
import Image3 from '../images/shapes/3.png';
import Image4 from '../images/shapes/4.png';
import Image5 from '../images/shapes/5.png';
import Image6 from '../images/shapes/6.png';
import Image7 from '../images/shapes/7.png';
import Image8 from '../images/shapes/8.png';
import Image9 from '../images/shapes/9.png';

const SelectRightShape = ({ navigation, route }) => {
  const MyContext = useContext(UserContext)
  const [Images, setImages] = useState([Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9])
  const [RandIndex, setRandIndex] = useState(randomNumber(0, Images.length - 1))
  const [rightAnswer, setRightAnswer] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [tickColor, setTickColor] = useState(null)

  useEffect(() => {
    setImages(prev => shuffleArray(prev))
  }, [])


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
  randomImages: {
    width: 65,
    height: 65
  }
})

export default SelectRightShape