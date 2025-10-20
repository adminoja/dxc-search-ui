import * as moment from 'moment';

export interface IDxcModelLedBankruptcyCase {

  id: string;
  absoluteReceivershipCancellationDate: string;
  absoluteReceivershipCancellationDay: string;
  absoluteReceivershipCancellationGazetteBookNumber: string;
  absoluteReceivershipCancellationGazetteChapterNum: string;
  absoluteReceivershipCancellationGazetteDate: string;
  absoluteReceivershipCancellationGazetteDay: string;
  absoluteReceivershipCancellationGazetteMonth: string;
  absoluteReceivershipCancellationGazettePageNumber: string;
  absoluteReceivershipCancellationGazetteYear: string;
  absoluteReceivershipCancellationMonth: string;
  absoluteReceivershipCancellationYear: string;
  absoluteReceivershipDate: string;
  absoluteReceivershipDay: string;
  absoluteReceivershipDebtCollectionRequestdueDate: string;
  absoluteReceivershipDebtCollectionRequestDueDay: string;
  absoluteReceivershipDebtCollectionRequestDueMonth: string;
  absoluteReceivershipDebtCollectionRequestDueYear: string;
  absoluteReceivershipDebtCollectionRequestinSpectionDate: string;
  absoluteReceivershipDebtCollectionRequestinSpectionDay: string;
  absoluteReceivershipDebtCollectionRequestinSpectionMonth: string;
  absoluteReceivershipDebtCollectionRequestinSpectionYear: string;
  absoluteReceivershipGazetteBookNumber: string;
  absoluteReceivershipGazetteChapterNum: string;
  absoluteReceivershipGazetteDate: string;
  absoluteReceivershipGazetteDay: string;
  absoluteReceivershipGazetteMonth: string;
  absoluteReceivershipGazettePageNumber: string;
  absoluteReceivershipGazetteYear: string;
  absoluteReceivershipMonth: string;
  absoluteReceivershipYear: string;
  afterBankruptcyDebtCollectionRequestDueDate: string;
  afterBankruptcyDebtCollectionRequestDueDay: string;
  afterBankruptcyDebtCollectionRequestDueMonth: string;
  afterBankruptcyDebtCollectionRequestDueYear: string;
  afterBankruptcyDebtCompromisationCancellationDate: string;
  afterBankruptcyDebtCompromisationCancellationDay: string;
  afterBankruptcyDebtCompromisationCancellationGazetteBookNumber: string;
  afterBankruptcyDebtCompromisationCancellationGazetteChapterNum: string;
  afterBankruptcyDebtCompromisationCancellationGazetteDate: string;
  afterBankruptcyDebtCompromisationCancellationGazetteDay: string;
  afterBankruptcyDebtCompromisationCancellationGazetteMonth: string;
  afterBankruptcyDebtCompromisationCancellationGazettePageNumber: string;
  afterBankruptcyDebtCompromisationCancellationGazetteYear: string;
  afterBankruptcyDebtCompromisationCancellationMonth: string;
  afterBankruptcyDebtCompromisationCancellationYear: string;
  afterBankruptcyDebtCompromisationDate: string;
  afterBankruptcyDebtCompromisationDay: string;
  afterBankruptcyDebtCompromisationGazetteBookNumber: string;
  afterBankruptcyDebtCompromisationGazetteChapterNum: string;
  afterBankruptcyDebtCompromisationGazetteDate: string;
  afterBankruptcyDebtCompromisationGazetteDay: string;
  afterBankruptcyDebtCompromisationGazetteMonth: string;
  afterBankruptcyDebtCompromisationGazettePageNumber: string;
  afterBankruptcyDebtCompromisationGazetteYear: string;
  afterBankruptcyDebtCompromisationMonth: string;
  afterBankruptcyDebtCompromisationYear: string;
  bankruptcyCancellationDate: string;
  bankruptcyCancellationDay: string;
  bankruptcyCancellationGazetteBookNumber: string;
  bankruptcyCancellationGazetteChapterNum: string;
  bankruptcyCancellationGazetteDate: string;
  bankruptcyCancellationGazetteDay: string;
  bankruptcyCancellationGazetteMonth: string;
  bankruptcyCancellationGazettePageNumber: string;
  bankruptcyCancellationGazetteYear: string;
  bankruptcyCancellationMonth: string;
  bankruptcyCancellationYear: string;
  bankruptcyDischargeDate: string;
  bankruptcyDischargeDay: string;
  bankruptcyDischargeGazetteBookNumber: string;
  bankruptcyDischargeGazetteChapterNum: string;
  bankruptcyDischargeGazetteDate: string;
  bankruptcyDischargeGazetteDay: string;
  bankruptcyDischargeGazetteMonth: string;
  bankruptcyDischargeGazettePageNumber: string;
  bankruptcyDischargeGazetteYear: string;
  bankruptcyDischargeMonth: string;
  bankruptcyDischargeYear: string;
  bankruptcyRulingDate: string;
  bankruptcyRulingDay: string;
  bankruptcyRulingGazetteBookNumber: string;
  bankruptcyRulingGazetteChapterNum: string;
  bankruptcyRulingGazetteDate: string;
  bankruptcyRulingGazetteDay: string;
  bankruptcyRulingGazetteMonth: string;
  bankruptcyRulingGazettePageNumber: string;
  bankruptcyRulingGazetteYear: string;
  bankruptcyRulingMonth: string;
  bankruptcyRulingYear: string;
  beforeBankruptcyDebtCompromisationCancellationDate: string;
  beforeBankruptcyDebtCompromisationCancellationDay: string;
  beforeBankruptcyDebtCompromisationCancellationGazetteBookNumber: string;
  beforeBankruptcyDebtCompromisationCancellationGazetteChapterNum: string;
  beforeBankruptcyDebtCompromisationCancellationGazetteDate: string;
  beforeBankruptcyDebtCompromisationCancellationGazetteDay: string;
  beforeBankruptcyDebtCompromisationCancellationGazetteMonth: string;
  beforeBankruptcyDebtCompromisationCancellationGazettePageNumber: string;
  beforeBankruptcyDebtCompromisationCancellationGazetteYear: string;
  beforeBankruptcyDebtCompromisationCancellationMonth: string;
  beforeBankruptcyDebtCompromisationCancellationYear: string;
  beforeBankruptcyDebtCompromisationDate: string;
  beforeBankruptcyDebtCompromisationDay: string;
  beforeBankruptcyDebtCompromisationGazetteBookNumber: string;
  beforeBankruptcyDebtCompromisationGazetteChapterNum: string;
  beforeBankruptcyDebtCompromisationGazetteDate: string;
  beforeBankruptcyDebtCompromisationGazetteDay: string;
  beforeBankruptcyDebtCompromisationGazetteMonth: string;
  beforeBankruptcyDebtCompromisationGazettePageNumber: string;
  beforeBankruptcyDebtCompromisationGazetteYear: string;
  beforeBankruptcyDebtCompromisationMonth: string;
  beforeBankruptcyDebtCompromisationYear: string;
  blackCaseNumber: string;
  blackCaseYear: string;
  caseClosedDate: string;
  caseClosedDay: string;
  caseClosedMonth: string;
  caseClosedYear: string;
  caseDismissalDate: string;
  caseDismissalDay: string;
  caseDismissalMonth: string;
  caseDismissalYear: string;
  caseDispositionDate: string;
  caseDispositionDay: string;
  caseDispositionMonth: string;
  caseDispositionYear: string;
  caseInputSequenceNumber: string;
  courtName: string;
  courtOrderedPropertyManagementCancellationDate: string;
  courtOrderedPropertyManagementCancellationDay: string;
  courtOrderedPropertyManagementCancellationMonth: string;
  courtOrderedPropertyManagementCancellationYear: string;
  courtOrderedPropertyManagementDate: string;
  courtOrderedPropertyManagementDay: string;
  courtOrderedPropertyManagementMonth: string;
  courtOrderedPropertyManagementYear: string;
  defendantAbbriviationName: string;
  defendantId: string;
  defendantName: string;
  defendantOrderNumber: string;
  defendantSurname: string;
  otherBankruptcyDischargeDate: string;
  otherBankruptcyDischargeDay: string;
  otherBankruptcyDischargeMonth: string;
  otherBankruptcyDischargeYear: string;
  prosecutionDate: string;
  prosecutionDay: string;
  prosecutionMonth: string;
  prosecutionYear: string;
  redCaseNumber: string;
  redCaseYear: string;
  remark: string;
  retrialDate: string;
  retrialDay: string;
  retrialMonth: string;
  retrialYear: string;
  temporaryReceivershipCancellationDate: string;
  temporaryReceivershipCancellationDay: string;
  temporaryReceivershipCancellationGazetteBookNumber: string;
  temporaryReceivershipCancellationGazetteChapterNum: string;
  temporaryReceivershipCancellationGazetteDate: string;
  temporaryReceivershipCancellationGazetteDay: string;
  temporaryReceivershipCancellationGazetteMonth: string;
  temporaryReceivershipCancellationGazettepageNumber: string;
  temporaryReceivershipCancellationGazetteYear: string;
  temporaryReceivershipCancellationMonth: string;
  temporaryReceivershipCancellationYear: string;
  temporaryReceivershipDate: string;
  temporaryReceivershipDay: string;
  temporaryReceivershipGazetteBookNumber: string;
  temporaryReceivershipGazetteChapterNum: string;
  temporaryReceivershipGazetteDate: string;
  temporaryReceivershipGazetteDay: string;
  temporaryReceivershipGazetteMonth: string;
  temporaryReceivershipGazettePageNumber: string;
  temporaryReceivershipGazetteYear: string;
  temporaryReceivershipMonth: string;
  temporaryReceivershipYear: string;
  writDefendantName: string;
  writPlaintiffName: string;

