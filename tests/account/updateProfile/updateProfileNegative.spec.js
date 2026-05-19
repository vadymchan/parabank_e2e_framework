import { test } from '../../_fixtures/fixtures';

test.describe(`Update Profile negative tests`, () => {
  test(`Shows required-field errors when submitting empty form`, async ({
    signedUpUserWithOneAccount,
    updateProfilePage,
  }) => {
    await updateProfilePage.open();
    await updateProfilePage.clickUpdateProfileButton();
    await updateProfilePage.assertAllRequiredFieldsErrors();
  });
});
