export function formatDate(date: string) {
  if (date == undefined) {
    return "";
  }

  const parts = date.split("-");
  const day = parts[2];
  const month = parts[1];
  const year = parts[0];
  return `${day}-${month}-${year}`;
}

export function formatZIPCode(zipCode: string) {
  const formattedZIPCode = zipCode.replace(/^(\d{5})(\d{3})$/, "$1-$2");
  return formattedZIPCode.toString();
}

export function formatDateString(dateString: string) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();

  return `${day}-${month}-${year}`;
}
