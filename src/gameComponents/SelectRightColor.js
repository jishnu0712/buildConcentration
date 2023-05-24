import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useContext, useState } from 'react'
import ExitComponent from '../OtherComponents/ExitComponent'
import UserContext from '../context/Context'
import StartButtonComponent from '../OtherComponents/StartButtonComponent'
import {randomNumber} from '../Helper/Helper'

const Item = ({title, bgcolor}) => (
  <View style={[styles.item, {backgroundColor: bgcolor}]}>
    <Text style={styles.title}>{title}</Text>
  </View>
)


const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}



const SelectRightColor = ({navigation, route}) => {
  const namedColorss = ["blue", "gray", "green", "magenta", "orange", "purple", "red", "yellow",]
  const namedColors = shuffleArray(namedColorss)
  const MyContext = useContext(UserContext)
  const [color, setColor] = useState(randomNumber(0, 7))

  return (
    <>
        <ExitComponent navigation={navigation}/>

        {!MyContext.gameStarted ? (
          <>
              <StartButtonComponent navigation={navigation} route={route}/>
          </>
        ) : (
          <>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{  fontSize: 50, color: namedColors[randomNumber(0, 7)], fontWeight: 'bold' }}>
                {namedColors[randomNumber(0, 7)]}.
              </Text>
            </View>
            
            <FlatList
              data={namedColors}
              renderItem={({item, index}) => <Item title='' bgcolor={item} />}
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