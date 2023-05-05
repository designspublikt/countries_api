import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Country, CountryResponse } from 'src/app/interfaces/country';
import { ApiCountriesService } from 'src/app/services/api-countries.service';

@Component({
  selector: 'app-home-api',
  templateUrl: './home-api.component.html',
  styleUrls: ['./home-api.component.css'],
})
export class HomeApiComponent implements OnInit {
  searchForm: FormGroup;
  countries: Country[] = [];
  countriesFiltered: Country[] = [];
  totalPop: number = 0;

  constructor(
    private _FormBuilder: FormBuilder,
    private _ApiCountriesService: ApiCountriesService
  ) {
    this.searchForm = this._FormBuilder.group({
      query: ['', Validators.required],
    });
  }

  async ngOnInit() {
    await this.getAllCountries();
  }

  async getAllCountries() {
    this.totalPop = 0;
    let countriesP = new Promise((resolve, reject) => {
      this._ApiCountriesService
        .getAll()
        .subscribe((countriesRes: CountryResponse) => {
          if (!countriesRes.status) reject(countriesRes);

          this.countries = countriesRes.response.map((country: Country) => {
            this.totalPop += parseInt(country.CountryPopulation);
            return country;
          });

          this.countries.forEach((country: Country) => {
            let currentPop = parseInt(country.CountryPopulation);
            country.PopulationPercentage = (currentPop * 100) / this.totalPop;
          });

          this.countriesFiltered = this.countries;

          resolve(countriesRes.status);
        });
    });

    let result = await countriesP;
    return result;
  }

  async searchCountries() {
    let query = this.searchForm.controls['query'].value;

    let searchP = new Promise((resolve, reject) => {
      this._ApiCountriesService
        .getByQuery(query)
        .subscribe((searchRes: CountryResponse) => {
          if (!searchRes.status) reject(searchRes);

          this.countriesFiltered = searchRes.response.map(
            (country: Country) => country
          );

          this.countriesFiltered.forEach((country: Country) => {
            let currentPop = parseInt(country.CountryPopulation);
            country.PopulationPercentage = (currentPop * 100) / this.totalPop;
          });

          resolve(searchRes.status);
        });
    });

    await searchP;
  }
}
