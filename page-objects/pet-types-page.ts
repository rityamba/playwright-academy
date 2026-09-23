import { expect, Locator, Page } from '@playwright/test';

export class PetTypesPage {
  readonly page: Page;
  readonly title: Locator;
  readonly table: Locator;
  readonly addButton: Locator;


  constructor(page: Page) {
    this.page = page;
    this.title = page.getByRole('heading', { name: 'Pet Types', level: 2 });
    this.addButton = page.getByRole('button', { name: 'Add' });
    this.table = page.getByRole('table');

  }

  async clickEditType(typeName: string) {
    const tableRowByType = this.page.getByRole('row', { name: typeName });
    await tableRowByType.getByRole('button', { name: 'Edit' }).click();
  }

  async getAllPetTypes() {
    const types = this.table.getByRole('textbox').all();
    console.log(await types);

  }

  async getAllPetTypesNames() {
    await expect(this.page.getByRole('textbox').first()).toBeVisible();

    const textboxes = await this.page.getByRole('textbox').all();
    const values = [];
    for (const textbox of textboxes) {
      values.push(await textbox.inputValue());
    }
    return values;
  }



}



