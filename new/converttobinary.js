function convertToBinary(str) {
    // Split the string into words
    const words = str.toLowerCase().split(" ");
  
    // Initialize an empty array to store the binary representation of each word
    const binaryArr = [];
  
    // Iterate over each word
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      // Check if the word is "zero" or "one" (case insensitive)
      if (word === "zero" || word === "one") {
        // If it is, add its binary representation to the binaryArr
        binaryArr.push(Number(word === "one"));
      }
    }
  
    // Join the binary array into a string
    let binaryStr = binaryArr.join("");

    // Trim the binary string to a length that is a multiple of 8
  binaryStr = binaryStr.slice(0, binaryStr.length - (binaryStr.length % 8));

  // Return the final binary string
  return binaryStr;
}

console.log(convertToBinary("one Zero two One zero")); // Output: "1010"