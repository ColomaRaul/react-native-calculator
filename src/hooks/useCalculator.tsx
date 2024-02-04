import { useRef, useState } from "react";


enum Operators {
    sum, substract, multiply, divide
}

export const useCalculator = () => {
    const [result, setResult] = useState('10');
    const [beforeResult, setBeforeResult] = useState('100');
    const lastOperator = useRef<Operators>();

    const clear = () => {
        setResult('0');
        setBeforeResult('0');
    }

    const buildNumber = (textNumber: string) => {
        if (result.includes('.') && textNumber === '.') return;

        if (result.startsWith('0') || result.startsWith('-0')) {
            if (textNumber === '.') {
                setResult(result + textNumber);
            } else if (textNumber === '0' && result.includes('.')) {
                setResult(result + textNumber);
            } else if (textNumber !== '0' && !result.includes('.')) {
                setResult(textNumber);
            } else if (textNumber === '0' && !result.includes('.')) {
                setResult(result);
            } else {
                setResult(result + textNumber);
            }
        } else {
            setResult(result + textNumber);
        }
    }

    const positiveNegative = () => {
        if (result.includes('-')) {
            setResult(result.replace('-', ''));
        } else {
            setResult('-' + result);
        }
    }

    const deleteLast = () => {
        if (result.length === 1 || (result.length === 2 && result.includes('-'))) {
            setResult('0');
        } else {
            setResult(result.slice(0, -1));
        }
    }

    const updateBeforeResult = () => {
        if (result.endsWith('.')) { 
            setBeforeResult(result.slice(0, -1));
        } else {
            setBeforeResult(result);
        }
        setResult('0');
    }

    const divide = () => {
        updateBeforeResult();
        lastOperator.current = Operators.divide;
    }

    const multiply = () => {
        updateBeforeResult();
        lastOperator.current = Operators.multiply;
    }

    const sum = () => {
        updateBeforeResult();
        lastOperator.current = Operators.sum;
    }

    const substract = () => {
        updateBeforeResult();
        lastOperator.current = Operators.substract;
    }

    const calculate = () => {
        const num1 = Number(result);
        const num2 = Number(beforeResult);

        switch (lastOperator.current) {
            case Operators.sum:
                setResult(`${num1 + num2}`);
                break;
            case Operators.substract:
                setResult(`${num2 - num1}`);
                break;
            case Operators.multiply:
                setResult(`${num1 * num2}`);
                break;
            case Operators.divide:
                setResult(`${num2 / num1}`);
                break;
        }
        setBeforeResult('0');
    }

    return {
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
        calculate
    }
}
