import {
    useRef,
    useState,
} from 'react';

enum Operators {
    add,
    divide,
    multiply,
    substract
}

const useCalculator = () => {
    const [lastNumber, setLastNumber] = useState('0');
    const [number, setNumber] = useState('0');
    const [error, setError] = useState({
        message: '',
        status: false,
    });

    const lastOperation = useRef<Operators>();

    const clear = () => {
        if (error.status) {
            setError({
                message: '',
                status: false,
            });
        }

        setNumber('0');
        setLastNumber('0');
    };

    const buildNumber = (textNumber: string) => {
        if (error.status) {
            setError({
                message: '',
                status: false,
            });
        }

        if (number.includes('.') && textNumber === '.') return;

        if (number !== '0' || textNumber === '.') {
            setNumber(number + textNumber);
        } else {
            setNumber(textNumber);
        }
    };

    const invertNumber = () => {
        if (error.status) return;

        if (number.includes('-')) {
            setNumber(number.replace('-', ''));
        } else {
            setNumber('-' + number);
        }
    };

    const deleteButton = () => {
        if (error.status) return;

        if ((number.startsWith('-') && number.slice(1).length === 1) || number.length === 1) {
            setNumber('0');
        } else {
            setNumber(number.slice(0, -1));
        }
    };

    const changeNumberToLastNumber = () => {
        if (number.endsWith('.')) {
            setLastNumber(number.slice(0, -1));
        } else {
            setLastNumber(number);
        }
        setNumber('0');
    };

    const buttonDivide = () => {
        changeNumberToLastNumber();
        lastOperation.current = Operators.divide;
    };

    const buttonMultiply = () => {
        changeNumberToLastNumber();
        lastOperation.current = Operators.multiply;
    };

    const buttonAdd = () => {
        changeNumberToLastNumber();
        lastOperation.current = Operators.add;
    };

    const buttonSubstract = () => {
        changeNumberToLastNumber();
        lastOperation.current = Operators.substract;
    };

    const calculate = () => {
        if (lastNumber === '0') return;

        const firstNumber = Number(number);
        const secondNumber = Number(lastNumber);

        switch (lastOperation.current) {
            case Operators.add:
                setNumber(`${firstNumber + secondNumber}`);
                break;
            case Operators.multiply:
                setNumber(`${firstNumber * secondNumber}`);
                break;
            case Operators.substract:
                setNumber(`${secondNumber - firstNumber}`);
                break;
            case Operators.divide:
                if (firstNumber === 0) {
                    setError({
                        message: 'Cannot divide by zero',
                        status: true,
                    });
                    return;
                }
                setNumber(`${secondNumber / firstNumber}`);
                break;
        }

        setLastNumber('0');
    };

    return {
        buildNumber,
        buttonAdd,
        buttonDivide,
        buttonMultiply,
        buttonSubstract,
        calculate,
        clear,
        deleteButton,
        error,
        invertNumber,
        lastNumber,
        number,
    };
};

export default useCalculator;
