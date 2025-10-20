// declare module createSearch {

    export interface Parameters {
        thaiNin: string;
    }

    export interface Request {
        dataSetId: string;
        parameters: Parameters;
    }

    export interface Self {
        href: string;
    }

    export interface Searches {
        href: string;
    }

    export interface Links {
        self: Self[];
        searches: Searches;
    }

    export interface RootObject {
        createDate: string;
        createBy: string;
        lastModifiedDate: string;
        lastModifiedBy: string;
        searchId: number;
        jobExecutionId: number;
        searchByThaiNin: string;
        request: Request;
        status?: any;
        _links: Links;
    }

// }