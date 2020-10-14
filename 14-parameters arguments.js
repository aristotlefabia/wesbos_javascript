function calculateBill(billAmount, taxRate = 2, tipRate = 3) {
  console.log(`bill: ${billAmount} tax: ${taxRate}  tip: ${tipRate}`);
  return billAmount + billAmount * taxRate + billAmount * tipRate;
}

console.log(calculateBill(1000.0, 0.15, 0.2));

console.log(calculateBill(1000.0, null, 0.2));

console.log(calculateBill(1000.0, undefined, 0.2));
