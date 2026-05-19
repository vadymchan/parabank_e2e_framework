import { test } from '../../_fixtures/fixtures';
import { UPDATE_PROFILE_RESULT_MESSAGE } from '../../../src/ui/constants/accountMessages';

test.describe(`Update Contact Info positive tests`, () => {
  test(`Updates Profile info successfully`, async ({
    userData,
    signedUpUserWithOneAccount,
    updateProfilePage,
  }) => {
    await updateProfilePage.open();

    await updateProfilePage.fillForm(userData);
    await updateProfilePage.clickUpdateProfileButton();
    await updateProfilePage.assertUpdateProfileResultHasText(
      UPDATE_PROFILE_RESULT_MESSAGE,
    );
  });
});
