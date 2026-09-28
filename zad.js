class PiggyBank {
#balance = 0;

put(amount) {
    if (amount <= 0) {
     console.log('Некорректная сумма');
     return; 
    }
    this.#balance += amount;
}

take(amount) {
    if (amount > this.#balance) {
     console.log('Недостаточно средств');
     return; 
    }
    this.#balance -= amount;
}
getBalance() {
    return this.#balance;
}
}
const bank = new PiggyBank();

bank.put(100);
bank.put(50);

bank.take(30);

console.log('Баланс:', bank.getBalance());

bank.take(1000);

bank.put(-5);
