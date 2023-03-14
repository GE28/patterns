export default class Timer {
  private remainingTime = 0;
   
  add(time: number) {
    this.remainingTime += time;
  }

  clear() {
    this.remainingTime = 0;
  }
   
  getRemainingTime() {
    return this.remainingTime;
  }
}