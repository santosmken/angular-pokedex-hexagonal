import { PokedexRepository } from '../driven/pokedex.repository';
import { PokedexState } from '../driven/pokedex.state';

export class PokedexCommandHandler {
  constructor(
    private readonly state: PokedexState,
    private readonly repository: PokedexRepository
  ) {}

  add(val: string): void {}
}
