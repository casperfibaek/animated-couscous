function leftPad(int) {
  if (!Number.isNaN(int) && Number(int) < 10) {
    return `0${int}`;
  }
  return String(int);
}

export default function parseDate(str) {
  if (str === null || str === 'null') { return 'NA'; }

  const parsed = new Date(str);

  const hours = leftPad(parsed.getHours());
  const minutes = leftPad(parsed.getMinutes());
  const days = leftPad(parsed.getDay() + 1);
  const months = leftPad(parsed.getMonth() + 1);
  const year = leftPad(parsed.getFullYear());

  return `${year}/${months}/${days}-${hours}:${minutes}`;
}
