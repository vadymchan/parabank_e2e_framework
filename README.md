# ParaBank E2E Test Framework

End-to-end UI tests for the [ParaBank](https://parabank.parasoft.com/parabank/) demo banking application, built with Playwright and JavaScript. Positive and negative coverage across authentication, accounts and transactions.

## What it covers

21 spec files across three domains:

- **Auth** - sign-up, sign-in, customer lookup (forgotten login), log-out
- **Accounts** - accounts overview, account details, open new account, account activity, update profile
- **Transactions** - transfer funds, bill pay, request loan, find transactions

Features with input validation are covered in positive and negative pairs.

## Architecture

- **Page Object Model** - 12 page objects grouped by domain (`src/ui/pages/{auth,account,transaction}`)
- **Actions layer** - reusable multi-step flows built on top of page objects (`src/ui/actions`)
- **Domain message constants** - expected UI messages kept in one place (`src/ui/constants`), so assertions reference a single source of truth instead of inline strings
- **Fixtures** - wire page objects and test data into tests (`tests/_fixtures`)
- **Generated test data** - unique user data via Faker (`src/common/testData`)

## Tech stack

- [Playwright](https://playwright.dev/) - test runner and browser automation
- JavaScript
- [Allure](https://allurereport.org/) - reporting
- ESLint + Prettier, husky + lint-staged - linting and pre-commit hooks

## Getting started

Install dependencies and browsers:

```bash
npm ci
npx playwright install
```

Allure requires Java 8 or higher. Install the Allure CLI:

```bash
npm install -g allure-commandline
```

## Running the tests

```bash
npx playwright test
```

## Report

```bash
allure serve allure-results
```
