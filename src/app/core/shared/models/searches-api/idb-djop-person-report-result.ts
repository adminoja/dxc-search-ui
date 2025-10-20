export interface Parameters{
    thaiNin:string;
}
export interface Status{
    batchStatus: string;
    exitCode: string;
    exitDescription: string;
}
export interface PersonDetail{
    searchId: number;
    dataSetId: string;
    parameters: Parameters2;
    startTime: string;
    stopTime: string;
    status: string;
    items: Items[];
}
export interface Parameters2{
    thaiNin:string;
}
export interface Items{
    searchId: number;
    dataSetId: string;
    parameters: string;
    startTime: string;
    stopTime: string;
    status: Status2;
    resultStatus: string;
    result: Result;    
}
export interface Status2 {
    batchStatus: string;
    exitCode: string;
    exitDescription: string;
  }
export interface Result{
    content:Content[];
    pageable: string;
    totalPages:number;
    totalElements: number;
    number: number;
    size: number;
    numberOfElements: number;
    sort: Sort;
    last: boolean;
    first: boolean;
    empty: boolean;
}
export interface Content{
    citizenCardNumber: string;
    dataId: string;
    mimeType?: string;
    id: string;
    image?: string;
    age?: number;
    dateOfBirth?: number;
    dateOfMoveIn?: number;
    fatherName?: string;
    fatherNationalityCode?: number;
    fatherNationalityDesc?: string;
    fatherPersonalID?: number;
    firstName?: string;
    fullnameAndRank?: string;
    genderCode?: number;
    genderDesc?: string;
    lastName?: string;
    middleName?: string;
    motherName?: string;
    motherNationalityCode?: number;
    motherNationalityDesc?: string;
    motherPersonalID?: number;
    nationalityCode?: number;
    nationalityDesc?: string;
    ownerStatusDesc?: string;
    statusOfPersonCode?: number;
    statusOfPersonDesc?: string;
    titleCode?: number;
    titleDesc?: string;
    titleName?: string;
    titleSex?: number; 
}
export interface Sort{
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
}
//#######################################Asset####################################################
export interface Asset{
    searchId: number;
    dataSetId: string;
    parameters: Parameters3;
    startTime: string;
    stopTime: string;
    status: string;
    items: Items2[];
}
export interface Parameters3{
    thaiNin: string;
}
export interface Items2 {
    searchId: number;
    dataSetId: string;
    parameters: string;
    startTime: string;
    stopTime: string;
    status: Status3;
    resultStatus: string;
    result?: Result2;
  }
  export interface Status3 {
    batchStatus: string;
    exitCode: string;
    exitDescription: string;
  }
  export interface Result2 {
    content: Content2[];
    pageable: string;
    totalPages: number;
    totalElements: number;
    number: number;
    size: number;
    numberOfElements: number;
    sort: Sort2;
    last: boolean;
    first: boolean;
    empty: boolean;
  }
  export interface Content2 {
    citizenCardNumber: string;
    dataId: string;
    condoId: string;
    condoNameTh: string;
    condoroomAreaNum: string;
    constructionName: string;
    lastUpdate: string;
    ownerPid: string;
    parcelAmphurName: string;
    parcelMoo: string;
    parcelNganNum: string;
    parcelProvinceName: string;
    parcelRaiNum: string;
    parcelSurveyNo: string;
    parcelTambolName: string;
    parcelTypeName: string;
    parcelUtmLandNo: string;
    parcelUtmMap: string;
    parcelWaNum: string;
    propertyNo: string;
    id: string;
  }
  export interface Sort2 {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  }
  //#######################################justiceEvents####################################################
  export interface JusticeEvents{
    searchId: number;
    dataSetId: string;
    parameters: Parameters4;
    startTime: string;
    stopTime: string;
    status: Status4;
    items: any[];
  }
  export interface Parameters4 {
    thaiNin: string;
    citizenCardNumber: string;
  }
  export interface Status4 {
    batchStatus: string;
    exitCode: string;
    exitDescription: string;
  }
export interface IdbDjopPersonReportResult{
    searchId: number;
    dataSetId: string;
    parameters: Parameters;
    startTime: string;
    stopTime: string;
    status: Status;
    person: string;
    personDetail: PersonDetail;
    asset: Asset;
    justiceEvents: JusticeEvents;
}