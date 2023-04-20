const DateFormatter = require('./dateFormatter');
const StatementPrinter = require('./statementPrinter');

class Bank {
    #transactions = [];
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
        this.#transactions.push({
            date: DateFormatter.europeanToday(),
            amount,
        });
    }

    withdraw(amount) {
        this.#balance -= amount;
        this.#transactions.push({
            date: DateFormatter.europeanToday(),
            amount: -amount,
        });
    }

    statement() {
        StatementPrinter.print(this.#transactions, this.#balance);
    }

    get transactions() {
        return this.#transactions;
    }

    get balance() {
        return this.#balance;
    }
}

module.exports = Bank;
