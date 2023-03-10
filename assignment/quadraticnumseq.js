function quadraticSequence(arr) {
    // First, calculate the quadratic equation of the sequence
    const a = arr[0];
    const b = Math.floor((arr[1] - a) / 2);
    const c = arr[1] - a - b;
    // Then, generate the next terms in the sequence
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(a + b * i + c * i * i);
    }
    return result;
  }

  console.log(quadraticSequence([0, 1, 6, 15, 28]))