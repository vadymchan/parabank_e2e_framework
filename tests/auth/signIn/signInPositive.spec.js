import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test(`Sign In test`, async ({
  signInPage,
  userData,
  logOutPage,
  signUpPage,
  accountsOverview,
}) => {
  await signUpUser(signUpPage, userData);

  await logOutPage.clickLogOutButton();

  await signInPage.fillUsernameField(userData.username);
  await signInPage.fillPasswordField(userData.password);

  await signInPage.clickLogInButton();
  await accountsOverview.assertWelcomeBannerShowsFullName(
    userData.firstName,
    userData.lastName,
  );
});
