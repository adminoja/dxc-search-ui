export interface carlicenseinterface {
    apiUrl: string;
    headers: string;
    readAll();
    findByLS(ls: string);
    findByID(id: string);

}