export interface CriminalServiceImp{
    apiUrl: string;
    headers: string;
    readAll();
    findByCID(id: string);
    findByFN(fn: string);
    findByLN(ln: string);
    findByLO(lo: string);
}
