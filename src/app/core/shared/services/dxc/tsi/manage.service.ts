import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManageService {
  private url: string;
  constructor(private http: HttpClient) {
  }
  filters(filter: string, basicSearch: string) {
    return this.http.get(`${this.url}?${basicSearch}=${filter}&page=0&size=100&sortDirection=ASC`);
  }


  /**
   * Getter $url
   * @return {string}
   */
  public get $url(): string {
    return this.url;
  }

  /**
   * Setter $url
   * @param {string} value
   */
  public set $url(value: string) {
    this.url = value;
  }

}
