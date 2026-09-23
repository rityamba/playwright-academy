import { Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';
import { step } from '../helpers/test-step-decorator';

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

  /**
   * This method clicks Update button to save new pet type value 
   */
  @step
  async clickUpdate() {
    await this.updateBtn.click();
  }

  /**
   * This method clicks Cancel button to discard changes on the Edit page.
   */
  @step
  async clickCancel() {
    await this.cancelBtn.click();
  }

  /**
   * This method enters the specified pet type name into the type name textbox.
   * @param typeName - new type value
   */
  @step
  async enterTypeName(typeName: string) {
    await expect(this.textboxType).not.toHaveValue('');
    await this.textboxType.fill(typeName);
  }




}