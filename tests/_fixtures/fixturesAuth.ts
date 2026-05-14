import { test as base } from '@playwright/test';
import { SignUpPage } from '../../src/ui/pages/auth/SignUpPage';
import { SignInPage } from '../../src/ui/pages/auth/SignInPage';
import { LogOutPage } from '../../src/ui/pages/auth/LogOutPage';
import { CustomerLookup } from '../../src/ui/pages/auth/CustomerLookup';

export const test = base.extend<{
  signUpPage;
  signInPage;
}>({
  signUpPage: async ({ page }, use) => {
    const signUpPage = new SignUpPage(page);

    await use(signUpPage);
  },
  signInPage: async ({ page }, use) => {
    const signInPage = new SignInPage(page);

    await use(signInPage);
  },
  logOutPage: async ({ page }, use) => {
    const logOutPage = new LogOutPage(page);

    await use(logOutPage);
  },
  customerLookup: async ({ page }, use) => {
    const customerLookup = new CustomerLookup(page);

    await use(customerLookup);
  },
});
