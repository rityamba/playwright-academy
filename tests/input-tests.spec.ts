import { test, expect } from '@playwright/test';
import { PageManager } from '../page-objects/page-manager';


test.beforeEach(async ({ page }) => {
  await page.goto('/')
})


test('Update pet type', async ({ page }) => {
  const pom = new PageManager(page);
  let petTypes;

  await test.step('Go to Pet Types page', async () => {
    await pom.navigateTo.petTypes();
    await expect(pom.petTypesPage.title).toBeVisible();
  })

  await test.step('Change the pet type name from "cat" to "rabbit"', async () => {
    await pom.petTypesPage.clickEditType('cat');
    await expect(pom.editPetTypesPage.title).toBeVisible();
    await pom.editPetTypesPage.enterTypeName('rabbit');
    await pom.editPetTypesPage.clickUpdate();

    petTypes = await pom.petTypesPage.getAllPetTypesNames();
    expect(petTypes[0]).toBe('rabbit');
  })

  await test.step('Change the pet type name from "rabbit" back to "cat"', async () => {
    await pom.petTypesPage.clickEditType('rabbit');
    await pom.editPetTypesPage.enterTypeName('cat');
    await pom.editPetTypesPage.clickUpdate();

    petTypes = await pom.petTypesPage.getAllPetTypesNames();
    expect(petTypes[0]).toBe('cat');
  })

});