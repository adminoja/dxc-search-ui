export class Dateexpire {
    private _registerstring:string; //วันที่ลงทะเบียน Activate
    private _Todaystring:string; //วันที่ปัจจุบัน
    private _exprstring:string; //วันที่หมดอายุ
    private _countOfUseDay:number; //จำนวนวันที่ใช้งาน
    private _countOfExpireDay:number; //จำนวนวันที่หมดอายุ

    /**
     * Cal DateExpire
     * @return {number}
     */

	constructor(registerstring: string, exprstring: string) {
		this._registerstring = registerstring;
		this._exprstring = exprstring;
	}
  
    public calulaterExpireDay(){
        var _regisDate = Date.parse(this._registerstring)/1000;
        var _expireDate = Date.parse(this._exprstring)/1000;
        var diff=(_expireDate - _regisDate)/(60*60*24);
        this._countOfExpireDay=diff;
    }

    /**
     * Getter countOfExpireDay
     * @return {number}
     */
	public get countOfExpireDay(): number {
		return this._countOfExpireDay;
	}

    /**
     * Setter countOfExpireDay
     * @param {number} value
     */
	public set countOfExpireDay(value: number) {
		this._countOfExpireDay = value;
	}

}