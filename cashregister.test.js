/* eslint-disable no-undef */
const checkCashRegister = require("./cashregister");

test("function should return an object", () => {
  expect(
    typeof checkCashRegister(19.5, 20, [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100],
    ])
  ).toBe("object");
});

describe("Successful change", () => {
  test("have change 1", () => {
    expect(
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
      ])
    ).toBe({ status: "OPEN", change: [["QUARTER", 0.5]] });
  });
});
