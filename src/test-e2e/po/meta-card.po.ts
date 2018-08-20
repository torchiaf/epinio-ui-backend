import { Component } from './component.po';
import { ElementFinder, element, by, promise } from 'protractor';
import { MenuComponent } from './menu.po';

export interface MetaCardItem  {
  key: promise.Promise<string>;
  value: promise.Promise<string>;
}

export class MetaCard extends Component {

  constructor(private elementFinder: ElementFinder) {
    super(elementFinder);
  }

  getTitle(): promise.Promise<string> {
    return this.elementFinder.getWebElement().findElement(by.css('.meta-card__title')).getText();
  }

  openActionMenu(): promise.Promise<MenuComponent> {
    return this.elementFinder.element(by.css('.meta-card__header__button')).click().then(() => {
      // Wait until menu is shown
      const menu = new MenuComponent();
      menu.waitUntilShown();
      return menu;
    });
  }

  getMetaCardItems(): promise.Promise<MetaCardItem[]> {
    const metaCardRows = this.elementFinder.all(by.css('.meta-card-item-row'));
    return metaCardRows.then((rows: ElementFinder[]) => rows.map( row => ({
      key: row.element(by.css('.meta-card-item__key')).getText(),
      value:  row.element(by.css('.meta-card-item__value')).getText()
     })));
  }

  click() {
    return this.elementFinder.click();
  }

}
