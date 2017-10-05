import sortObj from 'sort-object';

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
    if (Number.isInteger(arr[1]) || arr[1] === null) {
      values += `${arr[1]}, `;
    } else {
      values += `"${arr[1]}", `;
    }
  });

  return `INSERT INTO ${tableName} (${columns.slice(0, -2)}) VALUES (${values.slice(0, -2)});`;
}

function insertIntoArray(tableName, arr) {
  let columns = '';
  let values = '';

  Object.entries(sortObj(arr[0])).forEach((entry) => {
    columns += `"${entry[0]}", `;
  });

  arr.forEach((row) => {
    let _row = '';

    const sorted = sortObj(row);

    Object.entries(sorted).forEach((entry) => {
      if (typeof entry[1] === 'number' || entry[1] === null) {
        _row += `${entry[1]}, `;
      } else {
        // ESCAPE CHARACTER
        _row += `"${entry[1].replace(/"/g, "'")}", `;
      }
    });
    values += `(${_row.slice(0, -2)}), `;
  });

  const final = `INSERT OR IGNORE INTO ${tableName} (${columns.slice(0, -2)}) VALUES ${values.slice(0, -2)};`;
  return final;
}

function selectEntry(tableName, obj) {
  let selection = '';

  Object.entries(obj).forEach((arr) => {
    selection += `${arr[0]} = `;

    if (Number.isInteger(arr[1]) || arr[1] === null) {
      selection += `${arr[1]} AND `;
    } else {
      selection += `"${arr[1]}" AND `;
    }
  });

  return `SELECT * FROM ${tableName} WHERE (${selection.slice(0, -5)});`;
}

function selectMax(tableName, maxColumn) {
  const selection = `SELECT max(${maxColumn}) FROM ${tableName}`;

  return `SELECT * FROM ${tableName} WHERE ${maxColumn} = (${selection});`;
}

function updateUserValue(userID, obj) {
  let updates = '';

  Object.entries(obj).forEach((arr) => {
    updates += `${arr[0]} = `;

    if (Number.isInteger(arr[1]) || arr[1] === null) {
      updates += `${arr[1]} AND `;
    } else {
      updates += `"${arr[1]}" AND `;
    }
  });

  return `UPDATE users SET ${updates.slice(0, -5)} WHERE userID = "${userID}"`;
}

function updateLastCheck(siteID) {
  return `UPDATE sites SET lastCheck = ${new Date().getTime()} WHERE siteID = ${siteID};`;
}

const exportObject = {
  createTable,
  insertInto,
  insertIntoArray,
  selectEntry,
  selectMax,
  updateUserValue,
  updateLastCheck,
};

export default exportObject;
