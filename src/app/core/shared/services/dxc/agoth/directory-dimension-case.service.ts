import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {IManageService, IManageSingleReport} from '../../manageservice.interface';

@Injectable({
  providedIn: 'root'
})
export class DirectoryDimensionCaseService implements IManageService, IManageSingleReport{

  baseUrl: string
  constructor(private http: HttpClient) { 
    this.baseUrl = environment.Dxc_Model_Idb_DirectoryDimensionCase[0].url.production;
  }
  filters(filter: string, name: string) {
    console.log(name)
    if (name == 'fullName' && filter != '') {
      let blackFileAndInqnumber = filter.split(' ')
      let generallcBlackFile = blackFileAndInqnumber[0]
      let blackFile = generallcBlackFile.split('/')
      let blackCaseNumber = blackFile[0]
      let blackCaseYear = blackFile[1]
      let generallcRedFile = blackFileAndInqnumber[1]
      let redFile = generallcRedFile.split('/')
      let redCaseNumber = redFile[0]
      let redCaseYear = redFile[1]
      return this.http.get(`${this.baseUrl}?blackCaseNumber=${blackCaseNumber}&blackCaseYear=${blackCaseYear}&redCaseNumber=${redCaseNumber}&redCaseYear=${redCaseYear}&page=0&size=100&sortDirection=ASC`)
    } else if (name === 'blackFileAndInqnumber' && filter != '') {
      let blackFileAndInqnumber = filter.split(' ')
      let generallcBlackFile = blackFileAndInqnumber[0]
      let generalInqnumber = blackFileAndInqnumber[1]
      let blackFile = generallcBlackFile.split('/')
      let blackCaseNumber = blackFile[0]
      let blackCaseYear = blackFile[1]
      let inqnumber = generalInqnumber.split('/')
      let criminalCaseNumber = inqnumber[0]
      let criminalCaseYear = inqnumber[1]
      return this.http.get(`${this.baseUrl}?blackCaseNumber=${blackCaseNumber}&blackCaseYear=${blackCaseYear}&criminalCaseNumber=${criminalCaseNumber}&criminalCaseYear=${criminalCaseYear}&page=0&size=100&sortDirection=ASC`);;
    } else if (name === 'RedFileAndInqnumber' && filter != '') {
      let RedFileAndInqnumber = filter.split(' ')
      let generallcRedFile = RedFileAndInqnumber[0]
      let generalInqnumber = RedFileAndInqnumber[1]
      let redFile = generallcRedFile.split('/')
      let redCaseNumber = redFile[0]
      let redCaseYear = redFile[1]
      let inqnumber = generalInqnumber.split('/')
      let criminalCaseNumber = inqnumber[0]
      let criminalCaseYear = inqnumber[1]
      return this.http.get(`${this.baseUrl}?redCaseNumber=${redCaseNumber}&redCaseYear=${redCaseYear}&criminalCaseNumber=${criminalCaseNumber}&criminalCaseYear=${criminalCaseYear}&page=0&size=100&sortDirection=ASC`);
    } else if (name === 'BlackFileRedFileAndInqnumber' && filter != '') {
      let BlackFileRedFileAndInqnumber = filter.split(' ')
      let generallcBlackFile = BlackFileRedFileAndInqnumber[0]
      let generallcRedFile = BlackFileRedFileAndInqnumber[1]
      let generalInqnumber = BlackFileRedFileAndInqnumber[2]
      let blackFile = generallcBlackFile.split('/')
      let blackCaseNumber = blackFile[0]
      let blackCaseYear = blackFile[1]
      let redFile = generallcRedFile.split('/')
      let redCaseNumber = redFile[0]
      let redCaseYear = redFile[1]
      let inqnumber = generalInqnumber.split('/')
      let criminalCaseNumber = inqnumber[0]
      let criminalCaseYear = inqnumber[1]
      return this.http.get(`${this.baseUrl}?blackCaseNumber=${blackCaseNumber}&blackCaseYear=${blackCaseYear}&redCaseNumber=${redCaseNumber}&redCaseYear=${redCaseYear}&criminalCaseNumber=${criminalCaseNumber}&criminalCaseYear=${criminalCaseYear}&page=0&size=100&sortDirection=ASC`);
    } 
    else if (name === 'generallcBlackFile' && filter != '') {
      let generallcBlackFile = filter.split('/')
      let blackCaseNumber = generallcBlackFile[0]
      let blackCaseYear = generallcBlackFile[1]
      console.log(blackCaseNumber)
      console.log(blackCaseYear)
      return this.http.get(`${this.baseUrl}?blackCaseNumber=${blackCaseNumber}&blackCaseYear=${blackCaseYear}&page=0&size=100&sortDirection=ASC`);
    } else if (name === 'generallcRedFile' && filter != '') {
      let generallcRedFile = filter.split('/')
      let redCaseNumber = generallcRedFile[0]
      let redCaseYear = generallcRedFile[1]
      console.log(redCaseNumber)
      console.log(redCaseYear)
      return this.http.get(`${this.baseUrl}?redCaseNumber=${redCaseNumber}&redCaseYear=${redCaseYear}&page=0&size=100&sortDirection=ASC`);
    } else if (name === 'generalInqnumber' && filter != '') {
      let generalInqnumber = filter.split('/')
      let criminalCaseNumber = generalInqnumber[0]
      let criminalCaseYear = generalInqnumber[1]
      console.log(criminalCaseNumber)
      console.log(criminalCaseYear)
      return this.http.get(`${this.baseUrl}?criminalCaseNumber=${criminalCaseNumber}&criminalCaseYear=${criminalCaseYear}&page=0&size=100&sortDirection=ASC`);
    }

    // return this.http.get(`${this.baseUrl}?${name}=${filter}&page=0&size=100&sortDirection=ASC`);
  }
  getHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  viewgetHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  findByCID(id: string, page: number, firstOffset: number) {
    throw new Error('Method not implemented.');
  }
  findByFN(fn: string, page: number, firstOffset: number, transactionId: string) {
    throw new Error('Method not implemented.');
  }
  findByLN(ln: string, page: number, firstOffset: number, transactionId: string) {
    throw new Error('Method not implemented.');
  }
  findByFullName(fn: string, ln: string, page: number, firstOffset: number, transactionId: string) {
    throw new Error('Method not implemented.');
  }
}
