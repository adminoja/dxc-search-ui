export interface arrestwarrantinterface {
    apiUrl: string;
    headers: string;
    readAll();
    findByFN(fn: string);
    findByLN(ln: string);

}