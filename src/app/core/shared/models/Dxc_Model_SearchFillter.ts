export interface IDxcModelSearchFillter {
   citizenCardNumber: string;
   firstName: string;
   lastname: string;
   licenseNumber: string;
  // public province:string
   prisoner: string;
   casename: string;
   dataSetId: string;
}
export class Dxc_Model_SearchFillter {
  constructor(
    public citizenCardNumber: string = '',
    public firstName: string,
    public lastname: string,
    public licenseNumber: string,
    // public province:string
    public prisoner: string,
    public casename: string,
    public dataSetId: string,
  ) { }

}
