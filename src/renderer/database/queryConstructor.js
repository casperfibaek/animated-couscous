function createTable(tableName, obj) {
  let columns = '';

  Object.entries(obj)
    .forEach((arr) => {
      columns += `${arr[0]} ${arr[1]}, `;
    });

  return `CREATE TABLE ${tableName} (${columns.slice(0, -2)});`;
}

function insertInto(tableName, obj) {
  let columns = '';
  let values = '';

  Object.entries(obj).forEach((arr) => {
    columns += `"${arr[0]}", `;
    if (Number.isInteger(arr[1])) {
      values += `${arr[1]}, `;
    } else {
      values += `"${arr[1]}", `;
    }
  });

  return `INSERT INTO ${tableName} (${columns.slice(0, -2)}) VALUES (${values.slice(0, -2)})`;
}

function selectEntry(tableName, obj) {
  let selection = '';

  Object.entries(obj).forEach((arr) => {
    selection += `${arr[0]} = `;

    if (Number.isInteger(arr[1])) {
      selection += `${arr[1]} AND `;
    } else {
      selection += `"${arr[1]}" AND `;
    }
  });

  return `SELECT * FROM ${tableName} WHERE (${selection.slice(0, -5)});`;
}

function selectMax(tableName, max) {
  const selection = `SELECT max(${max}) FROM ${tableName}`;

  return `SELECT * FROM ${tableName} WHERE ${max} = (${selection});`;
}

function updateUserValue(userID, obj) {
  let updates = '';

  Object.entries(obj).forEach((arr) => {
    updates += `${arr[0]} = `;

    if (Number.isInteger(arr[1])) {
      updates += `${arr[1]} AND `;
    } else {
      updates += `"${arr[1]}" AND `;
    }
  });

  return `UPDATE users SET ${updates.slice(0, -5)} WHERE userID = "${userID}"`;
}

const exportObject = {
  createTable,
  insertInto,
  selectEntry,
  selectMax,
  updateUserValue,
};

export default exportObject;
