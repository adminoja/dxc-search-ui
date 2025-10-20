export interface driverlicenseinterface {
    apiUrl: string;
    headers: string;
    readAll();
    findByID(id: string, page: number, firstOffset: number);

}
