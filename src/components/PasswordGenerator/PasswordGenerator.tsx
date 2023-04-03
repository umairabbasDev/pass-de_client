import { useState } from "react";
import { generatePassword } from "../../utils";

function PasswordGenerator() {
  const [password, setPassword] = useState<string>("");
  const [passwordLength, setPasswordLength] = useState<number>();
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);

  function handleGeneratePassword() {
    try {
      const generatedPassword = generatePassword(
        passwordLength,
        includeUppercase,
        includeNumbers,
        includeSymbols
      );
      setPassword(generatedPassword);
    } catch (error: any) {
      alert(error.message);
    }
  }

  function handleCopyPassword() {
    navigator.clipboard.writeText(password as string);
  }

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Password Generator</h1>
      <div className="mb-4">
        <label htmlFor="password-length" className="block font-medium mb-2">
          Password Length
        </label>
        <input
          type="number"
          id="password-length"
          value={passwordLength}
          onChange={(e) => setPasswordLength(parseInt(e.target.value))}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          min="8"
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2">Include:</label>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="include-uppercase"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="include-uppercase">Uppercase Letters</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="include-numbers"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="include-numbers">Numbers</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="include-symbols"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="include-symbols">Symbols</label>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="generated-password" className="block font-medium mb-2">
          Generated Password
        </label>
        <div className="flex items-center">
          <input
            type="text"
            id="generated-password"
            value={password}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            readOnly
          />
          {password && (
            <button onClick={handleCopyPassword} className="ml-2">
              <span className="h-5 w-5 text-gray-400 hover:text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
                  <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        onClick={handleGeneratePassword}
      >
        Generate Password
      </button>
    </div>
  );
}

export default PasswordGenerator;
