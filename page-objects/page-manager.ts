import { Page } from '@playwright/test';
import { NavigationPage } from '../page-objects/navigation-page';
import { PetTypesPage } from '../page-objects/pet-types-page';
import { EditPetTypesPage } from '../page-objects/edit-pet-types-page';

export class PageManager {

    readonly navigateTo: NavigationPage
    readonly petTypesPage: PetTypesPage
    readonly editPetTypesPage: EditPetTypesPage

    constructor(page: Page) {
        this.navigateTo = new NavigationPage(page);
        this.petTypesPage = new PetTypesPage(page);
        this.editPetTypesPage = new EditPetTypesPage(page);
    }

}