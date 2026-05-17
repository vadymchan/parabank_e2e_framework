import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';

test(`Sign In positive tests`, async ({
  signInPage,
  userData,
  logOutPage,
  signUpPage,
  accountsOverviewPage,
}) => {
  await signUpUser(signUpPage, userData);

  await logOutPage.clickLogOutButton();

  await signInPage.fillUsernameField(userData.username);
  await signInPage.fillPasswordField(userData.password);

  await signInPage.clickLogInButton();
  await accountsOverviewPage.assertWelcomeMessageShowsFullName(
    userData.firstName,
    userData.lastName,
  );
});
