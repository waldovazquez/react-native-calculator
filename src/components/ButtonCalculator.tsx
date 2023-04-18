import React from 'react';

import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import styles from '../theme/buttonCalculator';

interface ButtonCalculatorProps {
    action: (content: string) => void;
    color?: string;
    text: string;
    textColor?: string;
    wide?: boolean;
}

const ButtonCalculator = ({
    action = () => { }, // delete
    color = '#2D2D2D',
    text,
    textColor = 'white',
    wide = false,
}: ButtonCalculatorProps) => {
    return (
        <TouchableOpacity
            onPress={() => action(text)}
        >
            <View style={{
                ...styles.button,
                backgroundColor: color,
                width: wide ? 180 : 80,
            }}>
                <Text style={{
                    ...styles.buttonText,
                    color: textColor,
                }}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default ButtonCalculator;
