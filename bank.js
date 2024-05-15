
let acountBalance = 100000;
function deposit(amount) {
  if (isNaN (amount)|| amount <= 0) {
    console.log("Invalid input");
  } else {
    acountBalance += amount;

    console.log(`Deposit Amount: ${amount}`);
    console.log(`newbalance: ${acountBalance}`);
  }
}

function withdrawal(amount) {
  if (isNaN(amount) || amount <= 0) 
  {
    console.log(`Invalid input`);
  } else if (amount > acountBalance) {
    console.log(`Insufficient Funds`);
  }
  else {
    acountBalance -= amount;

    console.log(`Withdrawal Amount: ${amount}`);
    console.log(`newbalance: ${acountBalance}`);
  }
}
function newBalance() {
  console.log(`Account Balance: ${acountBalance}`);
}
deposit(10000);

withdrawal(50000);

newBalance();