import { array, dictionary, locatorz } from "../constants/selectors";
import { Page } from "@playwright/test";

export class dragPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async addlogic(): Promise<void> {
    let index = 0;

    for (index = 0; index < array.length; index++) {
      var element = array[index];
      await this.page.locator(locatorz.taskInput).fill(element);

      await this.page.locator(locatorz.addBtn).click();
      dictionary[element] = index;
    }
  }

  async draglogic(): Promise<void> {
   

  }
}
