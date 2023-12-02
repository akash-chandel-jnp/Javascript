/* Write your code below. Good luck! 🙂 */


const bills = [ 125, 555, 44]
function calcTip(bill_amount){
    if( bill_amount>50 && bill_amount<300) {
        return 0.15*bill_amount
        
    } else {
        return 0.20*bill_amount 
    }
}
const tips = [calcTip(bills[0]), calcTip(bills[1]) , calcTip(bills[2])]
console.log(tips);
const totals = [ bills[0] + calcTip(bills[0]) , bills[1] + calcTip(bills[1]) , bills[2] + calcTip(bills[2])]
console.log(totals);    