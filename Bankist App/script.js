"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Thong Nguyen",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2024-06-17T00:00:00.000Z",
    "2024-06-18T00:00:00.000Z",
    "2024-06-19T00:00:00.000Z",
    "2024-06-21T00:00:00.000Z",
    "2024-06-22T00:00:00.000Z",
    "2024-06-23T00:00:00.000Z",
    "2024-06-24T00:00:00.000Z",
    "2024-06-25T00:00:00.000Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

let currentUserIndex = -1;

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
let sorted = false;
let seconds = 300;
let timerID = -1;
/////////////////////////////////////////////////

//Create username
const createUsername = function (user) {
  const username = user.owner
    .toLowerCase()
    .split(" ")
    .map((e) => e[0])
    .join("");
  return username;
};

const estimateDay = (date) => {
  const estimate = Math.round((Date.now() - date) / (60 * 60 * 1000 * 24));
  if (estimate === 0) {
    return "Today";
  } else if (estimate === 1) {
    return "Yesterday";
  } else if (estimate <= 7) {
    return `${estimate} days ago`;
  } else {
    return null;
  }
};

// SIGN IN

function handleLoginRequest(e) {
  e.preventDefault();
  if (btnLogin.textContent === "🚪") return logout();
  const username = inputLoginUsername.value;
  const pin = Number(inputLoginPin.value);

  currentUserIndex = accounts.findIndex(
    (acc) => createUsername(acc) === username && acc.pin === pin
  );
  if (currentUserIndex !== -1) {
    btnLogin.textContent = "🚪";
    containerApp.style.opacity = 1;
    setTimerAgain();
    resetAccountField();
  }
  showAccount();
}

const showDate = (date, mainboard = false) => {
  const e = new Date(date);
  const estimate = estimateDay(e);
  if (estimate && !mainboard) return estimate;
  const d = String(e.getDate()).padStart(2, 0);
  const m = String(e.getMonth() + 1 >= 13 ? 1 : e.getMonth() + 1).padStart(
    2,
    0
  );
  const y = e.getFullYear();
  const h = String(e.getHours()).padStart(2, 0);
  const minutes = String(e.getMinutes()).padStart(2, 0);
  if (mainboard) return `${m}/${d}/${y}, ${h}:${minutes}`;
  return `${m}/${d}/${y}`;
};

