import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Fighter;
  private _environment: SimpleFighter[];

  constructor(player: Fighter, monster: SimpleFighter[]) {
    super(player);
    this._player = player;
    this._environment = monster;
  }

  fight(): number {
    while (this._player.lifePoints > 0
      && this._environment.some((env) => env.lifePoints > 0)) {
      this._environment.map((env) => this._player.attack(env));

      this._environment.map((env) => env.attack(this._player));
    }

    return super.fight();
  }
}