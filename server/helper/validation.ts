/**
 * isValidEmail helper method
 * @param {string} email
 * @returns {Boolean} True or False
 */
const isValidEmail = (email: string): boolean => {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
};

const isValidPhoneNumber = (phone: string): boolean => {
  const regEx = /^[0-9]*$/;
  return regEx.test(phone);
};

/**
 * validatePassword helper method
 * @param {string} password
 * @returns {Boolean} True or False
 */
const validatePassword = (password: string): boolean => {
  if (password.length <= 5 || password === "") {
    return false;
  }
  return true;
};

/**
 * validatePassword helper method
 * @param {string} password
 * @returns {Boolean} True or False
 */
const validateUserName = (username: string): boolean => {
  const regEx = /^(?=[a-zA-Z0-9._]{7,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
  return regEx.test(username);
};

/**
 * isEmpty helper method
 * @param {string, integer} input
 * @returns {Boolean} True or False
 */
const isEmpty = (input: string | undefined): boolean => {
  if (input === undefined || input === "") {
    return true;
  }
  if (input.replace(/\s/g, "").length) {
    return false;
  }
  return true;
};

export {
  isValidEmail,
  isValidPhoneNumber,
  validateUserName,
  validatePassword,
  isEmpty,
};
