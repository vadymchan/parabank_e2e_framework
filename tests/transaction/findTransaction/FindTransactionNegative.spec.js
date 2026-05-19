import { test } from '../../_fixtures/fixtures';
import {
  FIND_TRANSACTIONS_TRANSACTION_ID_ERROR_MESSAGE,
  FIND_TRANSACTIONS_DATE_ERROR_MESSAGE,
  FIND_TRANSACTIONS_DATE_RANGE_ERROR_MESSAGE,
  FIND_TRANSACTIONS_AMOUNT_ERROR_MESSAGE,
} from '../../../src/ui/constants/transactionMessages';

test.describe(`Find Transaction negative tests`, () => {
  test(`Shows error when Transaction ID is empty`, async ({
    signedUpUserWithOneAccount,
    findTransactionPage,
  }) => {
    await findTransactionPage.open();
    await findTransactionPage.clickFindByTransactionIdButton();
    await findTransactionPage.assertFindByTransactionIdErrorMessageHasText(
      FIND_TRANSACTIONS_TRANSACTION_ID_ERROR_MESSAGE,
    );
  });

  test(`Shows error when Date is empty`, async ({
    signedUpUserWithOneAccount,
    findTransactionPage,
  }) => {
    await findTransactionPage.open();
    await findTransactionPage.clickFindByDateButton();
    await findTransactionPage.assertFindByDateErrorMessageHasText(
      FIND_TRANSACTIONS_DATE_ERROR_MESSAGE,
    );
  });

  test(`Shows error when Date Range is empty`, async ({
    signedUpUserWithOneAccount,
    findTransactionPage,
  }) => {
    await findTransactionPage.open();
    await findTransactionPage.clickFindByDateRangeButton();
    await findTransactionPage.assertFindByDateRangeErrorMessageHasText(
      FIND_TRANSACTIONS_DATE_RANGE_ERROR_MESSAGE,
    );
  });

  test(`Shows error when Amount is empty`, async ({
    signedUpUserWithOneAccount,
    findTransactionPage,
  }) => {
    await findTransactionPage.open();
    await findTransactionPage.clickFindByAmountButton();
    await findTransactionPage.assertFindByAmountErrorMessageHasText(
      FIND_TRANSACTIONS_AMOUNT_ERROR_MESSAGE,
    );
  });

  test(`Shows error when Transaction ID has invalid format`, async ({
    signedUpUserWithOneAccount,
    findTransactionPage,
  }) => {
    const transactionId = 'invalid Transaction ID';
    await findTransactionPage.open();
    await findTransactionPage.fillFindByTransactionIdField(transactionId);
    await findTransactionPage.clickFindByTransactionIdButton();
    await findTransactionPage.assertFindByTransactionIdErrorMessageHasText(
      FIND_TRANSACTIONS_TRANSACTION_ID_ERROR_MESSAGE,
    );
  });

  test(`Shows error when Date has invalid format`, async ({
    signedUpUserWithOneAccount,
    findTransactionPage,
  }) => {
    const date = 'invalid Date';
    await findTransactionPage.open();
    await findTransactionPage.fillFindByDateField(date);
    await findTransactionPage.clickFindByDateButton();
    await findTransactionPage.assertFindByDateErrorMessageHasText(
      FIND_TRANSACTIONS_DATE_ERROR_MESSAGE,
    );
  });

  test(`Shows error when Date Range has invalid format`, async ({
    signedUpUserWithOneAccount,
    findTransactionPage,
  }) => {
    const fromDate = 'invalid From Date';
    const toDate = 'invalid To Date';
    await findTransactionPage.open();
    await findTransactionPage.fillFindByDateRangeInputs(fromDate, toDate);
    await findTransactionPage.clickFindByDateRangeButton();
    await findTransactionPage.assertFindByDateRangeErrorMessageHasText(
      FIND_TRANSACTIONS_DATE_RANGE_ERROR_MESSAGE,
    );
  });

  test(`Shows error when Amount has invalid format`, async ({
    signedUpUserWithOneAccount,
    findTransactionPage,
  }) => {
    const amount = 'invalid Amount';
    await findTransactionPage.open();
    await findTransactionPage.fillFindByAmountField(amount);
    await findTransactionPage.clickFindByAmountButton();
    await findTransactionPage.assertFindByAmountErrorMessageHasText(
      FIND_TRANSACTIONS_AMOUNT_ERROR_MESSAGE,
    );
  });
});
