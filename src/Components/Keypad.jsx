import { useState } from "react"


function Keypad({setDisplayValue}) {
    const [valueArr, setValueArr] = useState([])

    const keys = [
        {label: '/'},
        {label: '*'},
        {label: '<=', className: 'wideKey backKey'},

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
        
        {label: 'ENTER', className: 'tallKey'},
        {label: '0', className: 'wideKey'},
        {label: '.'}
    ]
    
    function handleChange(key) {
        let arr = valueArr
        arr.push(key)
        setValueArr(arr)
        let valueString = valueArr.join('')
        setDisplayValue(valueString)
        console.log('valueArr => ', valueArr)
        console.log('valueString => ', valueString)
    }

    return ( 
        <>
            <div className="keypadContainer">
                {keys.map((key, index) => (
                    <button
                    key={index}
                    className={key.className || ''}
                    onClick={() => {handleChange(key.label)}}
                    >
                        {key.label}
                    </button>
                ))}
            </div>
        </>
    );
}

export default Keypad;