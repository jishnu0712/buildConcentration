import { View, Text } from 'react-native'


const SelectRightColor = () => {
  const namedColors = ["black", "blue", "cyan", "gray", "green", "magenta", "orange", "purple", "red", "white", "yellow",];

  function getRandomNumber() {
    return Math.floor(Math.random() * 11);
  }

  return (
    <View>
      <Text style={{  fontSize: 24,color: namedColors[getRandomNumber()] }}>Select the below text with the same color shown in the box.</Text>
    </View>
  )
}

export default SelectRightColor