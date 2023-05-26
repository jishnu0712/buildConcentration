import { StyleSheet, Text, FlatList, TouchableOpacity, View } from 'react-native'
import { randomNumber, shuffleArray } from '../Helper/Helper'

const data = [
    { name: 'abc', text: 'xyz' },
    { name: 'def', text: 'xyz' },
    { name: 'ghi', text: 'xyz' },
    { name: 'jkl', text: 'xyz' },
]

const renderItem = (item) => {
    return (<>
        <TouchableOpacity style={styles.ans}>
            <Text style={styles.answerText}>{item.item}</Text>
        </TouchableOpacity>
    </>)
}

const Calculux = () => {
    let a = randomNumber(1, 99)
    let b = randomNumber(1, 99)
    const operators = ['+', '-', '*']
    const question = `${a} ${operators[randomNumber(0, operators.length - 1)]} ${b}`
    const correctAns = eval(question)
    
    const optionsArray = [correctAns, correctAns - 1, correctAns + 1, correctAns - 2]
    shuffleArray(optionsArray)


    return (
        <View style={styles.container}>
            <Text style={styles.resultTitle}>Calculux</Text>
            <Text style={styles.question}>{question} = ? </Text>
            <View style={styles.answerSection}>
                <FlatList
                    data={optionsArray}
                    renderItem={renderItem}
                // numColumns={1}
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

