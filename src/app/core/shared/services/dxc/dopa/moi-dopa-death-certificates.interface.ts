export interface moidopadeathcertificates {
    apiUrl: string;
    headers: string;
    readAll();
    findByID(id: string, page: number, firstOffset: number);
    // findByFN(fn: string, page: number, firstOffset: number, transactionId: string);
    // findByLN(ln: string, page: number, firstOffset: number, transactionId: string);

}