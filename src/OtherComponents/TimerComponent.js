import React, { useContext, useEffect } from 'react'
import UserContext from '../context/Context'


const TimerComponent = (navigation, route, totalAnswered, rightAnswer) => {
    const MyContext = useContext(UserContext);
    useEffect(() => {
        let intervalId = null

        if (MyContext.gameStarted) {
            intervalId = setInterval(() => {
                MyContext.setSecond(prevSecond => prevSecond - 1)
            }, 1000)
        }

        if (MyContext.second === 0) {
            clearInterval(intervalId)
            navigation.navigate('Result', { ...route, totalAnswered: totalAnswered, rightAnswer: rightAnswer })
        }

        return () => {
            clearInterval(intervalId)
        }
    }, [MyContext.gameStarted, MyContext.second])

}

export default TimerComponent
