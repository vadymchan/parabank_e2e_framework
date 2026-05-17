import { test as base } from '@playwright/test';
import { TransferFundsPage } from '../../src/ui/pages/transactions/TransferFundsPage';
import { BillPayPage } from '../../src/ui/pages/transactions/BillPayPage';

export const test = base.extend<{ transferFundsPage }>({
  transferFundsPage: async ({ page }, use) => {
    const transferFundsPage = new TransferFundsPage(page);

    await use(transferFundsPage);
  },
  billPayPage: async ({ page }, use) => {
    const billPayPage = new BillPayPage(page);

    await use(billPayPage);
  },
});
