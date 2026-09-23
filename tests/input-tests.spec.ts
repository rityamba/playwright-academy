import { test, expect } from '@playwright/test';
import { NavigationPage } from '../page-objects/navigation-page';
import { PetTypesPage } from '../page-objects/pet-types-page';
import { EditPetTypesPage } from '../page-objects/edit-pet-types-page';


test.beforeEach(async ({ page }) => {
  await page.goto('/')
})


test('Update pet type', async ({ page }) => {
  const navigateTo = new NavigationPage(page);
  const petTypesPage = new PetTypesPage(page);
  const editPetTypesPage = new EditPetTypesPage(page);
  let petTypes;

  await test.step('Go to Pet Types page', async () => {
    await navigateTo.petTypes();
    await expect(petTypesPage.title).toBeVisible();
  })

  await test.step('Change the pet type name from "cat" to "rabbit"', async () => {
    await petTypesPage.clickEditType('cat');
    await expect(editPetTypesPage.title).toBeVisible();
    await editPetTypesPage.enterTypeName('rabbit');
    await editPetTypesPage.clickUpdate();

    petTypes = await petTypesPage.getAllPetTypesNames();
    await expect(petTypes[0]).toBe('rabbit');
  })

  await test.step('Change the pet type name from "rabbit" back to "cat"', async () => {
    await petTypesPage.clickEditType('rabbit');
    await editPetTypesPage.enterTypeName('cat');
    await editPetTypesPage.clickUpdate();

    petTypes = await petTypesPage.getAllPetTypesNames();
    await expect(petTypes[0]).toBe('cat');
  })

});