# Decoder Ring
Welcome to the Decoder Ring project! This application allows you to encode and decode messages using various ciphers. The ciphers available are the Caesar Shift, the Polybius Square, and the Substitution Cipher. Each cipher has its own set of rules and constraints, and you can use this application to practice your coding skills and algorithms.

# Usage
The application provides three main functions, one for each cipher:

# Caesar Shift
The Caesar Shift cipher is used to encode and decode messages by shifting the letters of the alphabet by a specified number.

```js
const encodedMessage = caesar('thinkful', 3); // Output: 'wklqnixo'
const decodedMessage = caesar('wklqnixo', 3, false); // Output: 'thinkful'
```
# Polybius Square
The Polybius Square cipher is a grid-based cipher where each letter is represented by a numerical pair.

```js
const encodedMessage = polybius('thinkful'); // Output: '4432423352125413'
const decodedMessage = polybius('4432423352125413', false); // Output: 'th(i/j)nkful'
```

# Substitution Cipher
The Substitution Cipher involves replacing each letter of the standard alphabet with a corresponding letter from the substitution alphabet.

```js
const encodedMessage = substitution('thinkful', 'xoyqmcgrukswaflnthdjpzibev'); // Output: 'jrufscpw'
const decodedMessage = substitution('jrufscpw', 'xoyqmcgrukswaflnthdjpzibev', false); // Output: 'thinkful'
```

# Note
The Decoder Ring application is designed to handle only spaces and letters. It is assumed that no additional symbols will be included in the input.

# Acknowledgments
Special thanks to the instructors and team at Thinkful for providing the project requirements and guidance.
