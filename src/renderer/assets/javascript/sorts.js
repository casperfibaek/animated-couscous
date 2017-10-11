function result(A, B) {
  if (A < B) { return -1; } else if (A > B) { return 1; }
  return 0;
}

export default {
  // Based on: Ege Özcan @ StackOverflow
  alphabetic(property, order = 1) {
    return function sort(a, b) {
      const A = a[property].toLowerCase();
      const B = b[property].toLowerCase();
      return result(A, B) * order;
    };
  },

  numbers(property, order = 1) {
    return function sort(a, b) {
      const A = a[property];
      const B = b[property];
      return result(A, B) * order;
    };
  },

  array(property, order = 1) {
    return function sort(a, b) {
      const A = a[property].toString().toLowerCase();
      const B = b[property].toString().toLowerCase();
      return result(A, B) * order;
    };
  },
};
