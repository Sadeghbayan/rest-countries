interface Currency {
  code: string;
  name: string;
  symbol: string;
}

interface Languages {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

interface ICountry {
  flag: string;
  alpha3Code: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string[];
  currencies: Currency[];
  languages: Languages[];
  borders: string[];
}

interface IBorder {
  alpha3Code: string;
  name: string;
}
