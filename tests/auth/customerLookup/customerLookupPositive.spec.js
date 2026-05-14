import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { CUSTOMER_LOOKUP_SUCCESSFUL_MESSAGE } from '../../../src/ui/constants/authMessages';

test(`Log in using 'Forgot login info?' page`, async ({
  userData,
  signUpPage,
  customerLookup,
}) => {
  await signUpUser(signUpPage, userData);
  await customerLookup.open();
  await customerLookup.fillForm(userData);
  await customerLookup.clickFindMyLoginInfoButton();
  await customerLookup.assertSuccessMessageContainsText(
    CUSTOMER_LOOKUP_SUCCESSFUL_MESSAGE,
  );
  await customerLookup.assertUsernameContainsText(userData.username);
  await customerLookup.assertPasswordContainsText(userData.password);
});
