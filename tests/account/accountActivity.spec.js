import { test } from '../_fixtures/fixtures';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import * as allure from 'allure-js-commons';

test.describe(`Account activity`, () => {
  test(`Account activity heading is shown after sign up`, async ({
    accountDetailsPage,
    signedUpUserWithOneAccount,
  }) => {
    await allure.severity('normal');

    const { accountData } = signedUpUserWithOneAccount;
    await accountDetailsPage.open(accountData.accountId);
    await accountDetailsPage.assertAccountActivityHeadingIsVisible();
  });
});
