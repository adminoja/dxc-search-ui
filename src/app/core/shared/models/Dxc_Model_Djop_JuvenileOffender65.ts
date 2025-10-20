import * as moment from 'moment'
export interface IPerson {
    citizenCardNumber: string;
    fullName: string;
    sex: string;
    dateOfBirth: Date;
}

export interface IDxc_Model_Djop_JuvenileOffender65 {
    cmstJuvenileRef: string
    jvnId: string
    jvnCardId: string
    jvnTitleName: string
    jvnFname: string
    jvnLname: string
    jvnBirthDate: string
    jvnSex: string
    jvnStatus: string
    jvnNickName: string
    jvnNumberChild: string
    jvnNumberBroSis: string
    jvnHisEduflag: string
    jvnEduStatus: string
    eduCation: string
    eduStatusAcademy: string
    jvnNationName: string
    jvnRaceName: string
    jvnReligionName: string
    jvnOccupationStatus: string
    jvnOccupationStatusName: any
    jvnOccupationName: any
    jvnHouseNo: string
    jvnLiveHouseNo: any
    jvnLiveProvince: any
    jvnLineName: string
    liveRelationName: any
    liveRelationCode: any
    createDate: string
    updateDate: any
    caseDetailList: {
        cmstCaseMainRef: string
        cmstJuvenileRef: string
        occurAddress: any
        occurAmpCode: string
        occurProvCode: string
        occurAmpName: string
        occurProvName: string
        catchDate: string
        policeDocId: string
        policeStationCode: string
        policeStationName: string
        judgmentDate: string
        allegationCode: string
        allegationName: string
        offenseCode: string
        offenseName: string
        blackCaseNum: string
        redCaseNum: string
        courtCord: any
        courtName: string
        caseNo: string
        caseYear: string
        receiveDate: string
        courtDocument: string
        policeDocDate: string
        rn635Count: string
        rn532Status: string
        drugName: any
        rn640Status: string
        rn46Chk: any
        rn47Chk: any
        truthDocumentStatus: string
        truthDocumentDate: string
        unitId: string
        unitAbbName: string
        practicePlace: string
        penaltyDesc: string
        informStatus: string
        practicePlaceName: string
        practiceProvCode: string
        practiceProvName: string
        deliveryDate: string
        evenJvnAge: string
        groupName: string
        groupId: string
        wordName: string
        caseStatusName: string
        controlStatus: string
        registerDate: string
        exitFlag: string
        exitDate: any
        occurDateStart: string
        occurDateEnd: string
    }[]
    juvenileRelativeDetailResponseList: {
        cmstJuvenileRef: string
        cmstJvnParentRef: string
        fatherTitleName: string
        fatherFname: string
        fatherLname: string
        fatherHouseNo: string
        motherTitleName: string
        motherFname: string
        motherLname: string
        motherHouseNo: string
        rulerTitleName: string
        rulerFname: string
        rulerLname: string
        rulerHouseNo: string
        rulerTelNo: any
        rulerOccupation: string
        rulerIncome: string
        rulerUIncome: any
        faMoStatus1: any
        faMoStatus2: any
        faMoStatus3: any
        faMoStatus4: any
        faMoStatus5: string
        faMoStatus6: any
        faMoStatus7: any
        faMoStatus8: any
        faMoStatus9: any
        faMoStatus10: string
        faMoStatus11: any
        faMoStatus12: any
        faOccuStatus: string
        faSalaryTot: string
        maOccuStatus: any
        maSalaryTot: any
        relativeStatus1: string
        offenseRecFamFlag: string
    }[]
    dataUpdateDateTimeFrom: string;
    dataUpdateDateTimeTo: string;
    importDateTime: string;

    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    reportBarcode: string;
    wartermarks: string;
    person: IPerson;
}

