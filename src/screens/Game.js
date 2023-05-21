import AllComponents from '../gameComponents/AllComponents'
const Game = ({ navigation, route }) => {
  const Comp = AllComponents[route.params.title.replaceAll(' ', '')]
  return (
      <Comp navigation={navigation} route= {route.params}/>
  )
}
export default Game


