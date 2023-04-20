# Bank Tech Test

The task - To make a banking application that can run in the command line. The user will be able to deposit, withdraw and see bank statements. The application was coded in JavaScript.

## Using the program

From the directory:

```
$ node
```

to start the command line interface.
Then run the following two commands:

```
const Bank = require("./bank")
let bank = new Bank()
```

You can use three methods to interact with the bank programme.

```
bank.deposit()
```

Should be provided with a numeric value.

```
bank.withdraw()
```

Should be provided with a numeric value.

```
bank.statement()
```

Will output a record of all transactions to date.

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```