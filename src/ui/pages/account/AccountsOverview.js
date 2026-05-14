import { expect, testStep } from '../../../common/helpers/pwHelpers';

export class AccountsOverview {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async fillField() {
    await this.step(`Fill '' field`, async () => {
      // example method
    });
  }

  async clickSomething() {
    await this.step(`Click something`, async () => {
      // example method
    });
  }

  async assertWelcomeBannerShowsFullName(firstName, lastName) {
    await this.step(`Assert welcome banner is shown`, async () => {
      await expect(this.page.locator('#leftPanel')).toContainText(
        `Welcome ${firstName} ${lastName}`,
      );
    });
  }
}