export class Dxc_Model_Djop_JuvenileOffender65 {
    djopJuvenileOffender65: any;
    reportName: string;
    reportOfDate: string;
    reportOfTime: string;
    reportBarcode: string;
    wartermarks: string;
    caseLists: any = [];
    caseListsSingleReport: any = [];
    relativeLists: any = [];
    relativeListsSingleReport: any = [];
    private dataSet: IDxc_Model_Djop_JuvenileOffender65;
    constructor(selectData: any) {
      console.log(selectData)
      console.log(selectData)
        if(selectData.caseDetailList) {
            selectData.caseDetailList.forEach(element => {
                this.caseLists.push(
                    {
                      cmstCaseMainRef: this.changeNull(element.cmstCaseMainRef),
                      cmstJuvenileRef: this.changeNull(element.cmstJuvenileRef),
                      occurAddress: this.changeNull(element.occurAddress),
                      occurAmpCode: this.changeNull(element.occurAmpCode),
                      occurProvCode: this.changeNull(element.occurProvCode),
                      occurAmpName: this.changeNull(element.occurAmpName),
                      occurProvName: this.changeNull(element.occurProvName),
                      catchDate: this.changeNull(element.catchDate),
                      policeDocId: this.changeNull(element.policeDocId),
                      policeStationCode: this.changeNull(element.policeStationCode),
                      policeStationName: this.changeNull(element.policeStationName),
                      judgmentDate: this.changeNull(element.judgmentDate),
                      allegationCode: this.changeNull(element.allegationCode),
                      allegationName: this.changeNull(element.allegationName),
                      offenseCode: this.changeNull(element.offenseCode),
                      offenseName: this.changeNull(element.offenseName),
                      blackCaseNum: this.changeNull(element.blackCaseNum),
                      redCaseNum: this.changeNull(element.redCaseNum),
                      courtCord: this.changeNull(element.courtCord),
                      courtName: this.changeNull(element.courtName),
                      caseNo: this.changeNull(element.caseNo),
                      caseYear: this.changeNull(element.caseYear),
                      receiveDate: this.changeNull(element.receiveDate),
                      courtDocument: this.changeNull(element.courtDocument),
                      policeDocDate: this.changeNull(element.policeDocDate),
                      rn635Count: this.changeNull(element.rn635Count),
                      rn532Status: this.changeNull(element.rn532Status),
                      drugName: this.changeNull(element.drugName),
                      rn640Status: this.changeNull(element.rn640Status),
                      rn46Chk: this.changeNull(element.rn46Chk),
                      rn47Chk: this.changeNull(element.rn47Chk),
                      truthDocumentStatus: this.changeNull(element.truthDocumentStatus),
                      truthDocumentDate: this.changeNull(element.truthDocumentDate),
                      unitId: this.changeNull(element.unitId),
                      unitAbbName: this.changeNull(element.unitAbbName),
                      practicePlace: this.changeNull(element.practicePlace),
                      penaltyDesc: this.changeNull(element.penaltyDesc),
                      informStatus: this.changeNull(element.informStatus),
                      practicePlaceName: this.changeNull(element.practicePlaceName),
                      practiceProvCode: this.changeNull(element.practiceProvCode),
                      practiceProvName: this.changeNull(element.practiceProvName),
                      deliveryDate: this.changeNull(element.deliveryDate),
                      evenJvnAge: this.changeNull(element.evenJvnAge),
                      groupName: this.changeNull(element.groupName),
                      groupId: this.changeNull(element.groupId),
                      wordName: this.changeNull(element.wordName),
                      caseStatusName: this.changeNull(element.caseStatusName),
                      controlStatus: this.changeNull(element.controlStatus),
                      registerDate: this.changeNull(element.registerDate),
                      exitFlag: this.changeNull(element.exitFlag),
                      exitDate: this.changeNull(element.exitDate),
                      occurDateStart: this.changeNull(element.occurDateStart),
                      occurDateEnd: this.changeNull(element.occurDateEnd),
                    }
                );
                this.caseListsSingleReport.push(
                  {
                    cmstCaseMainRef: this.changeNull(element.cmstCaseMainRef),
                    cmstJuvenileRef: this.changeNull(element.cmstJuvenileRef),
                    occurAddress: this.changeNull(element.occurAddress),
                    occurAmpCode: this.changeNull(element.occurAmpCode),
                    occurProvCode: this.changeNull(element.occurProvCode),
                    occurAmpName: this.changeNull(element.occurAmpName),
                    occurProvName: this.changeNull(element.occurProvName),
                    catchDate: this.changeNull(element.catchDate),
                    policeDocId: this.changeNull(element.policeDocId),
                    policeStationCode: this.changeNull(element.policeStationCode),
                    policeStationName: this.changeNull(element.policeStationName),
                    judgmentDate: this.changeNull(element.judgmentDate),
                    allegationCode: this.changeNull(element.allegationCode),
                    allegationName: this.changeNull(element.allegationName),
                    offenseCode: this.changeNull(element.offenseCode),
                    offenseName: this.changeNull(element.offenseName),
                    blackCaseNum: this.changeNull(element.blackCaseNum),
                    redCaseNum: this.changeNull(element.redCaseNum),
                    courtCord: this.changeNull(element.courtCord),
                    courtName: this.changeNull(element.courtName),
                    caseNo: this.changeNull(element.caseNo),
                    caseYear: this.changeNull(element.caseYear),
                    receiveDate: this.changeNull(element.receiveDate),
                    courtDocument: this.changeNull(element.courtDocument),
                    policeDocDate: this.changeNull(element.policeDocDate),
                    rn635Count: this.changeNull(element.rn635Count),
                    rn532Status: this.changeNull(element.rn532Status),
                    drugName: this.changeNull(element.drugName),
                    rn640Status: this.changeNull(element.rn640Status),
                    rn46Chk: this.changeNull(element.rn46Chk),
                    rn47Chk: this.changeNull(element.rn47Chk),
                    truthDocumentStatus: this.changeNull(element.truthDocumentStatus),
                    truthDocumentDate: this.changeNull(element.truthDocumentDate),
                    unitId: this.changeNull(element.unitId),
                    unitAbbName: this.changeNull(element.unitAbbName),
                    practicePlace: this.changeNull(element.practicePlace),
                    penaltyDesc: this.changeNull(element.penaltyDesc),
                    informStatus: this.changeNull(element.informStatus),
                    practicePlaceName: this.changeNull(element.practicePlaceName),
                    practiceProvCode: this.changeNull(element.practiceProvCode),
                    practiceProvName: this.changeNull(element.practiceProvName),
                    deliveryDate: this.changeNull(element.deliveryDate),
                    evenJvnAge: this.changeNull(element.evenJvnAge),
                    groupName: this.changeNull(element.groupName),
                    groupId: this.changeNull(element.groupId),
                    wordName: this.changeNull(element.wordName),
                    caseStatusName: this.changeNull(element.caseStatusName),
                    controlStatus: this.changeNull(element.controlStatus),
                    registerDate: this.changeNull(element.registerDate),
                    exitFlag: this.changeNull(element.exitFlag),
                    exitDate: this.changeNull(element.exitDate),
                    occurDateStart: this.changeNull(element.occurDateStart),
                    occurDateEnd: this.changeNull(element.occurDateEnd),
                  }
              );
            });
        } 

        if(selectData.juvenileRelativeDetailResponseList) {
            selectData.juvenileRelativeDetailResponseList.forEach(element => {
                this.relativeLists.push(
                    {
                        cmstJuvenileRef: this.changeNull(element.cmstJuvenileRef),
                        cmstJvnParentRef: this.changeNull(element.cmstJvnParentRef),
                        fatherTitleName: this.changeNull(element.fatherTitleName),
                        fatherFname: this.changeNull(element.fatherFname),
                        fatherLname: this.changeNull(element.fatherLname),
                        fatherHouseNo: this.changeNull(element.fatherHouseNo),
                        motherTitleName: this.changeNull(element.motherTitleName),
                        motherFname: this.changeNull(element.motherFname),
                        motherLname: this.changeNull(element.motherLname),
                        motherHouseNo: this.changeNull(element.motherHouseNo),
                        rulerTitleName: this.changeNull(element.rulerTitleName),
                        rulerFname: this.changeNull(element.rulerFname),
                        rulerLname: this.changeNull(element.rulerLname),
                        rulerHouseNo: this.changeNull(element.rulerHouseNo),
                        rulerTelNo: this.changeNull(element.rulerTelNo),
                        rulerOccupation: this.changeNull(element.rulerOccupation),
                        rulerIncome: this.changeNull(element.rulerIncome),
                        rulerUIncome: this.changeNull(element.rulerUIncome),
                        faMoStatus1: this.changeNull(element.faMoStatus1),
                        faMoStatus2: this.changeNull(element.faMoStatus2),
                        faMoStatus3: this.changeNull(element.faMoStatus3),
                        faMoStatus4: this.changeNull(element.faMoStatus4),
                        faMoStatus5: this.changeNull(element.faMoStatus5),
                        faMoStatus6: this.changeNull(element.faMoStatus6),
                        faMoStatus7: this.changeNull(element.faMoStatus7),
                        faMoStatus8: this.changeNull(element.faMoStatus8),
                        faMoStatus9: this.changeNull(element.faMoStatus9),
                        faMoStatus10: this.changeNull(element.faMoStatus10),
                        faMoStatus11: this.changeNull(element.faMoStatus11),
                        faMoStatus12: this.changeNull(element.faMoStatus12),
                        faOccuStatus: this.changeNull(element.faOccuStatus),
                        faSalaryTot: this.changeNull(element.faSalaryTot),
                        maOccuStatus: this.changeNull(element.maOccuStatus),
                        maSalaryTot: this.changeNull(element.maSalaryTot),
                        relativeStatus1: this.changeNull(element.relativeStatus1),
                        offenseRecFamFlag: this.changeNull(element.offenseRecFamFlag),
                        occurDateStart: this.changeNull(element.occurDateStart),
                        occurDateEnd: this.changeNull(element.occurDateEnd),
                        
                    }
                );
                this.relativeListsSingleReport.push(
                    {
                      cmstJuvenileRef: this.changeNull(element.cmstJuvenileRef),
                      cmstJvnParentRef: this.changeNull(element.cmstJvnParentRef),
                      fatherTitleName: this.changeNull(element.fatherTitleName),
                      fatherFname: this.changeNull(element.fatherFname),
                      fatherLname: this.changeNull(element.fatherLname),
                      fatherHouseNo: this.changeNull(element.fatherHouseNo),
                      motherTitleName: this.changeNull(element.motherTitleName),
                      motherFname: this.changeNull(element.motherFname),
                      motherLname: this.changeNull(element.motherLname),
                      motherHouseNo: this.changeNull(element.motherHouseNo),
                      rulerTitleName: this.changeNull(element.rulerTitleName),
                      rulerFname: this.changeNull(element.rulerFname),
                      rulerLname: this.changeNull(element.rulerLname),
                      rulerHouseNo: this.changeNull(element.rulerHouseNo),
                      rulerTelNo: this.changeNull(element.rulerTelNo),
                      rulerOccupation: this.changeNull(element.rulerOccupation),
                      rulerIncome: this.changeNull(element.rulerIncome),
                      rulerUIncome: this.changeNull(element.rulerUIncome),
                      faMoStatus1: this.changeNull(element.faMoStatus1),
                      faMoStatus2: this.changeNull(element.faMoStatus2),
                      faMoStatus3: this.changeNull(element.faMoStatus3),
                      faMoStatus4: this.changeNull(element.faMoStatus4),
                      faMoStatus5: this.changeNull(element.faMoStatus5),
                      faMoStatus6: this.changeNull(element.faMoStatus6),
                      faMoStatus7: this.changeNull(element.faMoStatus7),
                      faMoStatus8: this.changeNull(element.faMoStatus8),
                      faMoStatus9: this.changeNull(element.faMoStatus9),
                      faMoStatus10: this.changeNull(element.faMoStatus10),
                      faMoStatus11: this.changeNull(element.faMoStatus11),
                      faMoStatus12: this.changeNull(element.faMoStatus12),
                      faOccuStatus: this.changeNull(element.faOccuStatus),
                      faSalaryTot: this.changeNull(element.faSalaryTot),
                      maOccuStatus: this.changeNull(element.maOccuStatus),
                      maSalaryTot: this.changeNull(element.maSalaryTot),
                      relativeStatus1: this.changeNull(element.relativeStatus1),
                      offenseRecFamFlag: this.changeNull(element.offenseRecFamFlag),
                    }
                );
            })
        } 
        // else {
        //     this.relativeLists.push(
        //         {
        //             dataId: '-',
        //             cmstJuvenileRef: '-',
        //             cmstJvnParentRef: '-',
        //             fatherTitleName: '-',
        //             fatherFname: '-',
        //             fatherLname: '-',
        //             fatherHouseNo: '-',
        //             motherTitleName: '-',
        //             motherFname: '-',
        //             motherLname: '-',
        //             motherHouseNo: '-',
        //             rulerTitleName: '-',
        //             rulerFname: '-',
        //             rulerLname: '-',
        //             rulerHouseNo: '-',
        //             rulerTelNo: '-',
        //             rulerOccupation: '-',
        //             rulerIncome: '-',
        //             rulerUIncome: '-',
        //             faMoStatus1: '-',
        //             faMoStatus2: '-',
        //             faMoStatus3: '-',
        //             faMoStatus4: '-',
        //             faMoStatus5: '-',
        //             faMoStatus6: '-',
        //             faMoStatus7: '-',
        //             faMoStatus8: '-',
        //             faMoStatus9: '-',
        //             faMoStatus10: '-',
        //             faMoStatus11: '-',
        //             faMoStatus12: '-',
        //             faOccuStatus: '-',
        //             faSalaryTot: '-',
        //             maOccuStatus: '-',
        //             maSalaryTot: '-',
        //             relativeStatus1: '-',
        //             offenseRecFamFlag: '-',
        //             dataUpdateDateTimeFrom: '-',
        //             dataUpdateDateTimeTo: '-',
        //             importDateTime: '-'
        //         }
        //     );
        // }
        

        this.djopJuvenileOffender65 = {

            'cmstJuvenileRef': this.changeNull(selectData.cmstJuvenileRef),
            'jvnId': this.changeNull(selectData.jvnId),
            'jvnCardId': this.changeNull(selectData.jvnCardId),
            'jvnTitleName': this.changeNull(selectData.jvnTitleName),
            'jvnFname': this.changeNull(selectData.jvnFname),
            'jvnLname': this.changeNull(selectData.jvnLname),
            'jvnBirthDate': this.changeNull(selectData.jvnBirthDate),
            'jvnSex': this.changeNull(selectData.jvnSex),
            'jvnStatus': this.changeNull(selectData.jvnStatus),
            'jvnNickName': this.changeNull(selectData.jvnNickName),
            'jvnNumberChild': this.changeNull(selectData.jvnNumberChild),
            'jvnNumberBroSis': this.changeNull(selectData.jvnNumberBroSis),
            'jvnHisEduflag': this.changeNull(selectData.jvnHisEduflag),
            'jvnEduStatus': this.changeNull(selectData.jvnEduStatus),
            'eduCation': this.changeNull(selectData.eduCation),
            'eduStatusAcademy': this.changeNull(selectData.eduStatusAcademy),
            'jvnNationName': this.changeNull(selectData.jvnNationName),
            'jvnRaceName': this.changeNull(selectData.jvnRaceName),
            'jvnReligionName': this.changeNull(selectData.jvnReligionName),
            'jvnOccupationStatus': this.changeNull(selectData.jvnOccupationStatus),
            'jvnOccupationStatusName': this.changeNull(selectData.jvnOccupationStatusName),
            'jvnOccupationName': this.changeNull(selectData.jvnOccupationName),
            'jvnHouseNo': this.changeNull(selectData.jvnHouseNo),
            'jvnLiveHouseNo': this.changeNull(selectData.jvnLiveHouseNo),
            'jvnLiveProvince': this.changeNull(selectData.jvnLiveProvince),
            'jvnLineName': this.changeNull(selectData.jvnLineName),
            'liveRelationName': this.changeNull(selectData.liveRelationName),
            'liveRelationCode': this.changeNull(selectData.liveRelationCode),
            'createDate': this.changeNull(selectData.createDate),
            'updateDate': this.changeNull(selectData.updateDate),
            'caseDetailList': this.caseLists,
            'juvenileRelativeDetailResponseList': this.relativeLists,
            'person': {
                'citizenCardNumber': this.changeNull(selectData.jvnCardId),
                'fullName': this.changeNull(selectData.jvnFname) + ' ' + this.changeNull(selectData.jvnLname),
                'sex': selectData.jvnSex,
                'dateOfBirth': this.changeNull(selectData.jvnBirthDate),
            },
            'wartermarks': this.loadReportDetail(),
            'reportName': this.reportName,
            'reportOfDate': this.reportOfDate,
            'reportOfTime': this.reportOfTime,
            'reportBarcode': this.reportBarcode
        }
        this.dataSet = this.djopJuvenileOffender65;
    }

