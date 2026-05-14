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
  test(`Empty fields`, async ({ customerLookup }) => {
    await customerLookup.open();
    await customerLookup.clickFindMyLoginInfoButton();
    await customerLookup.assertErrorMessage(
      customerLookup.firstNameErrorMessage,
      FIRST_NAME_EMPTY_ERROR_MESSAGE,
    );
    await customerLookup.assertErrorMessage(
      customerLookup.lastNameErrorMessage,
      LAST_NAME_EMPTY_ERROR_MESSAGE,
    );
    await customerLookup.assertErrorMessage(
      customerLookup.addressErrorMessage,
      ADDRESS_EMPTY_ERROR_MESSAGE,
    );
    await customerLookup.assertErrorMessage(
      customerLookup.cityErrorMessage,
      CITY_EMPTY_ERROR_MESSAGE,
    );
    await customerLookup.assertErrorMessage(
      customerLookup.stateErrorMessage,
      STATE_EMPTY_ERROR_MESSAGE,
    );
    await customerLookup.assertErrorMessage(
      customerLookup.zipCodeErrorMessage,
      ZIP_CODE_EMPTY_ERROR_MESSAGE,
    );
    await customerLookup.assertErrorMessage(
      customerLookup.ssnErrorMessage,
      SSN_EMPTY_ERROR_MESSAGE,
    );
  });

  test(`Incorrect data`, async ({ userData, customerLookup }) => {
    await customerLookup.open();
    await customerLookup.fillForm(userData);
    await customerLookup.clickFindMyLoginInfoButton();
    await customerLookup.assertSubmitErrorMessage(
      CUSTOMER_LOOKUP_SUBMIT_ERROR_MESSAGE,
    );
  });
});
