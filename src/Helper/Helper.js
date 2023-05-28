import { Share } from 'react-native'

export const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


export const shareFile = async (text) => {
  try {
    const result = await Share.share({
      message:
        text,
    })
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    // Alert.alert(error.message)
  }
}