function showMovements(sort) {
  containerMovements.innerHTML = "";
  let currentUser = accounts[currentUserIndex];
  let movements = [...currentUser.movements];
  if (sort) movements.sort((a, b) => a - b);
  movements.forEach((mov, index) => {
    const displayDates = showDate(currentUser.movementsDates[index]);
    const html = `   <div class="movements__row">
    <div class="movements__type movements__type--${
      mov > 0 ? "deposit" : "withdrawal"
    }">${index + 1} ${mov > 0 ? `Deposit` : "Withdraw"}</div>
    <div class="movements__date">${displayDates}</div>
    <div class="movements__value">${mov} $</div>
  </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
}

function showBalance() {
  let currentBalance = accounts[currentUserIndex].movements.reduce(
    (acc, cur) => acc + cur,
    0
  );
  let deposit = accounts[currentUserIndex].movements.reduce((acc, cur) => {
    if (cur > 0) return acc + cur;
    else return acc;
  }, 0);
  let withdrawal = accounts[currentUserIndex].movements.reduce((acc, cur) => {
    if (cur < 0) return acc - cur;
    else return acc;
  }, 0);

  let interest =
    Math.round(
      (deposit * accounts[currentUserIndex].interestRate * 100) / 100
    ) / 100;

  labelBalance.textContent = `${currentBalance.toFixed(2)} $`;
  labelSumIn.textContent = `${deposit.toFixed(2)} $`;
  labelSumOut.textContent = `${withdrawal.toFixed(2)} $`;
  labelSumInterest.textContent = `${interest.toFixed(2)} $`;
}

function showWelcomeSign() {
  labelWelcome.textContent = `Welcome back, ${
    accounts[currentUserIndex].owner.split(" ")[0]
  }`;
  labelDate.textContent = showDate(Date.now(), true);
}

function showAccount(sort = false) {
  if (currentUserIndex === -1) return;
  showWelcomeSign();
  showMovements(sort);
  showBalance();
  setTimerAgain();
}

// Logout
function resetAccountField() {
  inputLoginUsername.value = "";
  inputLoginPin.value = "";
  inputCloseUsername.value = "";
  inputClosePin.value = "";
  inputTransferAmount.value = "";
  inputTransferTo.value = "";
  inputLoanAmount.value = "";
  inputLoginUsername.classList.toggle("hidden");
  inputLoginPin.classList.toggle("hidden");
}

function logout() {
  resetAccountField();
  btnLogin.textContent = "→";
  currentUserIndex = -1;
  containerApp.style.opacity = 0;
  labelWelcome.textContent = "Welcome to get started";
  clearTimeout(timerID);
  showAccount();
}

// TRANSFER
const handleTransferRequest = (e) => {
  e.preventDefault();
  if (currentUserIndex === -1) return;

  let currentBalance = accounts[currentUserIndex].movements.reduce(
    (acc, cur) => acc + cur,
    0
  );
  let transferAmount = Number(inputTransferAmount.value);
  let accountReceived = inputTransferTo.value;
  if (!transferAmount || !accountReceived) return;
  let accountReceivedIndex = accounts.findIndex(
    (acc) => createUsername(acc) === accountReceived
  );
  if (
    accountReceivedIndex == -1 ||
    transferAmount + 50 >= currentBalance ||
    transferAmount < 0 ||
    accountReceivedIndex === currentUserIndex
  )
    return alert("Sorry, the transaction is not succesful 😭");
  accounts[currentUserIndex].movements.push(-transferAmount);
  accounts[accountReceivedIndex].movements.push(transferAmount);
  accounts[currentUserIndex].movementsDates.push(new Date().toISOString());
  accounts[accountReceivedIndex].movementsDates.push(new Date().toISOString());
  alert("Great! Transaction is fulfilled succesfully 🎉");
  showAccount();
};

// LOAN
const handleLoanRequest = (e) => {
  e.preventDefault();
  if (currentUserIndex === -1) return;

  let loanAmt = Number(inputLoanAmount.value);
  if (
    loanAmt > 0 &&
    accounts[currentUserIndex].movements.some((mov) => mov * 0.1 >= loanAmt)
  ) {
    setTimeout(() => {
      alert(`${loanAmt}$ is succesfully deposited into your account 🎉`);
      accounts[currentUserIndex].movements.push(loanAmt);
      accounts[currentUserIndex].movementsDates.push(new Date().toISOString());
      showAccount();
    }, 2000);
  } else {
    alert(`You failed to loan`);
  }
  inputLoanAmount.value = "";
};

// Close account
function handleCloseRequest(e) {
  e.preventDefault();
  if (currentUserIndex === -1) return;
  let deleteUserAccount = inputCloseUsername.value;
  let deletePin = Number(inputClosePin.value);
  if (!deleteUserAccount || !deletePin) return;
  if (
    currentUserIndex ===
    accounts.findIndex(
      (acc) =>
        createUsername(acc) === deleteUserAccount && acc.pin === deletePin
    )
  ) {
    let confirm = window.confirm(
      "Are you sure you want to delete this account?"
    );
    if (confirm) {
      alert("Delete account succesfully");
      accounts.pop(currentUserIndex);
      logout();
    }
  }
}

//Sort transaction
const handleSort = (e) => {
  if (currentUserIndex === -1) return;
  sorted = !sorted;
  showAccount(sorted);
};

//Timer
const setTimerAgain = () => {
  clearTimeout(timerID);
  seconds = 300;
  labelTimer.textContent = "05:00";
  timerID = setInterval(() => {
    seconds--;
    let min = String(Math.floor(seconds / 60)).padStart(2, 0);
    let second = String(seconds % 60).padStart(2, 0);
    labelTimer.textContent = `${min}:${second}`;
    if (seconds === 0) logout();
  }, 1000);
};

btnLogin.addEventListener("click", handleLoginRequest);
btnLoan.addEventListener("click", handleLoanRequest);
btnTransfer.addEventListener("click", handleTransferRequest);
btnClose.addEventListener("click", handleCloseRequest);
btnSort.addEventListener("click", handleSort);
