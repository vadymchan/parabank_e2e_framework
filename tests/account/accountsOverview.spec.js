import { test } from '../_fixtures/fixtures';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import * as allure from 'allure-js-commons';

test.describe(`Accounts Overview`, () => {
  test(`Accounts overview have only one account after creation`, async ({
    userData,
    signUpPage,
    accountsOverviewPage,
  }) => {
    await allure.severity('critical');

    await signUpUser(signUpPage, userData);
    await accountsOverviewPage.open();
    await accountsOverviewPage.assertUserHasOnlyOneAccount();
    await accountsOverviewPage.assertTotalRowIsVisible();
  });
});
