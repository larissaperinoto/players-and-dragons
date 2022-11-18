import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _name: string;
  special: number;
  cost: number;

  constructor(name: string) {
    this._name = name;
    this.special = 0;
    this.cost = 0;
  }

  get name(): string {
    return this._name;
  }

  static createdArchetypeInstances() {
    if (this) {
      throw new Error('Not implemented');
    }
  }

  abstract get energyType(): EnergyType;
}