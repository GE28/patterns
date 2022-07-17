// Colleague
import SearchDialog from '../SearchDialog';

export default abstract class Widget {
  constructor(private _mediator: SearchDialog) {}

  protected notifyUpdate(): void {
    this._mediator.handleUpdateFrom(this);
  }
}
