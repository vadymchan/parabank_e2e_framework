import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test(`User logout test`, async ({
  signUpPage,
  userData,
  logOutPage,
  signInPage,
}) => {
  await signUpUser(signUpPage, userData);

  await logOutPage.clickLogOutButton();
  await signInPage.assertLoginFormIsVisible();
});
