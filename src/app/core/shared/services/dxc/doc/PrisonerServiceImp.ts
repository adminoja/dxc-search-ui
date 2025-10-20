export interface PrisonerServiceImp{
    apiUrl:string;
    headers:string;
    readAll();
    findByCID(id: string , page:number , firstOffset:number,transactionId: string);
    findByFN(fn: string , page:number, firstOffset:number,transactionId: string);
    findByLN(ln: string , page:number , firstOffset:number,transactionId: string);
    findByPN(pn: string , page:number , firstOffset:number,transactionId: string);
    findByFullName(fn: string, ln: string, page:number , firstOffset:number,transactionId: string);
    
}