import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryResponse } from '../interfaces/country';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiCountriesService {
  constructor(private _http: HttpClient) {}

  getAll(): Observable<CountryResponse> {
    return this._http.get<CountryResponse>(`${environment.API_URL}countries`);
  }

  getByQuery(query: string): Observable<CountryResponse> {
    return this._http.get<CountryResponse>(
      `${environment.API_URL}countries/query/${query}`
    );
  }
}
