export interface Country {
  alpha3Code: string,
  capital: string,
  flag: string
  name: string,
  population: number,
  region: string,
}

export interface MainPageState {
  loading: boolean;
  region: string;
  error: boolean | null;
  isPlaceholder: boolean;
  searchText: string;
  countries: Country[];
  showingCountries: Country[];
}
