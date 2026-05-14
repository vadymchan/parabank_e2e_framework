import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import {
  SIGN_IN_CREDENTIALS_INCORRECT_ERROR_MESSAGE,
  SIGN_IN_ONE_FIELD_IS_EMPTY_ERROR_MESSAGE,
} from '../../../src/ui/constants/authMessages';
import { faker } from '@faker-js/faker';

const testParameters = [
  {
    useUsername: true,
    usePassword: true,
    errorMessage: SIGN_IN_CREDENTIALS_INCORRECT_ERROR_MESSAGE,
  },
  {
    useUsername: true,
    usePassword: false,
    errorMessage: SIGN_IN_ONE_FIELD_IS_EMPTY_ERROR_MESSAGE,
  },
  {
    useUsername: false,
    usePassword: true,
    errorMessage: SIGN_IN_ONE_FIELD_IS_EMPTY_ERROR_MESSAGE,
  },
  {
    useUsername: false,
    usePassword: false,
    errorMessage: SIGN_IN_ONE_FIELD_IS_EMPTY_ERROR_MESSAGE,
  },
];

testParameters.forEach(({ useUsername, usePassword, errorMessage }) => {
  test.describe(`Sign in widh username=${useUsername}, password=${usePassword}`, () => {
    test(`Negative sign in tests`, async ({ signInPage }) => {
      const username = useUsername ? faker.internet.username() : '';
      const password = usePassword ? faker.internet.password() : '';
      await signInPage.open();
      await signInPage.fillUsernameField(username);
      await signInPage.fillPasswordField(password);
      await signInPage.clickLogInButton();
      await signInPage.assertErrorMessage(errorMessage);
    });
  });
});
