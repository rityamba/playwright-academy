import { Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class EditPetTypesPage {
  readonly page: Page;
  readonly title: Locator;
  readonly updateBtn: Locator;
  readonly cancelBtn: Locator;
  readonly textboxType: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.getByRole('heading', { name: 'Edit Pet Type', level: 2 });
    this.updateBtn = page.getByRole('button', { name: 'Update' });
    this.cancelBtn = page.getByRole('button', { name: 'Cancel' });
    this.textboxType = page.getByRole('textbox');
  }

  async clickSave() {
    await this.updateBtn.click();
  }

  async clickCancel() {
    await this.cancelBtn.click();
  }

  async enterTypeName(typeName: string) {
    await expect(this.textboxType).not.toHaveValue('');
    await this.textboxType.fill(typeName);
  }




}