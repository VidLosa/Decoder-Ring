// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  let lookup = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet = "", encode = true) {
    // your solution code here

    // make sure there's exactly 26 characters in substitution alphabet
    if(alphabet.length !== 26) return false
    const isUnique = new Set(alphabet).size == alphabet.length

    if(isUnique === false) return false
    
    //result is an empty string
    result = ""
    //this function replaces chracters in the input using substitute alphabet
    function replace(input, alphabet){

      for(let i=0; i < input.length; i++){
        const letter = lookup.indexOf(input[i])

    // if the character is not a letter it adds the character as normal
        if (letter === -1){
          result +=input[i]
    // otherwise it replaces the letter
        } else {
          result += alphabet[letter]
        }
      }
      return result
    }

    function reveal(input, lookup){
      for(let i=0; i < input.length; i++){
        const letter = alphabet.indexOf(input[i])

        if (letter === -1){
          result +=input[i]
        } else {
          result += lookup[letter]
        }
      }
      return result
    }
    

    if(encode === true){
      return replace(input, alphabet)
    } else {
      return reveal(input, lookup)
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };