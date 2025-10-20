export interface missingpersoncaseinterface {
    apiUrl: string;
    headers: string;
    readAll();
    findByFN(fn: string);
    findByLN(ln: string);
    findByLC(lc: string);

}