

function Keypad() {

    const keys = [
        {label: '/'},
        {label: '*'},
        {label: '<=', colSpan: 2},

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
        
        {label: 'enter', rowSpan: 2},
        {label: '0', colSpan: 2},
        {label: '.'}
    ]


    return ( 
        <>
            <div className="keypadContainer">
                {keys.map((key, index) => (
                    <button
                    key={index}
                    >
                        {key.label}
                    </button>
                ))}
            </div>
        </>
    );
}

export default Keypad;