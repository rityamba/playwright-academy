import { test, expect } from '@playwright/test';
import { NavigationPage } from '../page-objects/navigation-page';
import { PetTypesPage } from '../page-objects/pet-types-page';
import { EditPetTypesPage } from '../page-objects/edit-pet-types-page';

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})


test('Update pet type', async ({ page }) => {
  const navigationPage = new NavigationPage(page);
  const petTypesPage = new PetTypesPage(page);
  const editPetTypesPage = new EditPetTypesPage(page);

  await navigationPage.navigateToPetTypes();
  await expect(petTypesPage.title).toBeVisible();

  await petTypesPage.clickEditType('cat');

  await expect(editPetTypesPage.title).toBeVisible();

  await editPetTypesPage.enterTypeName('rabbit');
  await editPetTypesPage.clickSave();

  let petTypes = await petTypesPage.getAllPetTypesNames();
  await expect(petTypes[0]).toBe('rabbit');

  await petTypesPage.clickEditType('rabbit');
  await editPetTypesPage.enterTypeName('cat');
  await editPetTypesPage.clickSave();

  petTypes = await petTypesPage.getAllPetTypesNames();
  await expect(petTypes[0]).toBe('cat');

});