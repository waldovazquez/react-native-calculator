import React from 'react';

import {
  Text,
  View,
} from 'react-native';

import ButtonCalculator from '../components/ButtonCalculator';

import useCalculator from '../hooks/useCalculator';

import styles from '../theme/app';

const Calculator = () => {
  const {
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
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {lastNumber !== '0' && (
        <Text style={styles.lastResult}> {lastNumber} </Text>
      )}
      {
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={styles.result}
        >
          {error.status ? error.message : number}
        </Text>
      }

      <View style={styles.row}>
        <ButtonCalculator
          action={clear}
          color="#9B9B9B"
          text="C"
          textColor="black"
        />
        <ButtonCalculator
          action={invertNumber}
          color="#9B9B9B"
          text="+/-"
          textColor="black"
        />
        <ButtonCalculator
          action={deleteButton}
          color="#9B9B9B"
          text="DEL"
          textColor="black"
        />
        <ButtonCalculator
          action={buttonDivide}
          color="#FF9427"
          text="/"
        />
      </View>

      <View style={styles.row}>
        <ButtonCalculator
          action={buildNumber}
          text="7"
        />
        <ButtonCalculator
          action={buildNumber}
          text="8"
        />
        <ButtonCalculator
          action={buildNumber}
          text="9"
        />
        <ButtonCalculator
          action={buttonMultiply}
          color="#FF9427"
          text="x"
        />
      </View>

      <View style={styles.row}>
        <ButtonCalculator
          action={buildNumber}
          text="4"
        />
        <ButtonCalculator
          action={buildNumber}
          text="5"
        />
        <ButtonCalculator
          action={buildNumber}
          text="6"
        />
        <ButtonCalculator
          action={buttonSubstract}
          color="#FF9427"
          text="-"
        />
      </View>

      <View style={styles.row}>
        <ButtonCalculator
          action={buildNumber}
          text="1"
        />
        <ButtonCalculator
          action={buildNumber}
          text="2"
        />
        <ButtonCalculator
          action={buildNumber}
          text="3"
        />
        <ButtonCalculator
          action={buttonAdd}
          color="#FF9427"
          text="+"
        />
      </View>

      <View style={styles.row}>
        <ButtonCalculator
          action={buildNumber}
          text="0"
          wide
        />
        <ButtonCalculator
          action={buildNumber}
          text="."
        />
        <ButtonCalculator
          action={calculate}
          color="#FF9427"
          text="="
        />
      </View>
    </View>
  );
};

export default Calculator;
