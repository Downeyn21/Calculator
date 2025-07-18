

function Keypad() {

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


    return ( 
        <>
            <div className="keypadContainer">
                {keys.map((key, index) => (
                    <button
                    key={index}
                    className={key.className || ''}
                    >
                        {key.label}
                    </button>
                ))}
            </div>
        </>
    );
}

export default Keypad;