const MONEY_VALUES = {
  PENNY: 1,
  NICKEL: 5,
  DIME: 10,
  QUARTER: 25,
  ONE: 100,
  FIVE: 500,
  TEN: 1000,
  TWENTY: 2000,
  "ONE HUNDRED": 10000,
};

function checkCashRegister(price, cash, cid) {
  let changeDue = Math.round(cash * 100) - Math.round(price * 100);

  let registerTotal = cid.reduce(
    (totalRegister, item) => totalRegister + Math.round(item[1] * 100),
    0
  );

  if (changeDue > registerTotal)
    return { status: "INSUFFICIENT_FUNDS", change: [] };

  if (changeDue === registerTotal) return { status: "CLOSED", change: cid };

  let changeArr = [];

  let changeObj = {};

  let reverseCid = [...cid]
    .map((item) => [item[0], Math.round(item[1] * 100)])
    .reverse();

  reverseCid.forEach((item) => {
    while (item[1] !== 0 && changeDue >= MONEY_VALUES[item[0]]) {
      let exist = changeArr.findIndex((thisIitem) => thisIitem[0] === item[0]);
      exist === -1
        ? changeArr.push([item[0], MONEY_VALUES[item[0]] / 100])
        : changeArr.map((item2) =>
            item2.find((item3) => item3 === item[0])
              ? (item2[1] += MONEY_VALUES[item[0]] / 100)
              : item2
          );
      changeDue -= MONEY_VALUES[item[0]];
      item[1] -= MONEY_VALUES[item[0]];
    }
  });

  if (changeDue > 0) return { status: "INSUFFICIENT_FUNDS", change: [] };
  changeObj = { status: "OPEN", change: changeArr };
  return changeObj;
}

checkCashRegister(19.5, 20, [
  ["PENNY", 0],
  ["NICKEL", 0],
  ["DIME", 0.2],
  ["QUARTER", 0],
  ["ONE", 1],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);

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

checkCashRegister(3.26, 100, [
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
