export interface citizeninterface {
    apiUrl: string;
    headers: string;
    readAll();
    findByCID(id: string , page:number , firstOffset:number, transactionId: string);
    findByN(fn: string ,ln:string, page:number , firstOffset:number);
   
}