import { Page } from '@playwright/test';

export class NavigationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async petTypes() {
    await this.page.getByText('PET TYPES').click();
  }

}