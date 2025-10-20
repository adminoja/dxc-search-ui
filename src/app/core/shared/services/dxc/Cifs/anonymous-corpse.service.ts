import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { anonymouscorpseinterface } from './anonymous-corpse.interface';
import { IManageService } from '../../manageservice.interface';

@Injectable({
  providedIn: 'root'
})
export class AnonymousCorpseService implements anonymouscorpseinterface, IManageService {
  apiUrl: string;
  headers: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.Dxc_Model_Cifs_AnonymousCorpse[0].url.production;
  }

  filters(filter: string, name: string) {
    return this.http.get(`${this.apiUrl}?${name}=${filter}&page=0&size=100&sortDirection=ASC`);
  }

  getHtml(selectData: any, title: string) {
  }

  viewgetHtml(selectData: any, title: string) {
  }

  readAll() {
  }
  findByID(id: string) {
  }



}
