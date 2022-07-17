// Handler
export default abstract class Vehicle {
  private _alternativeVehicle: Vehicle | null = null;

  public /* final */ setAlternative(vehicle: Vehicle): void {
    this._alternativeVehicle = vehicle;
  }

  public deliver(distance: number): string | null {
    return this._alternativeVehicle
      ? this._alternativeVehicle.deliver(distance)
      : null;
  }
}
