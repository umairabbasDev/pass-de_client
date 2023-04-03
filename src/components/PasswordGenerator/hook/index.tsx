import { useState } from "react";
import { generatePassword } from "../../../utils";

function usePasswordGenerator(defaultLength: number = 12) {
  const [passwordLength, setPasswordLength] = useState(defaultLength);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  return {
    password: generatePassword(
      passwordLength,
      includeUppercase,
      includeNumbers,
      includeSymbols
    ),
    setPasswordLength,
    setIncludeUppercase,
    setIncludeNumbers,
    setIncludeSymbols,
  };
}

export default usePasswordGenerator;
