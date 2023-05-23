import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useContext } from 'react'
import ExitComponent from '../OtherComponents/ExitComponent'
import UserContext from '../context/Context'
import StartButtonComponent from '../OtherComponents/StartButtonComponent'


const Item = ({title, bgcolor}) => (
  <View style={[styles.item, {backgroundColor: bgcolor}]}>
    <Text style={styles.title}>{title}</Text>
  </View>
)

const getRandomNumber = () => {
  return Math.floor(Math.random() * 10)
}

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const SelectRightColor = ({navigation, route}) => {
  const namedColorss = ["black", "blue", "gray", "green", "magenta", "orange", "purple", "red", "white", "yellow",]
  const namedColors = shuffleArray(namedColorss)

  const MyContext = useContext(UserContext)

  return (
    <>
        <ExitComponent navigation={navigation}/>
        <View>
          <Text style={{  fontSize: 24,color: namedColors[getRandomNumber()] }}>{namedColors[getRandomNumber()]}.</Text>
        </View>

        {!MyContext.gameStarted ? (
          <>
              <StartButtonComponent navigation={navigation} route={route}/>
          </>
        ) : (
          <>
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