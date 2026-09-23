import { Page } from '@playwright/test';
import { step } from '../helpers/test-step-decorator';

export class NavigationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  @step
  async petTypes() {
    await this.page.getByText('PET TYPggES').click();
  }

}