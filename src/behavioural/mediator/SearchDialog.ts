// ConcreteMediator
import Button from './widgets/Button';
import DropDownMenu from './widgets/DropDownMenu';
import InputField from './widgets/InputField';
import Widget from './abstract/Widget';

export default class SearchDialog {
  private _clearButton: Button = {} as Button;
  private _dataList: DropDownMenu = {} as DropDownMenu;
  private _filterInput: InputField = {} as InputField;

  public createWidgets() {
    this._clearButton = new Button(this);
    this._clearButton.disable();

    this._dataList = new DropDownMenu(this);
    this._dataList.setItems(['one', 'two', 'three', 'four']);

    this._filterInput = new InputField(this);
  }

  public getClearButton(): Button {
    return this._clearButton;
  }

  public getDataList(): DropDownMenu {
    return this._dataList;
  }

  public getFilterInput(): InputField {
    return this._filterInput;
  }

  public handleUpdateFrom(component: Widget): void {
    switch (component) {
      case this._clearButton:
        this._clearButton.disable();
        this._dataList.selectItem(Infinity);
        this._filterInput.setValue('');
        break;
      case this._dataList:
        this._filterInput.setValue('');
        this._clearButton.enable();
        break;
      case this._filterInput:
        this._dataList.filter(this._filterInput.getValue());
        break;
    }
  }
}
