function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;
  let changeInRegister = cid.reduce(
    (totalRegister, item) => totalRegister + item[1],
    0
  );
  let change = {};
  if (changeDue > changeInRegister)
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  if (changeDue === changeInRegister) return { status: "CLOSED", change: cid };
  return change;
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

module.exports = checkCashRegister;
