import { test } from '../_fixtures/fixtures';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import * as allure from 'allure-js-commons';

const testParameters = [
  { activityPeriod: 'All', transactionType: 'All' },
  { activityPeriod: 'May', transactionType: 'All' },
  { activityPeriod: 'May', transactionType: 'Debit' },
  { activityPeriod: 'All', transactionType: 'Debit' },
  { activityPeriod: 'All', transactionType: 'Credit' },
];

test.describe(`Account activity`, () => {
  test(`Shows Account activity heading after sign up`, async ({
    accountDetailsPage,
    signedUpUserWithOneAccount,
  }) => {
    await allure.severity('normal');

    const { accountData } = signedUpUserWithOneAccount;
    await accountDetailsPage.open(accountData.accountId);
    await accountDetailsPage.assertAccountActivityHeadingIsVisible();
  });

  testParameters.forEach(({ activityPeriod, transactionType }) => {
    test(`Filters Account Activity by activityPeriod='${activityPeriod}', transactionType='${transactionType}'`, async ({
      signedUpUserWithTwoAccounts,
      accountDetailsPage,
    }) => {
      const accountData = signedUpUserWithTwoAccounts;
      const firstAccount = accountData[0];
      await accountDetailsPage.open(firstAccount.accountId);

      await accountDetailsPage.selectActivityPeriod(activityPeriod);
      await accountDetailsPage.selectTransactionType(transactionType);
      await accountDetailsPage.clickGoButton();

      await accountDetailsPage.assertAccountActivityFiltering(
        activityPeriod,
        transactionType,
      );
    });
  });
});
