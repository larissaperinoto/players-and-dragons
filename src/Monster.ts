import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  public get lifePoints() : number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    const damage = this._lifePoints - attackPoints;
    if (attackPoints > 0) {
      this._lifePoints -= damage;
    }

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  attack(enemy: SimpleFighter | Fighter): void {
    enemy.receiveDamage(this.strength);
  }
}