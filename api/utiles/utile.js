import pkg from 'google-libphonenumber';
const { PhoneNumberUtil } = pkg;

// Validate email format
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate phone format
//It allows only India, USA, or Dubai
export const isValidPhone = (phone) => {
  try {
    const phoneUtil = PhoneNumberUtil.getInstance();
    
    const number = phoneUtil.parseAndKeepRawInput(phone, 'IN');
    const isValid = phoneUtil.isValidNumber(number);

    if(isValid){
      return true
    }
  } catch (error) {
    return false;
  }
};

// Validate Password format
export const isValidPassword = (password) => {
  return password.length >= 8;
};