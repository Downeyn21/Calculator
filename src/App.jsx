import { useState } from "react"
import Display from "./Components/Display"
import Keypad from "./Components/Keypad"


function App() {
  const [displayValue, setDisplayValue] = useState('0')

  return (
    <>
    <div className="mainContainer">
      <Display 
      displayValue={displayValue}
      // handleChange={handleChange}
    />
      <Keypad 
      setDisplayValue={setDisplayValue}
      displayValue={displayValue}
    />
    </div>
    </>
  )
}

export default App