    setData(selectData: any) {
        this.djopJuvenileOffender65 = {
          'cmstJuvenileRef': this.changeNull(selectData.cmstJuvenileRef),
          'jvnId': this.changeNull(selectData.jvnId),
          'jvnCardId': this.changeNull(selectData.jvnCardId),
          'jvnTitleName': this.changeNull(selectData.jvnTitleName),
          'jvnFname': this.changeNull(selectData.jvnFname),
          'jvnLname': this.changeNull(selectData.jvnLname),
          'jvnBirthDate': this.changeNull(selectData.jvnBirthDate),
          'jvnSex': this.changeNull(selectData.jvnSex),
          'jvnStatus': this.changeNull(selectData.jvnStatus),
          'jvnNickName': this.changeNull(selectData.jvnNickName),
          'jvnNumberChild': this.changeNull(selectData.jvnNumberChild),
          'jvnNumberBroSis': this.changeNull(selectData.jvnNumberBroSis),
          'jvnHisEduflag': this.changeNull(selectData.jvnHisEduflag),
          'jvnEduStatus': this.changeNull(selectData.jvnEduStatus),
          'eduCation': this.changeNull(selectData.eduCation),
          'eduStatusAcademy': this.changeNull(selectData.eduStatusAcademy),
          'jvnNationName': this.changeNull(selectData.jvnNationName),
          'jvnRaceName': this.changeNull(selectData.jvnRaceName),
          'jvnReligionName': this.changeNull(selectData.jvnReligionName),
          'jvnOccupationStatus': this.changeNull(selectData.jvnOccupationStatus),
          'jvnOccupationStatusName': this.changeNull(selectData.jvnOccupationStatusName),
          'jvnOccupationName': this.changeNull(selectData.jvnOccupationName),
          'jvnHouseNo': this.changeNull(selectData.jvnHouseNo),
          'jvnLiveHouseNo': this.changeNull(selectData.jvnLiveHouseNo),
          'jvnLiveProvince': this.changeNull(selectData.jvnLiveProvince),
          'jvnLineName': this.changeNull(selectData.jvnLineName),
          'liveRelationName': this.changeNull(selectData.liveRelationName),
          'liveRelationCode': this.changeNull(selectData.liveRelationCode),
          'createDate': this.changeNull(selectData.createDate),
          'updateDate': this.changeNull(selectData.updateDate),
          'caseDetailList': this.caseLists,
          'juvenileRelativeDetailResponseList': this.relativeLists,
          'person': {
              'citizenCardNumber': this.changeNull(selectData.jvnCardId),
                  'fullName': this.changeNull(selectData.jvnFname) + ' ' + this.changeNull(selectData.jvnLname),
                  'sex': selectData.jvnSex,
                  'dateOfBirth': this.changeNull(selectData.jvnBirthDate),
              },
          'wartermarks': this.loadReportDetail(),
          'reportName': this.reportName,
          'reportOfDate': this.reportOfDate,
          'reportOfTime': this.reportOfTime,
          'reportBarcode': this.reportBarcode
        }
    }

