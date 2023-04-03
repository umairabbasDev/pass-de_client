import { useState } from "react";
import usePasswordGenerator from "./hook";

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(12);
  const {
    password,
    setIncludeUppercase,
    setIncludeNumbers,
    setIncludeSymbols,
  } = usePasswordGenerator(passwordLength);

  
  return (
    <div>
      <button type="button">gen</button>
    </div>
  );
};

export default PasswordGenerator;
