import Command from "./interfaces/Command";

export default class Button {
  constructor(private command: Command) {}
   
  click() {
    this.command.execute();
  }
}