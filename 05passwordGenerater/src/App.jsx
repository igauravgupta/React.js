import { useState, useCallback, useEffect } from "react";

function App() {
  const { width } = useWindowSize();
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*";

    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  return (
    <>
      <div className="w-full h-screen bg-orange-300 flex flex-col items-center justify-center">
        <div className="bg-green-300 flex flex-col items-center justify-center h-60  w-1/3 rounded-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-8">
            Password Generator
          </h1>
          <div className="flex items-center space-x-4 mb-6">
            <input
              type="text"
              value={password}
              readOnly
              className="border border-gray-300 rounded-lg p-2 text-gray-700 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => window.navigator.clipboard.writeText(password)}
            >
              Copy
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <input
                type="range"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                min={8}
                max={16}
                onClick={(e) => {
                  setLength(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="checkbox"
                name=""
                id=""
                defaultChecked={numberAllowed}
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numbers"> Number</label>
            </div>
            <div>
              <input
                type="checkbox"
                name=""
                id=""
                defaultChecked={charAllowed}
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="charAllowed"> Char Allowed</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
