export const ValidationRules = {
  isEmpty: value => {
    if (typeof value === 'number') {
      return false;
    }
    if (value instanceof Date) {
      return false;
    }
    if (value === true) {
      return false;
    }
    return !(value && value.trim && value.trim());
  },
  isValidEmail: email => /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(email),
  isValidPhone: phone => /^\d{10}$/.test(phone),
  isValidZipCode: zipCode => /^\d{5}$/.test(zipCode),
};

export const ValidationErrorMessages = {
  required: value => ValidationRules.isEmpty(value) ? 'Required': undefined,
  requiredPassword: value => ValidationRules.isEmpty(value) ? 'Please enter your password.' : undefined,
  validEmail: email => ValidationRules.isValidEmail(email) ? undefined : 'Please enter a valid email address.',
  validPhone: phone => ValidationRules.isValidPhone(phone) ? undefined : 'Please enter a valid phone number.',
  zipCode: value => ValidationRules.isValidZipCode(value) ? undefined : 'Please enter a valid zip code.',
  validNPINumber: value => ValidationRules.isValidNPINumber(value) ? undefined : 'Please enter a valid NPI Number.',
  validLicenseNumber: value => ValidationRules.isValidLicenseNumber(value) ? undefined : 'Please enter a valid License Number.',
  validURL: value => ValidationRules.isValidURL(value) ? undefined : 'Please enter a valid URL.',
  validMoney: value => ValidationRules.isValidMoneyFormat(value) ? undefined : 'Please enter a valid value.',
  validDiscount: value => ValidationRules.isValidDiscount(value) ? undefined : 'Please enter a valid discount.',
};
