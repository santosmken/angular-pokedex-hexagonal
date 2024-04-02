export interface PokedexResponse {
  count: number;
  next: string;
  previous: string | null;
  results: { name: string; url: string }[];
}
