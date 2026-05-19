import { test } from '../../_fixtures/fixtures';
import { SIGN_UP_SUCCESSFUL_REGISTRATION_MESSAGE } from '../../../src/ui/constants/authMessages';

test(`Successful 'Sign Up' flow test`, async ({ userData, signUpPage }) => {
  await signUpPage.open();

  await signUpPage.fillForm(userData);
  await signUpPage.clickRegisterButton();

  await signUpPage.assertSuccessMessageContainsText(
    SIGN_UP_SUCCESSFUL_REGISTRATION_MESSAGE,
  );
});
