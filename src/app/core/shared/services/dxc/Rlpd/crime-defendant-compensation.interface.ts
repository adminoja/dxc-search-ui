export interface crimedefendantcompensationinterface {
    apiUrl: string;
    headers: string;
    readAll();
    findByID(id: string);
    findByCID(cid: string);
    findByFN(fn: string);

}