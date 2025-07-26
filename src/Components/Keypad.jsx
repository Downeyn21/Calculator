import { useState, useEffect } from "react"
import Display from "./Display"




function Keypad({setDisplayValue, displayValue}) {
    const [valueArr, setValueArr] = useState([])
    const symbols = ['/', '*', '-', '+', '.']

    useEffect(() => {
        console.log('updated valueArr ', valueArr);
        console.log('updated displayValue ', displayValue);
        if (typeof valueArr[0] === 'number') {
            console.log('hello =>', valueArr[0].length);
        }
        
        
    }, [valueArr, displayValue])

    const keys = [
        {label: '/'},
        {label: '*'},
        {label: '<=', className: 'wideKey backKey', function: () => backKey() },

        {label: '7'},
        {label: '8'},
        {label: '9'},
        {label: '-'},

        {label: '4'},
        {label: '5'},
        {label: '6'},
        {label: '+'},

        {label: '1'},
        {label: '2'},
        {label: '3'},
        
        {label: 'ENTER', className: 'tallKey', function: () => calculate()},
        {label: '0', className: 'wideKey'},
        {label: '.'}
    ]
    
    function handleChange(key) {
        
        let checkArr = valueArr[valueArr.length - 1]
        
        if (symbols.includes(key)) {
            if (symbols.includes(checkArr)) {
                valueArr.pop()
                setDisplayValue(valueArr.join(''))
            }
        }

        if(key === '.') {
            let splitValues = displayValue.split(/[+\-*/]/)
            let lastValue = splitValues[splitValues.length - 1]
            if (lastValue.includes('.')) {
                return
            }
        }

        if (key === '<=') {
            if(!displayValue) {
                console.log('nothing to print');
                
            }
        }

        const newArr = [...valueArr, key]
        setValueArr(newArr)
        setDisplayValue(newArr.join(''))
    }

    function calculate() {
        let newValue = eval(displayValue)
        setDisplayValue(newValue)
        let digits = newValue.toString().split('').map(Number)
        setValueArr(digits)
        
    }

    function backKey() {
        console.log('displayValue => ', displayValue.length);
        if (displayValue === '0') {
            return
        } 
        if(displayValue.length < 2){
            console.log('set value');
            setValueArr([])
            setDisplayValue('0')
            return
        }
        valueArr.pop()
        setDisplayValue(valueArr.join(''))
    }



    return ( 
        <>
            <div className="keypadContainer">
                {keys.map((key, index) => (
                    <button
                    key={index}
                    className={key.className || ''}
                    // if operator then onClick does diff
                    onClick={() => {key.function ? key.function() : handleChange(key.label)}}
                    >
                        {key.label}
                    </button>
                ))}
            </div>
        </>
    );
}

export default Keypad;