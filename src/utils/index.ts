export function generatePassword(
  length: number = 12,
  includeUppercase: boolean = true,
  includeNumbers: boolean = true,
  includeSymbols: boolean = true
): string {
  if (length < 8) {
    throw new Error("Password length must be at least 8 characters");
  }

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = includeUppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
  const numberChars = includeNumbers ? "0123456789" : "";
  const symbolChars = includeSymbols ? "!@#$%^&*()_+-=[]{};:,.<>?|~" : "";
  const allChars = lowercaseChars + uppercaseChars + numberChars + symbolChars;

  const array = new Uint32Array(length);
  const cryptoObj = window.crypto || (window as any).msCrypto; // Use browser-provided crypto object if available, otherwise use msCrypto for Internet Explorer
  cryptoObj.getRandomValues(array); // Fill array with cryptographically secure random values

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = array[i] % allChars.length; // Use the remainder of the division to get a random index within the range of allChars
    password += allChars[randomIndex];
  }

  // Ensure that the password meets certain strength requirements
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSymbols = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

  if (!hasLowercase || !hasUppercase || !hasNumbers || !hasSymbols) {
    const missingChars =
      (hasLowercase ? "" : "lowercase letters, ") +
      (hasUppercase ? "" : "uppercase letters, ") +
      (hasNumbers ? "" : "numbers, ") +
      (hasSymbols ? "" : "symbols");
    throw new Error(
      `Generated password is missing required characters: ${missingChars}`
    );
  }

  return password;
}