  reportName: string; // ผู้ขอรายงาน
  reportOfDate: string; // วันที่พิมรายงาน
  reportOfTime: string; // เวลาที่พิมรายงาน
  reportBarcode: string; // เลขที่เอกสาร(เลขบาร์โค๊ด)
  wartermarks: string;
}

// tslint:disable-next-line:class-name
export class Dxc_Model_Led_BankruptcyCase {
  ledbankruptcycase: any;
  reportName: string;
  reportOfDate: string;
  reportOfTime: string;
  private dataSet: IDxcModelLedBankruptcyCase;
  constructor(selectData: any) {
    this.ledbankruptcycase = {
      'id': this.changeNull(selectData.id),
      'absoluteReceivershipCancellationDate': this.changeNull(selectData.absoluteReceivershipCancellationDate),
      'absoluteReceivershipCancellationDay': this.changeNull(selectData.absoluteReceivershipCancellationDay),
      'absoluteReceivershipCancellationGazetteBookNumber': this.changeNull(selectData.absoluteReceivershipCancellationGazetteBookNumber),
      'absoluteReceivershipCancellationGazetteChapterNum': this.changeNull(selectData.absoluteReceivershipCancellationGazetteChapterNum),
      'absoluteReceivershipCancellationGazetteDate': this.changeNull(selectData.absoluteReceivershipCancellationGazetteDate),
      'absoluteReceivershipCancellationGazetteDay': this.changeNull(selectData.absoluteReceivershipCancellationGazetteDay),
      'absoluteReceivershipCancellationGazetteMonth': this.changeNull(selectData.absoluteReceivershipCancellationGazetteMonth),
      'absoluteReceivershipCancellationGazettePageNumber': this.changeNull(selectData.absoluteReceivershipCancellationGazettePageNumber),
      'absoluteReceivershipCancellationGazetteYear': this.changeNull(selectData.absoluteReceivershipCancellationGazetteYear),
      'absoluteReceivershipCancellationMonth': this.changeNull(selectData.absoluteReceivershipCancellationMonth),
      'absoluteReceivershipCancellationYear': this.changeNull(selectData.absoluteReceivershipCancellationYear),
      'absoluteReceivershipDate': this.changeNull(selectData.absoluteReceivershipDate),
      'absoluteReceivershipDay': this.changeNull(selectData.absoluteReceivershipDay),
      'absoluteReceivershipDebtCollectionRequestdueDate': this.changeNull(selectData.absoluteReceivershipDebtCollectionRequestdueDate),
      'absoluteReceivershipDebtCollectionRequestDueDay': this.changeNull(selectData.absoluteReceivershipDebtCollectionRequestDueDay),
      'absoluteReceivershipDebtCollectionRequestDueMonth': this.changeNull(selectData.absoluteReceivershipDebtCollectionRequestDueMonth),
      'absoluteReceivershipDebtCollectionRequestDueYear': this.changeNull(selectData.absoluteReceivershipDebtCollectionRequestDueYear),
      'absoluteReceivershipDebtCollectionRequestinSpectionDate': this.changeNull(selectData.absoluteReceivershipDebtCollectionRequestinSpectionDate),
      'absoluteReceivershipDebtCollectionRequestinSpectionDay': this.changeNull(selectData.absoluteReceivershipDebtCollectionRequestinSpectionDay),
      'absoluteReceivershipDebtCollectionRequestinSpectionMonth': this.changeNull(selectData.absoluteReceivershipDebtCollectionRequestinSpectionMonth),
      'absoluteReceivershipDebtCollectionRequestinSpectionYear': this.changeNull(selectData.absoluteReceivershipDebtCollectionRequestinSpectionYear),
      'absoluteReceivershipGazetteBookNumber': this.changeNull(selectData.absoluteReceivershipGazetteBookNumber),
      'absoluteReceivershipGazetteChapterNum': this.changeNull(selectData.absoluteReceivershipGazetteChapterNum),
      'absoluteReceivershipGazetteDate': this.changeNull(selectData.absoluteReceivershipGazetteDate),
      'absoluteReceivershipGazetteDay': this.changeNull(selectData.absoluteReceivershipGazetteDay),
      'absoluteReceivershipGazetteMonth': this.changeNull(selectData.absoluteReceivershipGazetteMonth),
      'absoluteReceivershipGazettePageNumber': this.changeNull(selectData.absoluteReceivershipGazettePageNumber),
      'absoluteReceivershipGazetteYear': this.changeNull(selectData.absoluteReceivershipGazetteYear),
      'absoluteReceivershipMonth': this.changeNull(selectData.absoluteReceivershipMonth),
      'absoluteReceivershipYear': this.changeNull(selectData.absoluteReceivershipYear),
      'afterBankruptcyDebtCollectionRequestDueDate': this.changeNull(selectData.afterBankruptcyDebtCollectionRequestDueDate),
      'afterBankruptcyDebtCollectionRequestDueDay': this.changeNull(selectData.afterBankruptcyDebtCollectionRequestDueDay),
      'afterBankruptcyDebtCollectionRequestDueMonth': this.changeNull(selectData.afterBankruptcyDebtCollectionRequestDueMonth),
      'afterBankruptcyDebtCollectionRequestDueYear': this.changeNull(selectData.afterBankruptcyDebtCollectionRequestDueYear),
      'afterBankruptcyDebtCompromisationCancellationDate': this.changeNull(selectData.afterBankruptcyDebtCompromisationCancellationDate),
      'afterBankruptcyDebtCompromisationCancellationDay': this.changeNull(selectData.afterBankruptcyDebtCompromisationCancellationDay),
      'afterBankruptcyDebtCompromisationCancellationGazetteBookNumber': this.changeNull(selectData.afterBankruptcyDebtCompromisationCancellationGazetteBookNumber),
      'afterBankruptcyDebtCompromisationCancellationGazetteChapterNum': this.changeNull(selectData.afterBankruptcyDebtCompromisationCancellationGazetteChapterNum),
      'afterBankruptcyDebtCompromisationCancellationGazetteDate': this.changeNull(selectData.afterBankruptcyDebtCompromisationCancellationGazetteDate),
      'afterBankruptcyDebtCompromisationCancellationGazetteDay': this.changeNull(selectData.afterBankruptcyDebtCompromisationCancellationGazetteDay),
      'afterBankruptcyDebtCompromisationCancellationGazetteMonth': this.changeNull(selectData.afterBankruptcyDebtCompromisationCancellationGazetteMonth),
      'afterBankruptcyDebtCompromisationCancellationGazettePageNumber': this.changeNull(selectData.afterBankruptcyDebtCompromisationCancellationGazettePageNumber),
      'afterBankruptcyDebtCompromisationCancellationGazetteYear': this.changeNull(selectData.afterBankruptcyDebtCompromisationCancellationGazetteYear),
      'afterBankruptcyDebtCompromisationCancellationMonth': this.changeNull(selectData.afterBankruptcyDebtCompromisationCancellationMonth),
      'afterBankruptcyDebtCompromisationCancellationYear': this.changeNull(selectData.afterBankruptcyDebtCompromisationCancellationYear),
      'afterBankruptcyDebtCompromisationDate': this.changeNull(selectData.afterBankruptcyDebtCompromisationDate),
      'afterBankruptcyDebtCompromisationDay': this.changeNull(selectData.afterBankruptcyDebtCompromisationDay),
      'afterBankruptcyDebtCompromisationGazetteBookNumber': this.changeNull(selectData.afterBankruptcyDebtCompromisationGazetteBookNumber),
      'afterBankruptcyDebtCompromisationGazetteChapterNum': this.changeNull(selectData.afterBankruptcyDebtCompromisationGazetteChapterNum),
      'afterBankruptcyDebtCompromisationGazetteDate': this.changeNull(selectData.afterBankruptcyDebtCompromisationGazetteDate),
      'afterBankruptcyDebtCompromisationGazetteDay': this.changeNull(selectData.afterBankruptcyDebtCompromisationGazetteDay),
      'afterBankruptcyDebtCompromisationGazetteMonth': this.changeNull(selectData.afterBankruptcyDebtCompromisationGazetteMonth),
      'afterBankruptcyDebtCompromisationGazettePageNumber': this.changeNull(selectData.afterBankruptcyDebtCompromisationGazettePageNumber),
      'afterBankruptcyDebtCompromisationGazetteYear': this.changeNull(selectData.afterBankruptcyDebtCompromisationGazetteYear),
      'afterBankruptcyDebtCompromisationMonth': this.changeNull(selectData.afterBankruptcyDebtCompromisationMonth),
      'afterBankruptcyDebtCompromisationYear': this.changeNull(selectData.afterBankruptcyDebtCompromisationYear),
      'bankruptcyCancellationDate': this.changeNull(selectData.bankruptcyCancellationDate),
      'bankruptcyCancellationDay': this.changeNull(selectData.bankruptcyCancellationDay),
      'bankruptcyCancellationGazetteBookNumber': this.changeNull(selectData.bankruptcyCancellationGazetteBookNumber),
      'bankruptcyCancellationGazetteChapterNum': this.changeNull(selectData.bankruptcyCancellationGazetteChapterNum),
      'bankruptcyCancellationGazetteDate': this.changeNull(selectData.bankruptcyCancellationGazetteDate),
      'bankruptcyCancellationGazetteDay': this.changeNull(selectData.bankruptcyCancellationGazetteDay),
      'bankruptcyCancellationGazetteMonth': this.changeNull(selectData.bankruptcyCancellationGazetteMonth),
      'bankruptcyCancellationGazettePageNumber': this.changeNull(selectData.bankruptcyCancellationGazettePageNumber),
      'bankruptcyCancellationGazetteYear': this.changeNull(selectData.bankruptcyCancellationGazetteYear),
      'bankruptcyCancellationMonth': this.changeNull(selectData.bankruptcyCancellationMonth),
      'bankruptcyCancellationYear': this.changeNull(selectData.bankruptcyCancellationYear),
      'bankruptcyDischargeDate': this.changeNull(selectData.bankruptcyDischargeDate),
      'bankruptcyDischargeDay': this.changeNull(selectData.bankruptcyDischargeDay),
      'bankruptcyDischargeGazetteBookNumber': this.changeNull(selectData.bankruptcyDischargeGazetteBookNumber),
      'bankruptcyDischargeGazetteChapterNum': this.changeNull(selectData.bankruptcyDischargeGazetteChapterNum),
      'bankruptcyDischargeGazetteDate': this.changeNull(selectData.bankruptcyDischargeGazetteDate),
      'bankruptcyDischargeGazetteDay': this.changeNull(selectData.bankruptcyDischargeGazetteDay),
      'bankruptcyDischargeGazetteMonth': this.changeNull(selectData.bankruptcyDischargeGazetteMonth),
      'bankruptcyDischargeGazettePageNumber': this.changeNull(selectData.bankruptcyDischargeGazettePageNumber),
      'bankruptcyDischargeGazetteYear': this.changeNull(selectData.bankruptcyDischargeGazetteYear),
      'bankruptcyDischargeMonth': this.changeNull(selectData.bankruptcyDischargeMonth),
      'bankruptcyDischargeYear': this.changeNull(selectData.bankruptcyDischargeYear),
      'bankruptcyRulingDate': this.changeNull(selectData.bankruptcyRulingDate),
      'bankruptcyRulingDay': this.changeNull(selectData.bankruptcyRulingDay),
      'bankruptcyRulingGazetteBookNumber': this.changeNull(selectData.bankruptcyRulingGazetteBookNumber),
      'bankruptcyRulingGazetteChapterNum': this.changeNull(selectData.bankruptcyRulingGazetteChapterNum),
      'bankruptcyRulingGazetteDate': this.changeNull(selectData.bankruptcyRulingGazetteDate),
      'bankruptcyRulingGazetteDay': this.changeNull(selectData.bankruptcyRulingGazetteDay),
      'bankruptcyRulingGazetteMonth': this.changeNull(selectData.bankruptcyRulingGazetteMonth),
      'bankruptcyRulingGazettePageNumber': this.changeNull(selectData.bankruptcyRulingGazettePageNumber),
      'bankruptcyRulingGazetteYear': this.changeNull(selectData.bankruptcyRulingGazetteYear),
      'bankruptcyRulingMonth': this.changeNull(selectData.bankruptcyRulingMonth),
      'bankruptcyRulingYear': this.changeNull(selectData.bankruptcyRulingYear),
      'beforeBankruptcyDebtCompromisationCancellationDate': this.changeNull(selectData.beforeBankruptcyDebtCompromisationCancellationDate),
      'beforeBankruptcyDebtCompromisationCancellationDay': this.changeNull(selectData.beforeBankruptcyDebtCompromisationCancellationDay),
      'beforeBankruptcyDebtCompromisationCancellationGazetteBookNumber': this.changeNull(selectData.beforeBankruptcyDebtCompromisationCancellationGazetteBookNumber),
      'beforeBankruptcyDebtCompromisationCancellationGazetteChapterNum': this.changeNull(selectData.beforeBankruptcyDebtCompromisationCancellationGazetteChapterNum),
      'beforeBankruptcyDebtCompromisationCancellationGazetteDate': this.changeNull(selectData.beforeBankruptcyDebtCompromisationCancellationGazetteDate),
      'beforeBankruptcyDebtCompromisationCancellationGazetteDay': this.changeNull(selectData.beforeBankruptcyDebtCompromisationCancellationGazetteDay),
      'beforeBankruptcyDebtCompromisationCancellationGazetteMonth': this.changeNull(selectData.beforeBankruptcyDebtCompromisationCancellationGazetteMonth),
      'beforeBankruptcyDebtCompromisationCancellationGazettePageNumber': this.changeNull(selectData.beforeBankruptcyDebtCompromisationCancellationGazettePageNumber),
      'beforeBankruptcyDebtCompromisationCancellationGazetteYear': this.changeNull(selectData.beforeBankruptcyDebtCompromisationCancellationGazetteYear),
      'beforeBankruptcyDebtCompromisationCancellationMonth': this.changeNull(selectData.beforeBankruptcyDebtCompromisationCancellationMonth),
      'beforeBankruptcyDebtCompromisationCancellationYear': this.changeNull(selectData.beforeBankruptcyDebtCompromisationCancellationYear),
      'beforeBankruptcyDebtCompromisationDate': this.changeNull(selectData.beforeBankruptcyDebtCompromisationDate),
      'beforeBankruptcyDebtCompromisationDay': this.changeNull(selectData.beforeBankruptcyDebtCompromisationDay),
      'beforeBankruptcyDebtCompromisationGazetteBookNumber': this.changeNull(selectData.beforeBankruptcyDebtCompromisationGazetteBookNumber),
      'beforeBankruptcyDebtCompromisationGazetteChapterNum': this.changeNull(selectData.beforeBankruptcyDebtCompromisationGazetteChapterNum),
      'beforeBankruptcyDebtCompromisationGazetteDate': this.changeNull(selectData.beforeBankruptcyDebtCompromisationGazetteDate),
      'beforeBankruptcyDebtCompromisationGazetteDay': this.changeNull(selectData.beforeBankruptcyDebtCompromisationGazetteDay),
      'beforeBankruptcyDebtCompromisationGazetteMonth': this.changeNull(selectData.beforeBankruptcyDebtCompromisationGazetteMonth),
      'beforeBankruptcyDebtCompromisationGazettePageNumber': this.changeNull(selectData.beforeBankruptcyDebtCompromisationGazettePageNumber),
      'beforeBankruptcyDebtCompromisationGazetteYear': this.changeNull(selectData.beforeBankruptcyDebtCompromisationGazetteYear),
      'beforeBankruptcyDebtCompromisationMonth': this.changeNull(selectData.beforeBankruptcyDebtCompromisationMonth),
      'beforeBankruptcyDebtCompromisationYear': this.changeNull(selectData.beforeBankruptcyDebtCompromisationYear),
      'blackCaseNumber': this.changeNull(selectData.blackCaseNumber),
      'blackCaseYear': this.changeNull(selectData.blackCaseYear),
      'caseClosedDate': this.changeNull(selectData.caseClosedDate),
      'caseClosedDay': this.changeNull(selectData.caseClosedDay),
      'caseClosedMonth': this.changeNull(selectData.caseClosedMonth),
      'caseClosedYear': this.changeNull(selectData.caseClosedYear),
      'caseDismissalDate': this.changeNull(selectData.caseDismissalDate),
      'caseDismissalDay': this.changeNull(selectData.caseDismissalDay),
      'caseDismissalMonth': this.changeNull(selectData.caseDismissalMonth),
      'caseDismissalYear': this.changeNull(selectData.caseDismissalYear),
      'caseDispositionDate': this.changeNull(selectData.caseDispositionDate),
      'caseDispositionDay': this.changeNull(selectData.caseDispositionDay),
      'caseDispositionMonth': this.changeNull(selectData.caseDispositionMonth),
      'caseDispositionYear': this.changeNull(selectData.caseDispositionYear),
      'caseInputSequenceNumber': this.changeNull(selectData.caseInputSequenceNumber),
      'courtName': this.changeNull(selectData.courtName),
      'courtOrderedPropertyManagementCancellationDate': this.changeNull(selectData.courtOrderedPropertyManagementCancellationDate),
      'courtOrderedPropertyManagementCancellationDay': this.changeNull(selectData.courtOrderedPropertyManagementCancellationDay),
      'courtOrderedPropertyManagementCancellationMonth': this.changeNull(selectData.courtOrderedPropertyManagementCancellationMonth),
      'courtOrderedPropertyManagementCancellationYear': this.changeNull(selectData.courtOrderedPropertyManagementCancellationYear),
      'courtOrderedPropertyManagementDate': this.changeNull(selectData.courtOrderedPropertyManagementDate),
      'courtOrderedPropertyManagementDay': this.changeNull(selectData.courtOrderedPropertyManagementDay),
      'courtOrderedPropertyManagementMonth': this.changeNull(selectData.courtOrderedPropertyManagementMonth),
      'courtOrderedPropertyManagementYear': this.changeNull(selectData.courtOrderedPropertyManagementYear),
      'defendantAbbriviationName': this.changeNull(selectData.defendantAbbriviationName),
      'defendantId': this.changeNull(selectData.defendantId),
      'defendantName': this.changeNull(selectData.defendantName),
      'defendantOrderNumber': this.changeNull(selectData.defendantOrderNumber),
      'defendantSurname': this.changeNull(selectData.defendantSurname),
      'otherBankruptcyDischargeDate': this.changeNull(selectData.otherBankruptcyDischargeDate),
      'otherBankruptcyDischargeDay': this.changeNull(selectData.otherBankruptcyDischargeDay),
      'otherBankruptcyDischargeMonth': this.changeNull(selectData.otherBankruptcyDischargeMonth),
      'otherBankruptcyDischargeYear': this.changeNull(selectData.otherBankruptcyDischargeYear),
      'prosecutionDate': this.changeNull(selectData.prosecutionDate),
      'prosecutionDay': this.changeNull(selectData.prosecutionDay),
      'prosecutionMonth': this.changeNull(selectData.prosecutionMonth),
      'prosecutionYear': this.changeNull(selectData.prosecutionYear),
      'redCaseNumber': this.changeNull(selectData.redCaseNumber),
      'redCaseYear': this.changeNull(selectData.redCaseYear),
      'remark': this.changeNull(selectData.remark),
      'retrialDate': this.changeNull(selectData.retrialDate),
      'retrialDay': this.changeNull(selectData.retrialDay),
      'retrialMonth': this.changeNull(selectData.retrialMonth),
      'retrialYear': this.changeNull(selectData.retrialYear),
      'temporaryReceivershipCancellationDate': this.changeNull(selectData.temporaryReceivershipCancellationDate),
      'temporaryReceivershipCancellationDay': this.changeNull(selectData.temporaryReceivershipCancellationDay),
      'temporaryReceivershipCancellationGazetteBookNumber': this.changeNull(selectData.temporaryReceivershipCancellationGazetteBookNumber),
      'temporaryReceivershipCancellationGazetteChapterNum': this.changeNull(selectData.temporaryReceivershipCancellationGazetteChapterNum),
      'temporaryReceivershipCancellationGazetteDate': this.changeNull(selectData.temporaryReceivershipCancellationGazetteDate),
      'temporaryReceivershipCancellationGazetteDay': this.changeNull(selectData.temporaryReceivershipCancellationGazetteDay),
      'temporaryReceivershipCancellationGazetteMonth': this.changeNull(selectData.temporaryReceivershipCancellationGazetteMonth),
      'temporaryReceivershipCancellationGazettepageNumber': this.changeNull(selectData.temporaryReceivershipCancellationGazettepageNumber),
      'temporaryReceivershipCancellationGazetteYear': this.changeNull(selectData.temporaryReceivershipCancellationGazetteYear),
      'temporaryReceivershipCancellationMonth': this.changeNull(selectData.temporaryReceivershipCancellationMonth),
      'temporaryReceivershipCancellationYear': this.changeNull(selectData.temporaryReceivershipCancellationYear),
      'temporaryReceivershipDate': this.changeNull(selectData.temporaryReceivershipDate),
      'temporaryReceivershipDay': this.changeNull(selectData.temporaryReceivershipDay),
      'temporaryReceivershipGazetteBookNumber': this.changeNull(selectData.temporaryReceivershipGazetteBookNumber),
      'temporaryReceivershipGazetteChapterNum': this.changeNull(selectData.temporaryReceivershipGazetteChapterNum),
      'temporaryReceivershipGazetteDate': this.changeNull(selectData.temporaryReceivershipGazetteDate),
      'temporaryReceivershipGazetteDay': this.changeNull(selectData.temporaryReceivershipGazetteDay),
      'temporaryReceivershipGazetteMonth': this.changeNull(selectData.temporaryReceivershipGazetteMonth),
      'temporaryReceivershipGazettePageNumber': this.changeNull(selectData.temporaryReceivershipGazettePageNumber),
      'temporaryReceivershipGazetteYear': this.changeNull(selectData.temporaryReceivershipGazetteYear),
      'temporaryReceivershipMonth': this.changeNull(selectData.temporaryReceivershipMonth),
      'temporaryReceivershipYear': this.changeNull(selectData.temporaryReceivershipYear),
      'writDefendantName': this.changeNull(selectData.writDefendantName),
      'writPlaintiffName': this.changeNull(selectData.writPlaintiffName),

      'wartermarks': this.loadReportDetail(),
      'reportName': this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime,
      'person': {
        'citizenCardNumber': this.changeNull(selectData.defendantId),
        'fullName': this.changeNull(selectData.defendantName) + ' ' + this.changeNull(selectData.defendantSurname),
        'sex': this.changeSex(selectData.sex),
        'dateOfBirth': ''
      },
    };
    this.dataSet = this.ledbankruptcycase;
  }
  setData(selectData: any) {
    this.ledbankruptcycase = {
      'id': this.changeNull(selectData.id),
      'absoluteReceivershipCancellationDate': this.changeNull(selectData.absoluteReceivershipCancellationDate),
      'absoluteReceivershipCancellationDay': this.changeNull(selectData.absoluteReceivershipCancellationDay),
      'absoluteReceivershipCancellationGazetteBookNumber': this.changeNull(selectData.absoluteReceivershipCancellationGazetteBookNumber),
      'absoluteReceivershipCancellationGazetteChapterNum': this.changeNull(selectData.absoluteReceivershipCancellationGazetteChapterNum),
      'absoluteReceivershipCancellationGazetteDate': this.changeNull(selectData.absoluteReceivershipCancellationGazetteDate),
      'absoluteReceivershipCancellationGazetteDay': this.changeNull(selectData.absoluteReceivershipCancellationGazetteDay),
      'absoluteReceivershipCancellationGazetteMonth': this.changeNull(selectData.absoluteReceivershipCancellationGazetteMonth),
      'absoluteReceivershipCancellationGazettePageNumber': this.changeNull(selectData.absoluteReceivershipCancellationGazettePageNumber),
      'absoluteReceivershipCancellationGazetteYear': this.changeNull(selectData.absoluteReceivershipCancellationGazetteYear),
      'absoluteReceivershipCancellationMonth': this.changeNull(selectData.absoluteReceivershipCancellationMonth),
      'absoluteReceivershipCancellationYear': this.changeNull(selectData.absoluteReceivershipCancellationYear),
      'absoluteReceivershipDate': this.changeNull(selectData.absoluteReceivershipDate),
      'absoluteReceivershipDay': this.changeNull(selectData.absoluteReceivershipDay),
      'absoluteReceivershipDebtCollectionRequestdueDate': this.changeNull(selectData.absoluteReceivershipDebtCollectionRequestdueDate),
      'absoluteReceivershipDebtCollectionRequestDueDay': this.changeNull(selectData.absoluteReceivershipDebtCollectionRequestDueDay),
      'absoluteReceivershipDebtCollectionRequestDueMonth': this.changeNull(selectData.absoluteReceivershipDebtCollectionRequestDueMonth),
      'absoluteReceivershipDebtCollectionRequestDueYear': this.changeNull(selectData.absoluteReceivershipDebtCollectionRequestDueYear),
      'absoluteReceivershipDebtCollectionRequestinSpectionDate': this.changeNull(selectData.absoluteReceivershipDebtCollectionRequestinSpectionDate),
      'absoluteReceivershipDebtCollectionRequestinSpectionDay': this.changeNull(selectData.absoluteReceivershipDebtCollectionRequestinSpectionDay),
      'absoluteReceivershipDebtCollectionRequestinSpectionMonth': this.changeNull(selectData.absoluteReceivershipDebtCollectionRequestinSpectionMonth),
      'absoluteReceivershipDebtCollectionRequestinSpectionYear': this.changeNull(selectData.absoluteReceivershipDebtCollectionRequestinSpectionYear),
      'absoluteReceivershipGazetteBookNumber': this.changeNull(selectData.absoluteReceivershipGazetteBookNumber),
      'absoluteReceivershipGazetteChapterNum': this.changeNull(selectData.absoluteReceivershipGazetteChapterNum),
      'absoluteReceivershipGazetteDate': this.changeNull(selectData.absoluteReceivershipGazetteDate),
      'absoluteReceivershipGazetteDay': this.changeNull(selectData.absoluteReceivershipGazetteDay),
      'absoluteReceivershipGazetteMonth': this.changeNull(selectData.absoluteReceivershipGazetteMonth),
      'absoluteReceivershipGazettePageNumber': this.changeNull(selectData.absoluteReceivershipGazettePageNumber),
      'absoluteReceivershipGazetteYear': this.changeNull(selectData.absoluteReceivershipGazetteYear),
      'absoluteReceivershipMonth': this.changeNull(selectData.absoluteReceivershipMonth),
      'absoluteReceivershipYear': this.changeNull(selectData.absoluteReceivershipYear),
      'afterBankruptcyDebtCollectionRequestDueDate': this.changeNull(selectData.afterBankruptcyDebtCollectionRequestDueDate),
      'afterBankruptcyDebtCollectionRequestDueDay': this.changeNull(selectData.afterBankruptcyDebtCollectionRequestDueDay),
      'afterBankruptcyDebtCollectionRequestDueMonth': this.changeNull(selectData.afterBankruptcyDebtCollectionRequestDueMonth),
      'afterBankruptcyDebtCollectionRequestDueYear': this.changeNull(selectData.afterBankruptcyDebtCollectionRequestDueYear),
      'afterBankruptcyDebtCompromisationCancellationDate': this.changeNull(selectData.afterBankruptcyDebtCompromisationCancellationDate),
      'afterBankruptcyDebtCompromisationCancellationDay': this.changeNull(selectData.afterBankruptcyDebtCompromisationCancellationDay),
      'afterBankruptcyDebtCompromisationCancellationGazetteBookNumber': this.changeNull(selectData.afterBankruptcyDebtCompromisationCancellationGazetteBookNumber),
      'afterBankruptcyDebtCompromisationCancellationGazetteChapterNum': this.changeNull(selectData.afterBankruptcyDebtCompromisationCancellationGazetteChapterNum),
      'afterBankruptcyDebtCompromisationCancellationGazetteDate': this.changeNull(selectData.afterBankruptcyDebtCompromisationCancellationGazetteDate),
      'afterBankruptcyDebtCompromisationCancellationGazetteDay': this.changeNull(selectData.afterBankruptcyDebtCompromisationCancellationGazetteDay),
      'afterBankruptcyDebtCompromisationCancellationGazetteMonth': this.changeNull(selectData.afterBankruptcyDebtCompromisationCancellationGazetteMonth),
      'afterBankruptcyDebtCompromisationCancellationGazettePageNumber': this.changeNull(selectData.afterBankruptcyDebtCompromisationCancellationGazettePageNumber),
      'afterBankruptcyDebtCompromisationCancellationGazetteYear': this.changeNull(selectData.afterBankruptcyDebtCompromisationCancellationGazetteYear),
      'afterBankruptcyDebtCompromisationCancellationMonth': this.changeNull(selectData.afterBankruptcyDebtCompromisationCancellationMonth),
      'afterBankruptcyDebtCompromisationCancellationYear': this.changeNull(selectData.afterBankruptcyDebtCompromisationCancellationYear),
      'afterBankruptcyDebtCompromisationDate': this.changeNull(selectData.afterBankruptcyDebtCompromisationDate),
      'afterBankruptcyDebtCompromisationDay': this.changeNull(selectData.afterBankruptcyDebtCompromisationDay),
      'afterBankruptcyDebtCompromisationGazetteBookNumber': this.changeNull(selectData.afterBankruptcyDebtCompromisationGazetteBookNumber),
      'afterBankruptcyDebtCompromisationGazetteChapterNum': this.changeNull(selectData.afterBankruptcyDebtCompromisationGazetteChapterNum),
      'afterBankruptcyDebtCompromisationGazetteDate': this.changeNull(selectData.afterBankruptcyDebtCompromisationGazetteDate),
      'afterBankruptcyDebtCompromisationGazetteDay': this.changeNull(selectData.afterBankruptcyDebtCompromisationGazetteDay),
      'afterBankruptcyDebtCompromisationGazetteMonth': this.changeNull(selectData.afterBankruptcyDebtCompromisationGazetteMonth),
      'afterBankruptcyDebtCompromisationGazettePageNumber': this.changeNull(selectData.afterBankruptcyDebtCompromisationGazettePageNumber),
      'afterBankruptcyDebtCompromisationGazetteYear': this.changeNull(selectData.afterBankruptcyDebtCompromisationGazetteYear),
      'afterBankruptcyDebtCompromisationMonth': this.changeNull(selectData.afterBankruptcyDebtCompromisationMonth),
      'afterBankruptcyDebtCompromisationYear': this.changeNull(selectData.afterBankruptcyDebtCompromisationYear),
      'bankruptcyCancellationDate': this.changeNull(selectData.bankruptcyCancellationDate),
      'bankruptcyCancellationDay': this.changeNull(selectData.bankruptcyCancellationDay),
      'bankruptcyCancellationGazetteBookNumber': this.changeNull(selectData.bankruptcyCancellationGazetteBookNumber),
      'bankruptcyCancellationGazetteChapterNum': this.changeNull(selectData.bankruptcyCancellationGazetteChapterNum),
      'bankruptcyCancellationGazetteDate': this.changeNull(selectData.bankruptcyCancellationGazetteDate),
      'bankruptcyCancellationGazetteDay': this.changeNull(selectData.bankruptcyCancellationGazetteDay),
      'bankruptcyCancellationGazetteMonth': this.changeNull(selectData.bankruptcyCancellationGazetteMonth),
      'bankruptcyCancellationGazettePageNumber': this.changeNull(selectData.bankruptcyCancellationGazettePageNumber),
      'bankruptcyCancellationGazetteYear': this.changeNull(selectData.bankruptcyCancellationGazetteYear),
      'bankruptcyCancellationMonth': this.changeNull(selectData.bankruptcyCancellationMonth),
      'bankruptcyCancellationYear': this.changeNull(selectData.bankruptcyCancellationYear),
      'bankruptcyDischargeDate': this.changeNull(selectData.bankruptcyDischargeDate),
      'bankruptcyDischargeDay': this.changeNull(selectData.bankruptcyDischargeDay),
      'bankruptcyDischargeGazetteBookNumber': this.changeNull(selectData.bankruptcyDischargeGazetteBookNumber),
      'bankruptcyDischargeGazetteChapterNum': this.changeNull(selectData.bankruptcyDischargeGazetteChapterNum),
      'bankruptcyDischargeGazetteDate': this.changeNull(selectData.bankruptcyDischargeGazetteDate),
      'bankruptcyDischargeGazetteDay': this.changeNull(selectData.bankruptcyDischargeGazetteDay),
      'bankruptcyDischargeGazetteMonth': this.changeNull(selectData.bankruptcyDischargeGazetteMonth),
      'bankruptcyDischargeGazettePageNumber': this.changeNull(selectData.bankruptcyDischargeGazettePageNumber),
      'bankruptcyDischargeGazetteYear': this.changeNull(selectData.bankruptcyDischargeGazetteYear),
      'bankruptcyDischargeMonth': this.changeNull(selectData.bankruptcyDischargeMonth),
      'bankruptcyDischargeYear': this.changeNull(selectData.bankruptcyDischargeYear),
      'bankruptcyRulingDate': this.changeNull(selectData.bankruptcyRulingDate),
      'bankruptcyRulingDay': this.changeNull(selectData.bankruptcyRulingDay),
      'bankruptcyRulingGazetteBookNumber': this.changeNull(selectData.bankruptcyRulingGazetteBookNumber),
      'bankruptcyRulingGazetteChapterNum': this.changeNull(selectData.bankruptcyRulingGazetteChapterNum),
      'bankruptcyRulingGazetteDate': this.changeNull(selectData.bankruptcyRulingGazetteDate),
      'bankruptcyRulingGazetteDay': this.changeNull(selectData.bankruptcyRulingGazetteDay),
      'bankruptcyRulingGazetteMonth': this.changeNull(selectData.bankruptcyRulingGazetteMonth),
      'bankruptcyRulingGazettePageNumber': this.changeNull(selectData.bankruptcyRulingGazettePageNumber),
      'bankruptcyRulingGazetteYear': this.changeNull(selectData.bankruptcyRulingGazetteYear),
      'bankruptcyRulingMonth': this.changeNull(selectData.bankruptcyRulingMonth),
      'bankruptcyRulingYear': this.changeNull(selectData.bankruptcyRulingYear),
      'beforeBankruptcyDebtCompromisationCancellationDate': this.changeNull(selectData.beforeBankruptcyDebtCompromisationCancellationDate),
      'beforeBankruptcyDebtCompromisationCancellationDay': this.changeNull(selectData.beforeBankruptcyDebtCompromisationCancellationDay),
      'beforeBankruptcyDebtCompromisationCancellationGazetteBookNumber': this.changeNull(selectData.beforeBankruptcyDebtCompromisationCancellationGazetteBookNumber),
      'beforeBankruptcyDebtCompromisationCancellationGazetteChapterNum': this.changeNull(selectData.beforeBankruptcyDebtCompromisationCancellationGazetteChapterNum),
      'beforeBankruptcyDebtCompromisationCancellationGazetteDate': this.changeNull(selectData.beforeBankruptcyDebtCompromisationCancellationGazetteDate),
      'beforeBankruptcyDebtCompromisationCancellationGazetteDay': this.changeNull(selectData.beforeBankruptcyDebtCompromisationCancellationGazetteDay),
      'beforeBankruptcyDebtCompromisationCancellationGazetteMonth': this.changeNull(selectData.beforeBankruptcyDebtCompromisationCancellationGazetteMonth),
      'beforeBankruptcyDebtCompromisationCancellationGazettePageNumber': this.changeNull(selectData.beforeBankruptcyDebtCompromisationCancellationGazettePageNumber),
      'beforeBankruptcyDebtCompromisationCancellationGazetteYear': this.changeNull(selectData.beforeBankruptcyDebtCompromisationCancellationGazetteYear),
      'beforeBankruptcyDebtCompromisationCancellationMonth': this.changeNull(selectData.beforeBankruptcyDebtCompromisationCancellationMonth),
      'beforeBankruptcyDebtCompromisationCancellationYear': this.changeNull(selectData.beforeBankruptcyDebtCompromisationCancellationYear),
      'beforeBankruptcyDebtCompromisationDate': this.changeNull(selectData.beforeBankruptcyDebtCompromisationDate),
      'beforeBankruptcyDebtCompromisationDay': this.changeNull(selectData.beforeBankruptcyDebtCompromisationDay),
      'beforeBankruptcyDebtCompromisationGazetteBookNumber': this.changeNull(selectData.beforeBankruptcyDebtCompromisationGazetteBookNumber),
      'beforeBankruptcyDebtCompromisationGazetteChapterNum': this.changeNull(selectData.beforeBankruptcyDebtCompromisationGazetteChapterNum),
      'beforeBankruptcyDebtCompromisationGazetteDate': this.changeNull(selectData.beforeBankruptcyDebtCompromisationGazetteDate),
      'beforeBankruptcyDebtCompromisationGazetteDay': this.changeNull(selectData.beforeBankruptcyDebtCompromisationGazetteDay),
      'beforeBankruptcyDebtCompromisationGazetteMonth': this.changeNull(selectData.beforeBankruptcyDebtCompromisationGazetteMonth),
      'beforeBankruptcyDebtCompromisationGazettePageNumber': this.changeNull(selectData.beforeBankruptcyDebtCompromisationGazettePageNumber),
      'beforeBankruptcyDebtCompromisationGazetteYear': this.changeNull(selectData.beforeBankruptcyDebtCompromisationGazetteYear),
      'beforeBankruptcyDebtCompromisationMonth': this.changeNull(selectData.beforeBankruptcyDebtCompromisationMonth),
      'beforeBankruptcyDebtCompromisationYear': this.changeNull(selectData.beforeBankruptcyDebtCompromisationYear),
      'blackCaseNumber': this.changeNull(selectData.blackCaseNumber),
      'blackCaseYear': this.changeNull(selectData.blackCaseYear),
      'caseClosedDate': this.changeNull(selectData.caseClosedDate),
      'caseClosedDay': this.changeNull(selectData.caseClosedDay),
      'caseClosedMonth': this.changeNull(selectData.caseClosedMonth),
      'caseClosedYear': this.changeNull(selectData.caseClosedYear),
      'caseDismissalDate': this.changeNull(selectData.caseDismissalDate),
      'caseDismissalDay': this.changeNull(selectData.caseDismissalDay),
      'caseDismissalMonth': this.changeNull(selectData.caseDismissalMonth),
      'caseDismissalYear': this.changeNull(selectData.caseDismissalYear),
      'caseDispositionDate': this.changeNull(selectData.caseDispositionDate),
      'caseDispositionDay': this.changeNull(selectData.caseDispositionDay),
      'caseDispositionMonth': this.changeNull(selectData.caseDispositionMonth),
      'caseDispositionYear': this.changeNull(selectData.caseDispositionYear),
      'caseInputSequenceNumber': this.changeNull(selectData.caseInputSequenceNumber),
      'courtName': this.changeNull(selectData.courtName),
      'courtOrderedPropertyManagementCancellationDate': this.changeNull(selectData.courtOrderedPropertyManagementCancellationDate),
      'courtOrderedPropertyManagementCancellationDay': this.changeNull(selectData.courtOrderedPropertyManagementCancellationDay),
      'courtOrderedPropertyManagementCancellationMonth': this.changeNull(selectData.courtOrderedPropertyManagementCancellationMonth),
      'courtOrderedPropertyManagementCancellationYear': this.changeNull(selectData.courtOrderedPropertyManagementCancellationYear),
      'courtOrderedPropertyManagementDate': this.changeNull(selectData.courtOrderedPropertyManagementDate),
      'courtOrderedPropertyManagementDay': this.changeNull(selectData.courtOrderedPropertyManagementDay),
      'courtOrderedPropertyManagementMonth': this.changeNull(selectData.courtOrderedPropertyManagementMonth),
      'courtOrderedPropertyManagementYear': this.changeNull(selectData.courtOrderedPropertyManagementYear),
      'defendantAbbriviationName': this.changeNull(selectData.defendantAbbriviationName),
      'defendantId': this.changeNull(selectData.defendantId),
      'defendantName': this.changeNull(selectData.defendantName),
      'defendantOrderNumber': this.changeNull(selectData.defendantOrderNumber),
      'defendantSurname': this.changeNull(selectData.defendantSurname),
      'otherBankruptcyDischargeDate': this.changeNull(selectData.otherBankruptcyDischargeDate),
      'otherBankruptcyDischargeDay': this.changeNull(selectData.otherBankruptcyDischargeDay),
      'otherBankruptcyDischargeMonth': this.changeNull(selectData.otherBankruptcyDischargeMonth),
      'otherBankruptcyDischargeYear': this.changeNull(selectData.otherBankruptcyDischargeYear),
      'prosecutionDate': this.changeNull(selectData.prosecutionDate),
      'prosecutionDay': this.changeNull(selectData.prosecutionDay),
      'prosecutionMonth': this.changeNull(selectData.prosecutionMonth),
      'prosecutionYear': this.changeNull(selectData.prosecutionYear),
      'redCaseNumber': this.changeNull(selectData.redCaseNumber),
      'redCaseYear': this.changeNull(selectData.redCaseYear),
      'remark': this.changeNull(selectData.remark),
      'retrialDate': this.changeNull(selectData.retrialDate),
      'retrialDay': this.changeNull(selectData.retrialDay),
      'retrialMonth': this.changeNull(selectData.retrialMonth),
      'retrialYear': this.changeNull(selectData.retrialYear),
      'temporaryReceivershipCancellationDate': this.changeNull(selectData.temporaryReceivershipCancellationDate),
      'temporaryReceivershipCancellationDay': this.changeNull(selectData.temporaryReceivershipCancellationDay),
      'temporaryReceivershipCancellationGazetteBookNumber': this.changeNull(selectData.temporaryReceivershipCancellationGazetteBookNumber),
      'temporaryReceivershipCancellationGazetteChapterNum': this.changeNull(selectData.temporaryReceivershipCancellationGazetteChapterNum),
      'temporaryReceivershipCancellationGazetteDate': this.changeNull(selectData.temporaryReceivershipCancellationGazetteDate),
      'temporaryReceivershipCancellationGazetteDay': this.changeNull(selectData.temporaryReceivershipCancellationGazetteDay),
      'temporaryReceivershipCancellationGazetteMonth': this.changeNull(selectData.temporaryReceivershipCancellationGazetteMonth),
      'temporaryReceivershipCancellationGazettepageNumber': this.changeNull(selectData.temporaryReceivershipCancellationGazettepageNumber),
      'temporaryReceivershipCancellationGazetteYear': this.changeNull(selectData.temporaryReceivershipCancellationGazetteYear),
      'temporaryReceivershipCancellationMonth': this.changeNull(selectData.temporaryReceivershipCancellationMonth),
      'temporaryReceivershipCancellationYear': this.changeNull(selectData.temporaryReceivershipCancellationYear),
      'temporaryReceivershipDate': this.changeNull(selectData.temporaryReceivershipDate),
      'temporaryReceivershipDay': this.changeNull(selectData.temporaryReceivershipDay),
      'temporaryReceivershipGazetteBookNumber': this.changeNull(selectData.temporaryReceivershipGazetteBookNumber),
      'temporaryReceivershipGazetteChapterNum': this.changeNull(selectData.temporaryReceivershipGazetteChapterNum),
      'temporaryReceivershipGazetteDate': this.changeNull(selectData.temporaryReceivershipGazetteDate),
      'temporaryReceivershipGazetteDay': this.changeNull(selectData.temporaryReceivershipGazetteDay),
      'temporaryReceivershipGazetteMonth': this.changeNull(selectData.temporaryReceivershipGazetteMonth),
      'temporaryReceivershipGazettePageNumber': this.changeNull(selectData.temporaryReceivershipGazettePageNumber),
      'temporaryReceivershipGazetteYear': this.changeNull(selectData.temporaryReceivershipGazetteYear),
      'temporaryReceivershipMonth': this.changeNull(selectData.temporaryReceivershipMonth),
      'temporaryReceivershipYear': this.changeNull(selectData.temporaryReceivershipYear),
      'writDefendantName': this.changeNull(selectData.writDefendantName),
      'writPlaintiffName': this.changeNull(selectData.writPlaintiffName),

      'wartermarks': this.loadReportDetail(),
      'reportName': this.reportName,
      'reportOfDate': this.reportOfDate,
      'reportOfTime': this.reportOfTime,
      'person': {
        'citizenCardNumber': this.changeNull(selectData.defendantId),
        'fullName': this.changeNull(selectData.defendantName) + ' ' + this.changeNull(selectData.defendantSurname),
        'sex': this.changeSex(selectData.sex),
        'dateOfBirth': ''
      },
    };
  }
  getData(): any {
    return this.ledbankruptcycase;
  }
  formatDate(birthDate: string): string {

    const date = new Date(birthDate);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear() + 543;
    if (birthDate === 'null') {
      return '-';
    } else if (birthDate == null) {
      return '-';
    } else {
      const thmonth = new Array('มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
        'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม');
      return `${day} ${thmonth[month]} ${year}`;
    }
  }
  changeSex(sex: string) {
    if (sex == 'MALE') {
      return 'ชาย'
    } else if (sex == 'FEMALE') {
      return 'หญิง'
    } else if (sex == 'OTHER') {
      return 'อื่นๆ'
    } else if (sex == 'null') {
      return '-';
    } else if (sex == null) {
      return '-';
    }
  }

