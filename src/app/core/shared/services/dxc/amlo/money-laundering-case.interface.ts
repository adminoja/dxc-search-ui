// tslint:disable-next-line: class-name
export interface juvenileoffenderinterface {
    apiUrl: string;
    headers: string;
    readAll();
    findByCN(cn: string);
    findByCP(cp: string);

}
