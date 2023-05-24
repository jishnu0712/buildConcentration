import AllComponents from '../gameComponents/AllComponents'
import HomeBackButtonHandler from '../OtherComponents/HomeBackButtonHandler'
const Game = ({ navigation, route }) => {
  const Comp = AllComponents[route.params.title.replaceAll(' ', '')]
  return (
    <>
      <HomeBackButtonHandler/>
      <Comp navigation={navigation} route= {route.params}/>
    </>
  )
}
export default Game