  changeNull(selectData: string) {
    if (selectData === null) {
      return '-';
    }
    if (selectData === 'null') {
      return '-';
    } else if (selectData == 'Invalid date') {
      return '-';
    } else {
      return selectData;
    }
  }

  loadReportDetail() {
    if (localStorage.getItem('reportName') !== null) {
      const reportName = localStorage.getItem('reportName');
      this.reportName = localStorage.getItem('reportName');
      const reportOfDate = moment(new Date().toString()).format('L').toString();
      this.reportOfDate = moment(new Date().toString()).format('L').toString();
      const reportOfTime = moment(new Date().toString()).format('LTS').toString();
      this.reportOfTime = moment(new Date().toString()).format('LTS').toString();
      const reportBarcode = 'QP4015-12345678';
      const wartermarks = `<div class="watermark">
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark2'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark3'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark4'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark5'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark6'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark7'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark8'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark9'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark10'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark11'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>`;
      return wartermarks;
    } else {
      const reportName = 'เกิดข้อผิดพลาด';
      const reportOfDate = moment(new Date().toString()).format('L').toString();
      const reportOfTime = moment(new Date().toString()).format('LTS').toString();
      const reportBarcode = 'QP4015-12345678';
      const wartermarks = `<div class="watermark">
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark2'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark3'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark4'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark5'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark6'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark7'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark8'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark9'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark10'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>
    <div class='watermark11'>
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
      ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
    </div>`;
      return wartermarks;
    }
  }

  /**
   * Getter $dataSet
   * @return {IDxcModelLedBankruptcyCase}
   */
  public get $dataSet(): IDxcModelLedBankruptcyCase {
    return this.dataSet;
  }

  /**
   * Setter $dataSet
   * @param {IDxcModelLedBankruptcyCase} value
   */
  public set $dataSet(value: IDxcModelLedBankruptcyCase) {
    this.dataSet = value;
  }
}
