function Display({displayValue}) {
    return ( 
        <>
            <div className="displayContainer">
                <input
                type="text" 
                readOnly
                value={displayValue}
                
            />
            </div>
        </>
    );
}

export default Display;