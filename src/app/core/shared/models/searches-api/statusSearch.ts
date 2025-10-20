// declare module statusSearch {
    export interface RootObject{
        searchId: number;
        dataSetId: string;
        status: Status;
        stepStatusMap: StepStatusMap;
        queryStatusMap: QueryStatusMap;
    }
    export interface Status{
        batchStatus: string;
        exitCode: string;
        exitDescription:string;
    }
    export interface StepStatusMap{
        idbDjopPersonReportRunStep: IdbDjopPersonReportRunStep;
    }
    export interface IdbDjopPersonReportRunStep{
        batchStatus: string;
        exitCode: string;
        exitDescription: string;
    }

    export interface QueryStatusMap{
        probationee: Probationee;
        "djopjuvenile-offender": DjopJuvenileOffender;
        "doc-prisoner": DocPrisoner;
        "dopa-moi-dopa-person-face-photo": DopaMoiDopaPersonFacePhoto;
        "dopa-moi-dopa-thai-id-cards": DopaMoiDopaThaiIdCards;
        "dopa-moi-dopa-person": DopaMoiDopaPerson;
        "dol-moi-dol-land-and-condominium-titles": DolMoiDolLandAndCondominiumTitles;
        "dlt-car-license-new": DltCarLicenseNew;
    }

    export interface Probationee{
        batchStatus: string;
        exitCode: string;
        exitDescription: string;
    }
    export interface DjopJuvenileOffender{
        batchStatus: string;
        exitCode: string;
        exitDescription: string;
    }
    export interface DocPrisoner{
        batchStatus: string;
        exitCode: string;
        exitDescription: string;
    }
    export interface DopaMoiDopaPersonFacePhoto{
        batchStatus: string;
        exitCode: string;
        exitDescription: string;
    }
    export interface DopaMoiDopaThaiIdCards{
        batchStatus: string;
        exitCode: string;
        exitDescription: string;
    }
    export interface DopaMoiDopaPerson{
        batchStatus: string;
        exitCode: string;
        exitDescription: string;
    }
    export interface DolMoiDolLandAndCondominiumTitles{
        batchStatus: string;
        exitCode: string;
        exitDescription: string;
    }
    export interface DltCarLicenseNew{
        batchStatus: string;
        exitCode: string;
        exitDescription: string;
    }
    

// }