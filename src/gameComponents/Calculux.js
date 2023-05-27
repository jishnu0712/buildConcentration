import { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, FlatList, TouchableOpacity, View } from 'react-native'
import StartButtonComponent from '../OtherComponents/StartButtonComponent'
import TickColorComponent from '../OtherComponents/TickColorComponent'
import { randomNumber, shuffleArray } from '../Helper/Helper'
import ExitComponent from '../OtherComponents/ExitComponent'
import globalStyleSheet from '../styles/Stylesheet'
import TimerNew from '../OtherComponents/TimerNew'
import UserContext from '../context/Context'

const Calculux = ({ navigation, route }) => {
    const MyContext = useContext(UserContext)
    const [tickColor, setTickColor] = useState(null)
    const [rightAnswer, setRightAnswer] = useState(0)
    const [totalAnswered, setTotalAnswered] = useState(0)
    const [question, setQuestion] = useState('')
    const [optionsArray, setOptionsArray] = useState([])
    const [correctAns, setCorrectAns] = useState()

    useEffect(() => {
        const generateQuestion = () => {
            const a = randomNumber(1, 99)
            const b = randomNumber(1, 99)
            const operators = ['+', '-', '*']
            const question = `${a} ${operators[randomNumber(0, operators.length - 1)]} ${b}`
            const tempAns = eval(question)
            setCorrectAns(tempAns)

            const optionsArray = [tempAns, tempAns - 1, tempAns + 1, tempAns - 2]
            shuffleArray(optionsArray)

            setQuestion(question)
            setOptionsArray(optionsArray)
        }

        generateQuestion()
    }, [totalAnswered])

    const setTickColorAfterChange = () => {
        setTimeout(() => {
            setTickColor(null)
        }, 200)
    }

    const renderItem = (item) => {
        const optionVal = item.item
        return (
            <TouchableOpacity style={styles.ans} onPress={() => tapAnswer(optionVal)}>
                <Text style={styles.answerText}>{optionVal}</Text>
            </TouchableOpacity>
        )
    }

    const tapAnswer = (option) => {
        if (option === correctAns) {
            setRightAnswer((prev) => prev + 1)
            setTickColor('green')
            setTickColorAfterChange()
        } else {
            setTickColor('red')
            setTickColorAfterChange()
        }
        setTotalAnswered((prev) => prev + 1)
    }

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
                        <TickColorComponent tickColor={tickColor} />

                        <View style={styles.container}>
                            <Text style={styles.question}>{question} = ? </Text>
                            <View style={styles.answerSection}>
                                <FlatList data={optionsArray} renderItem={renderItem} numColumns={1} />
                            </View>
                        </View>
                    </>
                )}
            </View>
        </>
    )
}

export default Calculux


const styles = StyleSheet.create({
    question: {
        fontSize: 32,
        fontFamily: 'monospace',
        textAlign: 'center',
    },
    answerSection: {
        marginTop: 120,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ans: {
        padding: 16,
        marginVertical: 8,
        width: 250,
        flex: 1,

        borderWidth: 1,
        borderColor: '#D8D8D8',
        borderRadius: 20,
    },
    answerText: {
        fontSize: 24,
        fontFamily: 'serif',
        textAlign: 'center',
        // paddingVertical: 8,
    },
    resultTitle: {
        fontWeight: '800',
        color: 'black',
        fontSize: 32,
        paddingTop: 12,
        textAlign: 'center',
        fontFamily: 'serif'
    },
    container: {
        paddingVertical: 24,
        paddingHorizontal: 16,
        // justifyContent: 'space-between',
        margin: 24,
    }
})

