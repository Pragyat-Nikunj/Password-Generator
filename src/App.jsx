import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');


  const passwordRef = useRef(null);
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*+-_?";
    const mustInclude = [];
    if (numberAllowed){
      str += numbers;
      mustInclude.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }
    if (charAllowed) {
      str += symbols;
      mustInclude.push(symbols[Math.floor(Math.random() * symbols.length)]);
    };

    // Use crypto.getRandomValues for cryptographically secure random numbers
    const array = new Uint32Array(Number(length));
    window.crypto.getRandomValues(array);

    
    for (let i = 0; i < length - mustInclude.length; i++) {
      const charIndex = array[i] % str.length;
      pass += str.charAt(charIndex);
    }


    pass += mustInclude.join("");

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }
  const passwordStrength = () => {
    if (length < 8) return "Too Weak"

    if (length < 10) return "Moderate"

    if (length >= 10 && numberAllowed && charAllowed) return "Strong"

    return "Good";
  }
  const getStrengthColor = () => {
    const strength = passwordStrength();
    
    switch (strength) {
      case "Too Weak":
        return "text-red-500";
      case "Moderate":
        return "text-yellow-500";
      case "Strong":
        return "text-green-500";
      case "Good":
        return "text-blue-500";
      default:
        return "text-orange-500";
    }

  }
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          className="outline-none bg-blue-700 text-white px-3
        py-0.5 shrink-0"
          onClick={copyPasswordToClipboard}
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2 my-3">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            name=""
            id=""
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            name=""
            id=""
          />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            name=""
            id=""
          />
          <label htmlFor="charInput">Character</label>
        </div>
      </div>
      <p className={`font-semibold ${getStrengthColor()}`}>
        Password Strength: {passwordStrength()}
      </p>
    </div>
  );
}

export default App
