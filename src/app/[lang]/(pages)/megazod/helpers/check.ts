type CheckProps = {
  value: RegExp
  message: string
}

/**
 * Regex collection to check inputs
 */
const check = {
  number: { value: /([0-9])/, message: 'needNumber' } as CheckProps,
  capitalLetter: {
    value: /([a-z].*[A-Z])|([A-Z].*[a-z])/,
    message: 'needCapitalLetter',
  } as CheckProps,
  specialCharacter: {
    value: /([!,%,&,@,#,$,^,*,?,_,.,;,~,+,-])/,
    message: 'needSpecialCharacter',
  } as CheckProps,
  fullName: {
    value: /^([A-Za-z]{3,}\s)([A-Za-z]{2,}\s)*([A-Za-z]{3,})$/,
    message: 'invalidFullName',
  } as CheckProps,
}

export default check
