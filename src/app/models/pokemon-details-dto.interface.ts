export interface PokemonDetailsDto {
  id: string;
  name: string;
  types: PokemonType[];
  height: number;
  weight: number;
  hp: number;
  abilities: Ability[];
  stats: Stats[];
  sprites: Sprites;
  base_experience: number;
}

export interface PokemonType {
  slot: number;
  type: INameAndUrl;
}

export interface Ability {
  ability: INameAndUrl;
  is_hidden: boolean;
}

export interface INameAndUrl {
  name: string;
  url: string;
}

export interface Stats {
  base_stat: number;
  stat: { name: string };
}

export interface Sprites {
  back_default: string;
  front_default: string;
  other: {
    'official-artwork': {
      front_default: string;
    };
  };
}
