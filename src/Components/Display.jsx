function Display({displayValue}) {

    console.log('useState => ', displayValue)


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