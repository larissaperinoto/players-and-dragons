import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Fighter;
  private _environment: (SimpleFighter | Fighter)[];

  constructor(player: Fighter, monster: (SimpleFighter | Fighter)[]) {
    super(player);
    this._player = player;
    this._environment = monster;
  }

  fight(): number {
    if (this._player.lifePoints !== -1
      || this._environment.some((env) => env.lifePoints !== -1)) {
      this._environment.map((env) => this._player.attack(env));

      this._environment.map((env) => env.attack(this._player));
    }

    return this._player.lifePoints === -1 ? -1 : 1;
  }
}