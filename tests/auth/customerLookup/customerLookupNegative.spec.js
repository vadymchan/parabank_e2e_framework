import { test } from '../../_fixtures/fixtures';
import {
  FIRST_NAME_EMPTY_ERROR_MESSAGE,
  LAST_NAME_EMPTY_ERROR_MESSAGE,
  ADDRESS_EMPTY_ERROR_MESSAGE,
  CITY_EMPTY_ERROR_MESSAGE,
  STATE_EMPTY_ERROR_MESSAGE,
  ZIP_CODE_EMPTY_ERROR_MESSAGE,
  SSN_EMPTY_ERROR_MESSAGE,
  CUSTOMER_LOOKUP_SUBMIT_ERROR_MESSAGE,
} from '../../../src/ui/constants/authMessages';
import { generateNewUserData } from '../../../src/common/testData/generateNewUserData';
import { Logger } from '../../../src/common/logger/Logger';

test.describe(`Customer lookup negative tests`, () => {
  test(`Empty fields`, async ({ customerLookupPage }) => {
    await customerLookupPage.open();
    await customerLookupPage.clickFindMyLoginInfoButton();
    await customerLookupPage.assertErrorMessage(
      customerLookupPage.firstNameErrorMessage,
      FIRST_NAME_EMPTY_ERROR_MESSAGE,
    );
    await customerLookupPage.assertErrorMessage(
      customerLookupPage.lastNameErrorMessage,
      LAST_NAME_EMPTY_ERROR_MESSAGE,
    );
    await customerLookupPage.assertErrorMessage(
      customerLookupPage.addressErrorMessage,
      ADDRESS_EMPTY_ERROR_MESSAGE,
    );
    await customerLookupPage.assertErrorMessage(
      customerLookupPage.cityErrorMessage,
      CITY_EMPTY_ERROR_MESSAGE,
    );
    await customerLookupPage.assertErrorMessage(
      customerLookupPage.stateErrorMessage,
      STATE_EMPTY_ERROR_MESSAGE,
    );
    await customerLookupPage.assertErrorMessage(
      customerLookupPage.zipCodeErrorMessage,
      ZIP_CODE_EMPTY_ERROR_MESSAGE,
    );
    await customerLookupPage.assertErrorMessage(
      customerLookupPage.ssnErrorMessage,
      SSN_EMPTY_ERROR_MESSAGE,
    );
  });

  test(`Incorrect data`, async ({ userData, customerLookupPage }) => {
    await customerLookupPage.open();
    await customerLookupPage.fillForm(userData);
    await customerLookupPage.clickFindMyLoginInfoButton();
    await customerLookupPage.assertSubmitErrorMessage(
      CUSTOMER_LOOKUP_SUBMIT_ERROR_MESSAGE,
    );
  });
});
