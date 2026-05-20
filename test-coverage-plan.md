**Not logged in user:**

- _Positive and negative auth - register & sign-in._
- _Forgot login info?_

**Logged in user:**

- _Account Overview_
- _Account Overivew -> Account Details & Account Activity filtering_
- _Open New Account_
- _Transfer Funds_
- _Bill Pay_
- _Find Transactions_
- _Update Contact Info_
- _Request Loan_
- _Log out_

---

## Not logged in user:

### Positive and negative auth - register & sign-in.

#### Register

##### Happy path

- all valid fields

##### Negative testing

- all empty fields
- invalid fields (only confirm password)
- existing user

#### Sign-in

##### Happy path

- correct data

##### Negative testing

- user not created
- password is incorrect
- one of the inputs is empty

#### Forgot login info?

##### Happy path

- correct data (tried to use valid data from created user but still got error. I used '1234' value to all fields during registration)

##### Negative testing

- incorrect data

## Logged in user:

### Account Overview

- account is visible and have some money

### Account Overivew -> Account Details & Account Activity filtering

- maybe just check that values in account details are correct?

### Open New Account

- create account (parametrized - savings / checking)

### Transfer Funds

#### Happy path 

- transfer money (parametrized - amount / from-to)

#### Negative testing

- empty fields
- invalid info (char in int fields)


### Bill Pay

#### Happy path 

- valid transfer

#### Negative testing

- empty fields
- invalid info (char in int fields / verify account number)

### Find Transactions

#### Happy path 

- find by transaction id (valid id)
- Find by Date (valid date format)
- Find by Date Range (valid date range format)
- Find by Amount (valid amount)

#### Negative testing

- find by transaction id (invalid id, invalid input format)
- Find by Date (invalid date range, invalid input format)
- Find by Date Range (invalid date range, invalid input format)
- Find by Amount (invalid amount, invalid input format)

### Update Contact Info

#### Happy path 

- change fields (after that logout -> login to check updates)

#### Negative testing

- empty fields

### Request Loan

#### Happy path 

- change fields (after that logout -> login to check updates)

#### Negative testing

- invalid input (additional question to negative values - do i need to handle that? for instance i could do a loan on 1000$ and set 'down payment' to -1000 so that i will have now both +1000 on my balance and 1000 as a loan)
- empty fields

### Log out

- just log out happy path (register -> logout)


## Questions 

- is it okay to take more money than in your account? (so you have negative values?)
- is it okay that you can make 0, negative or transactions that more than your account money?

## Bug report 

- currently you can register the user with the same account info. Because of that 'Forgot login info?' doesn't work as expected
- if you enter char in the middle-end (e.g. "1e234" or "1234e") in 'account #' field you'll get server error (no validation)
- date format doesn't have 
- no validation for range in 'Find by Date Range' (when 'from' is later than 'due to')
- in 'Request Loan' the 'down payment' could be higher than 'Loan Amount'. the loan takes 'down payment' value