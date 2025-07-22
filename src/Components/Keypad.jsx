import { useState } from "react"
import Display from "./Display"


function Keypad({setDisplayValue, displayValue}) {
    const [valueArr, setValueArr] = useState([])

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


        const newArr = [...valueArr, key]
        setValueArr(newArr)
        setDisplayValue(newArr.join(''))
    }

    function calculate() {
        let newValue = eval(displayValue)
        setDisplayValue(newValue)
        setValueArr([newValue])
    }

    function backKey() {
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