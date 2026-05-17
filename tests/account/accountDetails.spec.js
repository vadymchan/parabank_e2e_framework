import { test } from '../_fixtures/fixtures';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';

test.describe(`Account details`, () => {
  test(`Account info is shown after sign up`, async ({
    accountDetailsPage,
    signedUpUserWithOneAccount,
  }) => {
    const { accountData } = signedUpUserWithOneAccount;
    const accountType = 'CHECKING';

    await accountDetailsPage.open(accountData.accountId);

    await accountDetailsPage.assertAccountIdHasText(accountData.accountId);
    await accountDetailsPage.assertAccountTypeContainsText(accountType);
    await accountDetailsPage.assertBalanceContainsText(accountData.balance);
    await accountDetailsPage.assertAvailableBalanceContainsText(
      accountData.availableBalance,
    );
  });
});
