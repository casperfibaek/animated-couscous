export default function (array, object) {
  const obj = Object.entries(object);
  const key = obj[0][0];
  const value = obj[0][1];

  let found;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i][key] === value) {
      found = array[i]; break;
    }
  }

  return found;
}
