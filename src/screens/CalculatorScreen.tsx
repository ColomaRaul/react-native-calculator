import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../themes/AppTheme'
import { ButtonCalc } from '../components/ButtonCalc'
import { useCalculator } from '../hooks/useCalculator'

export const CalculatorScreen = () => {
    const { 
        result, 
        beforeResult, 
        clear,
        buildNumber,
        positiveNegative,
        deleteLast,
        divide,
        multiply,
        sum,
        substract,
        calculate } = useCalculator();
    return (
        <View style={styles.calculatorContainer}>
            {
                (beforeResult !== '0' && (
                    <Text style={styles.smallResult}>{beforeResult}</Text>
                ))
            }
            <Text 
                style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {result}
            </Text>

            <View style={styles.row}>
                {/* Button */}
                <ButtonCalc text='C' color='#9B9B9B' textColor='black' action={clear}/>
                <ButtonCalc text='+/-' color='#9B9B9B' textColor='black' action={positiveNegative}/>
                <ButtonCalc text='%' color='#9B9B9B' textColor='black' action={buildNumber}/>
                <ButtonCalc text='/' color='#FF9427' action={divide}/>
            </View>
            <View style={styles.row}>
                {/* Button */}
                <ButtonCalc text='7' action={buildNumber}/>
                <ButtonCalc text='8' action={buildNumber}/>
                <ButtonCalc text='9' action={buildNumber}/>
                <ButtonCalc text='X' color='#FF9427' action={multiply}/>
            </View>
            <View style={styles.row}>
                {/* Button */}
                <ButtonCalc text='4' action={buildNumber}/>
                <ButtonCalc text='5' action={buildNumber}/>
                <ButtonCalc text='6' action={buildNumber}/>
                <ButtonCalc text='-' color='#FF9427' action={substract}/>
            </View>
            <View style={styles.row}>
                {/* Button */}
                <ButtonCalc text='1' action={buildNumber}/>
                <ButtonCalc text='2' action={buildNumber}/>
                <ButtonCalc text='3' action={buildNumber}/>
                <ButtonCalc text='+' color='#FF9427' action={sum}/>
            </View>
            <View style={styles.row}>
                {/* Button */}
                <ButtonCalc text='del' action={deleteLast}/>
                <ButtonCalc text='0' action={buildNumber}/>
                <ButtonCalc text='.' action={buildNumber}/>
                <ButtonCalc text='=' color='#FF9427' action={calculate}/>
            </View>
        </View>
    )
}
