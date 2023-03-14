import Command from "./interfaces/Command";
import Timer from "./Timer";

export default class TimerAddCommand implements Command {
  constructor(private timer: Timer, private time: number) {}
   
  execute() {
    this.timer.add(this.time);
  }
}