import { test } from '../../_fixtures/fixtures';
import { generateNewUserData } from '../../../src/common/testData/generateNewUserData';
import {
  FIRST_NAME_EMPTY_ERROR_MESSAGE,
  LAST_NAME_EMPTY_ERROR_MESSAGE,
  ADDRESS_EMPTY_ERROR_MESSAGE,
  CITY_EMPTY_ERROR_MESSAGE,
  STATE_EMPTY_ERROR_MESSAGE,
  ZIP_CODE_EMPTY_ERROR_MESSAGE,
  SSN_EMPTY_ERROR_MESSAGE,
  USERNAME_EMPTY_ERROR_MESSAGE,
  PASSWORD_EMPTY_ERROR_MESSAGE,
  CONFIRM_PASSWORD_EMPTY_ERROR_MESSAGE,
  PASSWORDS_DONT_MATCH_ERROR_MESSAGE,
  USERNAME_ALREADY_EXISTS,
} from '../../../src/ui/constants/authMessages';

test(`Try to sign up with empty fields`, async ({ signUpPage }) => {
  await signUpPage.open();

  await signUpPage.clickRegisterButton();

  await signUpPage.assertErrorMessage(
    signUpPage.firstNameErrorMessage,
    FIRST_NAME_EMPTY_ERROR_MESSAGE,
  );
  await signUpPage.assertErrorMessage(
    signUpPage.lastNameErrorMessage,
    LAST_NAME_EMPTY_ERROR_MESSAGE,
  );
  await signUpPage.assertErrorMessage(
    signUpPage.addressErrorMessage,
    ADDRESS_EMPTY_ERROR_MESSAGE,
  );
  await signUpPage.assertErrorMessage(
    signUpPage.cityErrorMessage,
    CITY_EMPTY_ERROR_MESSAGE,
  );
  await signUpPage.assertErrorMessage(
    signUpPage.stateErrorMessage,
    STATE_EMPTY_ERROR_MESSAGE,
  );
  await signUpPage.assertErrorMessage(
    signUpPage.zipCodeErrorMessage,
    ZIP_CODE_EMPTY_ERROR_MESSAGE,
  );
  await signUpPage.assertErrorMessage(
    signUpPage.ssnErrorMessage,
    SSN_EMPTY_ERROR_MESSAGE,
  );
  await signUpPage.assertErrorMessage(
    signUpPage.usernameErrorMessage,
    USERNAME_EMPTY_ERROR_MESSAGE,
  );
  await signUpPage.assertErrorMessage(
    signUpPage.passwordErrorMessage,
    PASSWORD_EMPTY_ERROR_MESSAGE,
  );
  await signUpPage.assertErrorMessage(
    signUpPage.confirmPasswordErrorMessage,
    CONFIRM_PASSWORD_EMPTY_ERROR_MESSAGE,
  );
});

test(`Sign up with different confirm password`, async ({
  userData,
  signUpPage,
}) => {
  const confirmPassword = userData.password.slice(1);

  await signUpPage.open();

  await signUpPage.fillForm(userData, confirmPassword);
  await signUpPage.clickRegisterButton();

  await signUpPage.assertErrorMessage(
    signUpPage.confirmPasswordErrorMessage,
    PASSWORDS_DONT_MATCH_ERROR_MESSAGE,
  );
});

test(`Sign up with existing username`, async ({ userData, signUpPage }) => {
  await signUpPage.open();

  await signUpPage.fillForm(userData);
  await signUpPage.clickRegisterButton();

  await signUpPage.open();

  await signUpPage.fillForm(userData);
  await signUpPage.clickRegisterButton();

  await signUpPage.assertErrorMessage(
    signUpPage.usernameErrorMessage,
    USERNAME_ALREADY_EXISTS,
  );
});
