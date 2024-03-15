import { useState, useCallback,useEffect,useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  //use ref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllow) str += "0123456789";
    if (character) str += " !@#$%^&*()_+-={}[]|\:;'<>,.?/~` ";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllow, character]);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(password); 

  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllow, character, passwordGenerator])

  return (
    <div className="container">
      <h1 className="title">Password Generator</h1> 
      <div className="password-container">
        <input
          type="text"
          value={password}
          className="password-input"
          placeholder='Generated Password'
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard} className="copy-button mb-10">Copy</button>
        <div className='options-container'>
          <div className='option pb-3 mb-3'>
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className='length-input'
              onChange={(e) => {
                setLength(e.target.value)
              }}
            />
            <label>Length: {length}</label>
            <input
              type="checkbox"
              defaultChecked={numberAllow}
              id='numberInput'
              onChange={() => {
                setNumberAllow((prev) => !prev)
              }}
              className="checkbox-input" // Add className here
            />
            <label htmlFor="numberInput">Numbers</label>
            <input
              type="checkbox"
              defaultChecked={character}
              id='charInput'
              onChange={() => {
                setCharacter((prev) => !prev)
              }}
              className="checkbox-input" // Add className here
            />
            <label htmlFor="charInput">Special Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
