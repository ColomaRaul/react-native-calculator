import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../themes/AppTheme'

interface Props {
    text: string,
    color?: string,
    textColor?: string,
    witdh?: boolean,
    action: (textNumber: string) => void
}

export const ButtonCalc = ({text, color = '#2D2D2D', textColor = 'white', witdh = false, action}: Props) => {
    return (
        <TouchableOpacity onPress={()=> action(text)}>
            <View style={{
                ...styles.button,
                backgroundColor: color,
                width: (witdh) ? 180 : 80
            }}>
                <Text style={{
                    ...styles.buttonText,
                    color: textColor
                }}>{text}</Text>
            </View>
        </TouchableOpacity>
    ) 
}
