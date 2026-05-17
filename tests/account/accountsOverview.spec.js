import { test } from '../_fixtures/fixtures';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';

test(`Accounts overview have only one account after creation`, async ({
  userData,
  signUpPage,
  accountsOverviewPage,
}) => {
  await signUpUser(signUpPage, userData);
  await accountsOverviewPage.open();
  await accountsOverviewPage.assertUserHasOnlyOneAccount();
  await accountsOverviewPage.assertTotalRowIsVisible();
});