    getData(): any {
        return this.djopJuvenileOffender65;
    }

    changeJvnStatus(jvnStatus: string) {
        if(jvnStatus === '1') {
            return 'โสด';
        } else if(jvnStatus === '2') {
            return 'มีคู่ครอง';
        } else if(jvnStatus === null || jvnStatus === 'null') {
            return '-';
        }
    }

    changeJvnHisEduFlag(jvnHisEduFlag: string) {
        if(jvnHisEduFlag === 'N') {
            return 'ไม่เคยศึกษาเล่าเรียน';
        } else if(jvnHisEduFlag === 'Y') {
            return 'ศึกษาเล่าเรียน';
        } else if(jvnHisEduFlag === null || jvnHisEduFlag === 'null') {
            return '-';
        }
    }

    changeJvnOccupationStatus(jvnOccupationStatus: string) {
        if(jvnOccupationStatus === '1') {
            return 'เป็นกิจจะลักษณะ';
        } else if(jvnOccupationStatus === '2') {
            return 'ไม่เป็นกิจจะลักษณะ';
        } else if(jvnOccupationStatus === '3') {
            return 'ว่างงาน';
        } else if(jvnOccupationStatus === '4') {
            return 'นักเรียน/ผู้ฝึกงาน';
        } else if(jvnOccupationStatus === '5') {
            return 'เกษียณ/พิการ';
        } else if(jvnOccupationStatus === '6') {
            return 'ไม่ทราบข้อมูล';
        } else if(jvnOccupationStatus === null || jvnOccupationStatus === 'null') {
            return '-';
        }
    }

