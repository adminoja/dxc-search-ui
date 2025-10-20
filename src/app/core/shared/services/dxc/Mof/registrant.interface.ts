export interface registrantinterface {
    apiUrl: string;
    headers: string;
    readAll();
    findByID(id: string);

}