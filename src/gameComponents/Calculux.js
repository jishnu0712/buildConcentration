import { StyleSheet, Text, FlatList, TouchableOpacity, View } from 'react-native'
import { randomNumber, shuffleArray } from '../Helper/Helper'
import UserContext from '../context/Context'
import { useContext, useEffect, useState } from 'react'
import TimerComponent from '../OtherComponents/TimerComponent'
import ExitComponent from '../OtherComponents/ExitComponent'
import StartButtonComponent from '../OtherComponents/StartButtonComponent'
import TimerViewComponent from '../OtherComponents/TimerViewComponent'
import TickColorComponent from '../OtherComponents/TickColorComponent'


const Calculux = ({ navigation, route }) => {
    const MyContext = useContext(UserContext)

    const a = randomNumber(1, 99)
    const b = randomNumber(1, 99)
    const operators = ['+', '-', '*']
    const question = `${a} ${operators[randomNumber(0, operators.length - 1)]} ${b}`
    const correctAns = eval(question)

    const optionsArray = [correctAns, correctAns - 1, correctAns + 1, correctAns - 2]
    shuffleArray(optionsArray)


    const [rightAnswer, setRightAnswer] = useState(0)
    const [totalAnswered, setTotalAnswered] = useState(0)

    TimerComponent(navigation, route, totalAnswered, rightAnswer)

    const setTickColorAfterChange = () => {
        setTimeout(() => {
            MyContext.setTickColor(null)
        }, 200)
    }
    const renderItem = (item) => {
        const optionVal = item.item
        return (<>
            <TouchableOpacity style={styles.ans} onPress={() => tapAnswer(optionVal)}>
                <Text style={styles.answerText}>{optionVal}</Text>
            </TouchableOpacity>
        </>)
    }

    const tapAnswer = (option) => {

        if (option === correctAns) {
            setRightAnswer(prev => prev + 1)
            MyContext.setTickColor('green')
            setTickColorAfterChange()
        } else {
            MyContext.setTickColor('red')
            setTickColorAfterChange()
        }
        setTotalAnswered(prev => prev + 1)
    }




    return (
        // <>
        //     <View style={{ flex: 1, }}>
        //         <ExitComponent navigation={navigation} />

        //         {!MyContext.gameStarted ? (
        //             <>
        //                 <StartButtonComponent navigation={navigation} route={route} />
        //             </>
        //         ) : (
        //             <>
        //                 <TimerViewComponent />
        //                 <TickColorComponent />

        //                 <View style={styles.container}>
        //                     <Text style={styles.resultTitle}>Calculux</Text>
        //                     <Text style={styles.question}>{question} = ? </Text>
        //                     <View style={styles.answerSection}>
        //                         <FlatList
        //                             data={optionsArray}
        //                             renderItem={renderItem}
        //                         // numColumns={1}
        //                         />
        //                     </View>
        //                 </View>
        //             </>
        //         )}
        //     </View>
        // </>
        <View style={styles.container}>
            <Text style={styles.resultTitle}>Calculux</Text>
            <Text style={styles.question}>{question} = ? </Text>
            <View style={styles.answerSection}>
                <FlatList
                    data={optionsArray}
                    renderItem={renderItem}
                />
            </View>
        </View>
    )
}

export default Calculux

const styles = StyleSheet.create({
    question: {
        fontSize: 32,
        fontFamily: 'monospace',
        textAlign: 'center',
        marginTop: 24,
    },
    answerSection: {
        marginVertical: 32
    },
    ans: {
        padding: 16,
        margin: 8,

        borderWidth: 1,
        borderColor: '#D8D8D8',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    answerText: {
        fontSize: 24,
        fontFamily: 'serif',
        textAlign: 'center',
        paddingVertical: 8,
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
        height: '100%',
        justifyContent: 'space-between',
        margin: 24,
    }
})