    changeRelativeStatus1(relativeStatus1: string) {
        if(relativeStatus1 === '1') {
            return 'อาศัยกับบิดามารดา';
        } else if(relativeStatus1 === '2') {
            return 'อาศัยกับผู้ปกครองทีไม่ใช่บิดามารดา';
        } else if(relativeStatus1 === null || relativeStatus1 === 'null') {
            return '-';
        }
    }

    changeOffenseRecFamFlag(offenseRecFamFlag: string) {
        if(offenseRecFamFlag === 'Y') {
            return 'มี';
        } else if(offenseRecFamFlag === 'N') {
            return 'ไม่มี';
        } else if(offenseRecFamFlag === null || offenseRecFamFlag === 'null') {
            return '-';
        }
    }

    changeInformStatus(informStatus: string) {
        if(informStatus === 'I') {
            return 'จับกุม';
        } else if(informStatus === 'O') {
            return 'แจ้งข้อกล่าวหา';
        } else if(informStatus === null || informStatus === 'null') {
            return '-';
        }
    }

    changeTruthDocumentStatus(truthDocumentStatus: string) {
        if(truthDocumentStatus === 'Y') {
            return 'ส่งรายงานข้อเท็จจริง';
        } else if(truthDocumentStatus === null || truthDocumentStatus === 'null') {
            return 'ยังไม่ได้ส่ง';
        }
    }

