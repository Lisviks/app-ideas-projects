function bin2dec(binary) {
  if (process.argv.length < 3) {
    return 'Enter binary number';
  }

  binary = binary.toString();

  for (i = 0; i < binary.length; i++) {
    if (+binary[i] !== 1 && +binary[i] !== 0) {
      return 'Enter binary number(1s and 0s)';
    }
  }

  let current = 1;
  let decimal = 0;
  for (let i = binary.length - 1; i >= 0; i--) {
    if (i === binary.length - 1) {
      if (+binary[i] === 1) decimal += current;
      current++;
      continue;
    }
    if (+binary[i] === 1) decimal += current;
    current *= 2;
  }

  return decimal;
}

const dec = bin2dec(process.argv[2]);
console.log(dec);
