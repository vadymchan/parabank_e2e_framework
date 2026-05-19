import { test } from '../../_fixtures/fixtures';
import {
  UPDATE_PROFILE_FIRST_NAME_REQUIRED_ERROR_MESSAGE,
  UPDATE_PROFILE_LAST_NAME_REQUIRED_ERROR_MESSAGE,
  UPDATE_PROFILE_ADDRESS_REQUIRED_ERROR_MESSAGE,
  UPDATE_PROFILE_CITY_REQUIRED_ERROR_MESSAGE,
  UPDATE_PROFILE_STATE_REQUIRED_ERROR_MESSAGE,
  UPDATE_PROFILE_ZIP_CODE_REQUIRED_ERROR_MESSAGE,
} from '../../../src/ui/constants/accountMessages';

test.describe(`Update Contact Info negative tests`, () => {
  test(`Shows required-field errors when submitting empty form`, async ({
    signedUpUserWithOneAccount,
    updateProfilePage,
  }) => {
    await updateProfilePage.open();
    await updateProfilePage.clickUpdateProfileButton();
    await updateProfilePage.assertErrorMessage(
      updateProfilePage.firstNameErrorMessage,
      UPDATE_PROFILE_FIRST_NAME_REQUIRED_ERROR_MESSAGE,
    );
    await updateProfilePage.assertErrorMessage(
      updateProfilePage.lastNameErrorMessage,
      UPDATE_PROFILE_LAST_NAME_REQUIRED_ERROR_MESSAGE,
    );
    await updateProfilePage.assertErrorMessage(
      updateProfilePage.addressErrorMessage,
      UPDATE_PROFILE_ADDRESS_REQUIRED_ERROR_MESSAGE,
    );
    await updateProfilePage.assertErrorMessage(
      updateProfilePage.cityErrorMessage,
      UPDATE_PROFILE_CITY_REQUIRED_ERROR_MESSAGE,
    );
    await updateProfilePage.assertErrorMessage(
      updateProfilePage.stateErrorMessage,
      UPDATE_PROFILE_STATE_REQUIRED_ERROR_MESSAGE,
    );
    await updateProfilePage.assertErrorMessage(
      updateProfilePage.zipCodeErrorMessage,
      UPDATE_PROFILE_ZIP_CODE_REQUIRED_ERROR_MESSAGE,
    );
  });
});