    changeControlStatus(controlStatus: string) {
        if(controlStatus === 'Y') {
            return 'ควบคุมตัว';
        } else if(controlStatus === 'N') {
            return 'ประกันตัว';
        } else if(controlStatus === 'K') {
            return 'ไม่ควบคุมตัว';
        } else if(controlStatus === null || controlStatus === 'null') {
            return '-';
        }
    }

    changeRn640Status(rn640Status: string) {
      if(rn640Status === 'Y') {
          return 'มี';
      } else if(rn640Status === null || rn640Status === 'null') {
          return 'ไม่มี';
      }

    }

    changeSex(sex: string) {
        if (sex === 'MALE' || sex === 'M' || sex === 'M     ') {
          return 'ชาย';
        } else if (sex === 'FEMALE' || sex === 'F' || sex == 'F     ') {
          return 'หญิง';
        } else if (sex === 'OTHER') {
          return 'อื่นๆ';
        } else if (sex === null || sex === 'null') {
          return '-';
        }
    }
    
    changeNull(selectData: string) {
        if (selectData == null || selectData == 'null') {
          return '-';
        } else {
          return selectData;
        }
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
          <div class="watermark2">
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark3">
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark4">
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark5">
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark6">
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark7">
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark8">
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark9">
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark10">
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark11">
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>`;
          return wartermarks;
        }else{
          const reportName = 'เกิดข้อผิดพลาด';
          const reportOfDate = moment(new Date().toString()).format('L').toString();
          const reportOfTime = moment(new Date().toString()).format('LTS').toString();
          const reportBarcode = 'QP4015-12345678';
          const wartermarks = `<div class="watermark">
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark2">
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark3">
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark4">
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark5">
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark6">
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark7">
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark8">
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark9">
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark10">
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>
          <div class="watermark11">
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
            ผู้พิมพ์รายงาน ${reportName} ${reportOfDate} ${reportOfTime} เลขที่เอกสาร ${reportBarcode} www.dxc.go.th
          </div>`;
          return wartermarks;
        }
    }

      /**
   * Getter $dataSet
   * @return {IDxc_Model_Djop_JuvenileOffender65}
   */
  public get $dataSet(): IDxc_Model_Djop_JuvenileOffender65 {
    return this.dataSet;
  }

  /**
   * Setter $dataSet
   * @param {IDxc_Model_Djop_JuvenileOffender65} value
   */
  public set $dataSet(value: IDxc_Model_Djop_JuvenileOffender65) {
    this.dataSet = value;
  }
}

