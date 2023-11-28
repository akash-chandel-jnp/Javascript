/* CHALLENGE #4
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%. */


let bill = 500

let tip = (bill > 50 && bill < 300) ? bill*0.15 : bill * 0.20

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)





































// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);