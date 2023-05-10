export interface Country {
  CountryId: number;
  CountryName: string;
  CountryPopulation: string;
  PopulationPercentage: number;
}

export interface CountryResponse {
  status: boolean;
  message: string;
  response: Country[];
  error: any;
}
