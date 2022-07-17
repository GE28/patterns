// ConcreteColleague
import Widget from '../abstract/Widget';

export default class DropDownMenu extends Widget {
  private _value: string = '';
  private _items: string[] = [];
  private _filteredItems: string[] = [];

  public getSelected(): string {
    return this._value;
  }

  public setItems(options: string[]): void {
    this._items = options;
    this._filteredItems = this._items;
  }

  public getItems(): String[] {
    return [...this._filteredItems];
  }

  public filter(substring: string = ''): void {
    this._filteredItems = this._items.filter((option) =>
      option.includes(substring)
    );
  }

  public selectItem(option: number): void {
    const selected = this._filteredItems.at(option);

    if (selected) {
      this._value = selected;
      this.notifyUpdate();
    } else this._value = '';
  }
}
