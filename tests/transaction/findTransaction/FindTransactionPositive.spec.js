import { test } from '../../_fixtures/fixtures';
import { shiftDate } from '../../../src/common/helpers/timeHelpers';
import { parseAmount } from '../../../src/common/helpers/currencyHelpers';

test.describe(`Find Transaction positive tests`, () => {
  let fromAccountId;
  let transactionData;

  test.beforeEach(
    async ({ signedUpUserWithTwoAccounts, accountDetailsPage }) => {
      const [accountData] = signedUpUserWithTwoAccounts;
      fromAccountId = accountData.accountId;
      await accountDetailsPage.open(fromAccountId);
      transactionData =
        await accountDetailsPage.getTransactionDataFromTableRow(0);
    },
  );

  test(`Finds transaction by Transaction ID`, async ({
    findTransactionPage,
  }) => {
    await findTransactionPage.open();

    await findTransactionPage.selectAccountId(fromAccountId);
    await findTransactionPage.fillFindByTransactionIdField(
      transactionData.transactionId,
    );
    await findTransactionPage.clickFindByTransactionIdButton();
    await findTransactionPage.assertTransactionIsVisible(transactionData);
  });

  test(`Finds transaction by Date`, async ({ findTransactionPage }) => {
    await findTransactionPage.open();

    await findTransactionPage.selectAccountId(fromAccountId);
    await findTransactionPage.fillFindByDateField(transactionData.date);
    await findTransactionPage.clickFindByDateButton();
    await findTransactionPage.assertTransactionIsVisible(transactionData);
  });

  test(`Finds transaction by Date Range`, async ({ findTransactionPage }) => {
    const fromDate = shiftDate(transactionData.date, { days: -1 });
    const toDate = shiftDate(transactionData.date, { days: 1 });

    await findTransactionPage.open();

    await findTransactionPage.selectAccountId(fromAccountId);
    await findTransactionPage.fillFindByDateRangeInputs(fromDate, toDate);
    await findTransactionPage.clickFindByDateRangeButton();
    await findTransactionPage.assertTransactionIsVisible(transactionData);
  });

  test(`Finds transaction by Amount`, async ({ findTransactionPage }) => {
    let amount = transactionData.debit || transactionData.credit || '';
    amount = parseAmount(amount);

    await findTransactionPage.open();

    await findTransactionPage.selectAccountId(fromAccountId);
    await findTransactionPage.fillFindByAmountField(amount);
    await findTransactionPage.clickFindByAmountButton();
    await findTransactionPage.assertTransactionIsVisible(transactionData);
  });
});
