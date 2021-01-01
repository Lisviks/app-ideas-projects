const dollarInput = document.querySelector('.dollars');
const centsOutput = document.querySelector('.cents');

const convertToCoins = (dollars) => {
  const cents = Math.round(dollars * 100);
  const quarters = Math.floor(cents / 25);
  const dimes = Math.floor((cents - quarters * 25) / 10);
  const nickels = Math.floor((cents - quarters * 25 - dimes * 10) / 5);
  const pennies = Math.floor(cents - quarters * 25 - dimes * 10 - nickels * 5);

  return { quarters, dimes, nickels, pennies };
};

dollarInput.addEventListener('change', (e) => {
  const dollars = +e.target.value;
  const { quarters, dimes, nickels, pennies } = convertToCoins(dollars);

  centsOutput.innerText = `Quarters: ${quarters}, Dimes: ${dimes}, Nickels: ${nickels}, Pennies: ${pennies}`;
});
