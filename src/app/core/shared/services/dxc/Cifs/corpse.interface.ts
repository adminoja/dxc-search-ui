export interface corpseinterface {
    apiUrl: string;
    headers: string;
    readAll();
    findByID(id: string);
    findByFN(fn: string);
    findByLN(ln: string);

}