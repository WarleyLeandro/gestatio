const formatPhoneNumber = (phoneNumber: string) => {
  const cleaned = phoneNumber.replace(/\D/g, "");

  let formattedPhoneNumber = cleaned;

  if (formattedPhoneNumber.length > 0) {
    formattedPhoneNumber = "(" + formattedPhoneNumber;
  }
  if (formattedPhoneNumber.length > 3) {
    formattedPhoneNumber =
      formattedPhoneNumber.slice(0, 3) + ") " + formattedPhoneNumber.slice(3);
  }
  if (formattedPhoneNumber.length < 14) {
    formattedPhoneNumber =
      formattedPhoneNumber.slice(0, 9) +
      "-" +
      formattedPhoneNumber.slice(9, 14);
  }

  if (formattedPhoneNumber.length >= 14) {
    formattedPhoneNumber =
      formattedPhoneNumber.slice(0, 6) +
      " " +
      formattedPhoneNumber.slice(6, 10) +
      "-" +
      formattedPhoneNumber.slice(10, 15);
  }

  return formattedPhoneNumber;
};

export default formatPhoneNumber;
