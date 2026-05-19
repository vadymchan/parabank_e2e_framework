import { test } from '../../_fixtures/fixtures';
import { REQUEST_LOAN_SUCCESS_MESSAGE } from '../../../src/ui/constants/transactionMessages';

test.describe(`Request Loan positive tests`, () => {
  const amount = '1000';
  const downPayment = '100';

  test(`Approves loan request`, async ({
    signedUpUserWithOneAccount,
    requestLoanPage,
  }) => {
    const { accountData } = signedUpUserWithOneAccount;
    const fromAccountId = accountData.accountId;
    await requestLoanPage.open();

    await requestLoanPage.fillAmountField(amount);
    await requestLoanPage.fillDownPaymentField(downPayment);
    await requestLoanPage.selectFromAccountId(fromAccountId);
    await requestLoanPage.clickApplyNowButton();

    await requestLoanPage.assertLoanApproved();
    await requestLoanPage.assertNewAccountIdLinkIsVisible();
    await requestLoanPage.assertRequestLoanApprovedHasText(
      REQUEST_LOAN_SUCCESS_MESSAGE,
    );
  });
});
