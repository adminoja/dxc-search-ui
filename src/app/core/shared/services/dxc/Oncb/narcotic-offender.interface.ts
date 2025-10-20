export interface narcoticinterface {
    apiUrl: string;
    headers: string;
    readAll();
    findByID(id: string , page:number , firstOffset:number);
    findByFN(fn: string , page:number , firstOffset:number);
    findByLN(ln: string , page:number , firstOffset:number);
    findByRPY(rpy: string, page:number , firstOffset:number);
    findByFullName(fn: string, ln: string, page:number , firstOffset:number);

}