import { test as base } from '@playwright/test';
import { AccountsOverview } from '../../src/ui/pages/account/AccountsOverview';

export const test = base.extend<{
  accountsOverview;
}>({
  accountsOverview: async ({ page }, use) => {
    const accountsOverview = new AccountsOverview(page);

    use(accountsOverview);
  },
});
