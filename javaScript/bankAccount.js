function createBankAccount(accountHolder, mobile, email, initialBalance) {

    
    let balance = initialBalance;

    return {
        accountHolder,
        mobile,
        email,

        deposit(amount) {
            if (amount <= 0) {
                console.log("Invalid deposit amount");
                return;
            }

            balance += amount;
            console.log(`₹${amount} deposited successfully.`);
        },

        withdraw(amount) {
            if (amount <= 0) {
                console.log("Invalid withdrawal amount");
                return;
            }

            if (amount > balance) {
                console.log("Insufficient Balance");
                return;
            }

            balance -= amount;
            console.log(`₹${amount} withdrawn successfully.`);
        },

        checkBalance() {
            console.log(`Current Balance: ₹${balance}`);
        },

        checkBankProfile() {
            console.log("------ Bank Profile ------");
            console.log("Account Holder :", this.accountHolder);
            console.log("Mobile         :", this.mobile);
            console.log("Email          :", this.email);
            console.log("Balance        : ₹" + balance);
        }
    };
}

const acc1 = createBankAccount(
    "Anubhav Singh",
    "9876543210",
    "anubhav@gmail.com",
    10000
);

acc1.deposit(5000);
acc1.withdraw(2000);

acc1.checkBalance();

acc1.checkBankProfile();