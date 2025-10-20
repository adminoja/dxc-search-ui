import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { url } from 'inspector';
import { Observable, of } from 'rxjs';
import { retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IManageService, IManageSingleReport } from '../../manageservice.interface';

@Injectable({
  providedIn: 'root'
})
export class MoiDopaPersonFirstnameLastnameService implements IManageService, IManageSingleReport {
  baseUrl: string = environment.Dxc_Model_Dopa_MoiDopaPersonFirstnameLastname[0].url.production;
  htmlStr: string[] = [];
  datas: any;
  fnameLname: any;
  constructor(private http: HttpClient) { }
  filters(filter: string, name: string, fnameLname?: string[], data?: any) {
  //   let result;
  //   result = {
  //     "content":data,
  //     "pageable": "INSTANCE",
  //     "totalPages": 1,
  //     "totalElements": 1,
  //     "number": 0,
  //     "size": 0,
  //     "numberOfElements": 1,
  //     "sort": {
  //       "sorted": false,
  //       "unsorted": true,
  //       "empty": true
  //     },
  //     "last": true,
  //     "first": true,
  //     "empty": false
  //   }
  //   // console.log(result);
  //   return of<any>(result);

  // }
  // async getContent(fnameLname) {
  //   const nin = localStorage.getItem('nin');
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'X-User-Nin': nin
  //       // 'Authorization': 'my-auth-token'
  //     }),
  //   };
  //   const urls = [];
  //   let data2;
  //   let result = [];
  //   let data1
  //   data2 = await this.getTodos(urls, httpOptions, fnameLname);
  //   // console.log(data2);
  //   // console.log(data2[0].content);
  //   // for (let index = 0; index < data2.length; index++) {
  //   //   data1 = data2[index].content; 
  //   // }
  //   // for (let index = 0; index < data1.length; index++) {
  //   //   const element = data1[index];
  //   //   result.push(element); 
  //   // }
  //   // console.log(result)
  //   return result;

    const nin = localStorage.getItem('nin');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-User-Nin': nin
        // 'Authorization': 'my-auth-token'
      }),
    };
    return this.http.get(`${this.baseUrl}/moi-dopa-person-by-names?firstName=${fnameLname[0]}&lastName=${fnameLname[1]}&limit=5&offset=1`, httpOptions)
    
  }

  pageOffset(offSet: any) {
    
    let fnameLname = JSON.parse(localStorage.getItem('FnameLname'))
    console.log(fnameLname[0])
    console.log(offSet)
    const nin = localStorage.getItem('nin');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-User-Nin': nin
        // 'Authorization': 'my-auth-token'
      }),
    };
    return this.http.get(`${this.baseUrl}/moi-dopa-person-by-names?firstName=${fnameLname[0]}&lastName=${fnameLname[1]}&limit=5&offset=${offSet}`, httpOptions)
  }

  // async getTodos(urls, httpOptions, fnameLname) {
  //   await this.http.get(`${this.baseUrl}/moi-dopa-person-by-names?firstName=${fnameLname[0]}&lastName=${fnameLname[1]}&limit=5&offset=1`, httpOptions).subscribe(data => {
  //     console.log(data);
  //     this.datas = data['content'];
  //     let totalPage:number = Number.parseInt(data['totalPages']);
  //     console.log(totalPage)
  //     for (let index = 1; index <= totalPage; index++) {
  //       console.log(index);
  //       let offset = ( 5 * (index-1) ) + 1
  //       console.log('offset' + offset)
  //       this.htmlStr.push(`${offset}`);
  //     }
  //   });
  //   // console.log(data1)
  //   // for (let index = 0; index < data1['pageable'].pageSize; index++) {
  //   //   urls.push(data1);
  //   // }
  //   // urls = data1;
  //   // const promises = urls.map(async (url) => await this.http.get(url, httpOptions).pipe(retry(3), (response) => {
  //   //   return response;
  //   // }).toPromise());
  //   // await Promise.all(promises);
  //   return urls;
  // }

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
