import React, { useContext, useEffect } from 'react'
import UserContext from '../context/Context'
import { randomNumber } from '../Helper/Helper'



const TimerComponent = (navigation, route, totalAnswered, rightAnswer) => {
    const MyContext = useContext(UserContext);
    const timer = require('../json/Timer.json')
    useEffect(() => {
        let intervalId = null

        if (MyContext.gameStarted) {
            intervalId = setInterval(() => {
                MyContext.setSecond(prevSecond => prevSecond - 1)
                // MyContext.setColorIndex(randomNumber(0, namedColors.length - 1))
                
            }, 1000)
        }

        if (MyContext.second === 0) {
            MyContext.setIsGameStarted(false)
            MyContext.setSecond(timer.timer)
            clearInterval(intervalId)
            navigation.navigate('Result', { ...route, totalAnswered: totalAnswered, rightAnswer: rightAnswer })
        }

        return () => {
            clearInterval(intervalId)
        }
    }, [MyContext.gameStarted, MyContext.second])

}

export default TimerComponent
