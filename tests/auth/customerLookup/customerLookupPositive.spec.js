import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { CUSTOMER_LOOKUP_SUCCESSFUL_MESSAGE } from '../../../src/ui/constants/authMessages';
import * as allure from 'allure-js-commons';

test.describe(`Customer lookup positive tests`, () => {
  test(`Log in using 'Forgot login info?' page`, async ({
    userData,
    signUpPage,
    customerLookupPage,
  }) => {
    await allure.severity('critical');

    await signUpUser(signUpPage, userData);
    await customerLookupPage.open();
    await customerLookupPage.fillForm(userData);
    await customerLookupPage.clickFindMyLoginInfoButton();
    await customerLookupPage.assertSuccessMessageContainsText(
      CUSTOMER_LOOKUP_SUCCESSFUL_MESSAGE,
    );
    await customerLookupPage.assertUsernameContainsText(userData.username);
    await customerLookupPage.assertPasswordContainsText(userData.password);
  });
});
