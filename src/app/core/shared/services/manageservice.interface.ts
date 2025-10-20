export interface IManageService {
  filters(filter: string, name: string, lname?: string[], data?: any, latsName?: string[], offSet?: any);
  getHtml(selectData: any, title: string);
  viewgetHtml(selectData: any, title: string);
}
export interface IManageSingleReport {
  findByCID(id: string, page: number, firstOffset: number,transactionId:string, dataSetId?: string);
  findByFN(fn: string, page: number, firstOffset: number, transactionId: string);
  findByLN(ln: string, page: number, firstOffset: number, transactionId: string);
  findByFullName(fn: string, ln: string, page: number, firstOffset: number, transactionId: string);
}
