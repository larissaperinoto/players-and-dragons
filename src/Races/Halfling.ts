import Race from './Race';

export default class Halfling extends Race {
  public maxLifePoints: number;
  public static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 60;
  }

  static createdRacesInstances(): number {
    this.instances += 1;
    return this.instances;
  }
}