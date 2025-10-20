export interface moidopaalienworkforces {
    apiUrl: string;
    headers: string;
    readAll();
    findByID(id: string, page: number, firstOffset: number);
    // findByFN(fn: string, page: number, firstOffset: number);
    // findByLN(ln: string, page: number, firstOffset: number);

}
