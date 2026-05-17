import { expect, testStep } from '../../../common/helpers/pwHelpers';

export class AccountDetailsPage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.accountId = page.locator('#accountDetails #accountId');
    this.accountType = page.locator('#accountDetails #accountType');
    this.balance = page.locator('#accountDetails #balance');
    this.availableBalance = page.locator('#accountDetails #availableBalance');
    this.accountActivity = page.getByRole('heading', {
      name: 'Account Activity',
    });
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async open(accountId) {
    await this.step(
      `Navigate to 'Accounts Details' page for ${accountId} account`,
      async () => {
        await this.page.goto(`activity.htm?id=${accountId}`);
      },
    );
  }

  async assertAccountIdHasText(accountId) {
    await this.step(`Assert Account ID=${accountId} is shown`, async () => {
      await expect(this.accountId).toHaveText(accountId);
    });
  }

  async assertAccountTypeContainsText(accountType) {
    await this.step(`Assert Account Type=${accountType} is shown`, async () => {
      await expect(this.accountType).toContainText(accountType);
    });
  }

  async assertBalanceContainsText(balance) {
    await this.step(`Assert Balance=${balance} is shown`, async () => {
      await expect(this.balance).toContainText(balance);
    });
  }

  async assertAvailableBalanceContainsText(availableBalance) {
    await this.step(
      `Assert Available Balance=${availableBalance} is shown`,
      async () => {
        await expect(this.availableBalance).toContainText(availableBalance);
      },
    );
  }

  async assertAccountActivityHeadingIsVisible() {
    await this.step(`Assert Account Activity banner is shown`, async () => {
      await expect(this.accountActivity).toBeVisible();
    });
  }
}
