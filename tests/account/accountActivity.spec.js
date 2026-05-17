import { test } from '../_fixtures/fixtures';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';

test.describe(`Account activity`, () => {
  test(`Account activity heading is shown after sign up`, async ({
    accountDetailsPage,
    signedUpUserWithOneAccount,
  }) => {
    const { accountData } = signedUpUserWithOneAccount;
    await accountDetailsPage.open(accountData.accountId);
    await accountDetailsPage.assertAccountActivityHeadingIsVisible();
  });
});
