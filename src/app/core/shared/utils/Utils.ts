export class Utils {
  constructor() { }
  thaiNumber(num) {
    const array = { '1': '๑', '2': '๒', '3': '๓', '4': '๔', '5': '๕', '6': '๖', '7': '๗', '8': '๘', '9': '๙', '0': '๐' };
    let str = num.toString();
    // tslint:disable-next-line:forin
    for (const val in array) {
      str = str.split(val).join(array[val]);
    }
    return str;
  }
}
