import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'black',
        flex: 1,
    },
    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },
    result: {
        color: 'white',
        fontSize: 48,
        marginBottom: 10,
        textAlign: 'right',
    },
    lastResult: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 24,
        textAlign: 'right',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },
});

export default styles;
