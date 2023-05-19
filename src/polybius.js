const polybiusModule = (function () {
  const lookup1 = {
    a: 11, b: 21, c: 31, d: 41, e: 51,
    f: 12, g: 22, h: 32, i: 42, j: 42, k:52,
    l: 13, m: 23, n: 33, o: 43, p: 53,
    q: 14, r: 24, s: 34, t: 44, u: 54,
    v: 15, w: 25, x: 35, y: 45, z: 55, " ": " "
  }
  
  const lookup2 = {
    11: "a", 21: "b", 31: "c", 41: "d", 51: "e",
    12: "f", 22: "g", 32: "h", 42: "(i/j)", 52: "j",
    13: "l", 23: "m", 33: "n", 43: "o", 53: "p",
    14: "q", 24: "r", 34: "s", 44: "t", 54: "u",
    15: "v", 25: "w", 35: "x", 45: "y", 55: "z", " ": " "
  }


  function polybius(input, encode = true) {
  
  let result = "" //result equals a string
    
  if(encode === true){ //check if encoding
    for(let i = 0; i < input.length; i++){
      for(const key in lookup1){
        if (key === input[i]) result += `${lookup1[key]}` //add corresponding numbers to string
      }
    }
    return result
  } else { //if decoding
    let oddCheck = ""
    for(let i = 0; i < input.length; i++){           //loop through input and check each character to see if it is a number
      if(input[i] !== " ") oddCheck += input[i]      // if it is a number, add to oddCheck
    } if(oddCheck.length % 2==0){                    // count characters in oddCheck
      let shift = 0 
      for(let j = 0; j < input.length;){
       if(input[j] === " "){
        result += input[j]
        j++     //increase count of loop by 1 if a space is encountered 
       }else{
        for(const val in lookup2){
          if (val === input[j] + input[j + 1]) {
            result += `${lookup2[val]}`
            j += 2                                  //increase count of loop by 2 if given set of numbers
        }
      }



        
       }
       
      }
      return result
    } else {                                      //if oddCheck is odd, return false
      return false                                   
    }
  }
}
  

return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };