/**
 * Regex collection to check inputs
 */
const check = {
  required: (data: string) => !data && 'required',
  email: (data: string) =>
    !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data) && 'invalidEmail',
  number: (data: string) => !/([0-9])/.test(data) && 'needNumber',
  capitalLetter: (data: string) =>
    !/([a-z].*[A-Z])|([A-Z].*[a-z])/.test(data) && 'needCapitalLetter',
  specialCharacter: (data: string) =>
    !/([!,%,&,@,#,$,^,*,?,_,.,;,~,+,-])/.test(data) && 'needSpecialCharacter',
}

export default check
