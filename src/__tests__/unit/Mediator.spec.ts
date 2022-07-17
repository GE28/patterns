import Button from '../../behavioural/mediator/widgets/Button';
import DropDownMenu from '../../behavioural/mediator/widgets/DropDownMenu';
import InputField from '../../behavioural/mediator/widgets/InputField';
import SearchDialog from '../../behavioural/mediator/SearchDialog';

describe('Search dialog class', () => {
  let dialog: SearchDialog;
  let screenClearButton: Button;
  let screenMenu: DropDownMenu;
  let screenInput: InputField;

  beforeEach(() => {
    dialog = new SearchDialog();
    dialog.createWidgets();

    screenClearButton = dialog.getClearButton();
    screenMenu = dialog.getDataList();
    screenInput = dialog.getFilterInput();
  });

  it('should disable clear button right after click() has been called', () => {
    screenClearButton.enable();
    expect(screenClearButton.isActive()).toBe(true);

    screenClearButton.click();
    expect(screenClearButton.isActive()).toBe(false);
  });

  it('should clear filter input value right after click() has been called', () => {
    screenInput.setValue('one');
    screenClearButton.enable();
    expect(screenInput.getValue()).not.toBe('');

    screenClearButton.click();
    expect(screenInput.getValue()).toBe('');
  });

  it('should clear selected value of data list right after click() has been called', () => {
    screenMenu.selectItem(0);
    expect(screenMenu.getSelected()).not.toBe('');

    screenClearButton.click();
    expect(screenMenu.getSelected()).toBe('');
  });

  it('should clear filter input value right after dataList has an item selected', () => {
    screenInput.setValue('one');
    expect(screenInput.getValue()).not.toBe('');

    screenMenu.selectItem(0);
    expect(screenInput.getValue()).toBe('');
  });

  it('should enable clear button right after dataList has an item selected', () => {
    screenClearButton.disable();
    expect(screenClearButton.isActive()).toBe(false);

    screenMenu.selectItem(0);
    expect(screenInput.getValue()).toBe('');
  });

  it('should filter data list on input value change', () => {
    const initialItems = screenMenu.getItems();
    screenInput.setValue('a');

    expect(initialItems).toEqual(
      expect.objectContaining(screenMenu.getItems())
    );
  });
});
