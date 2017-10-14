/* eslint-env browser */
export default {

  parseForm: function parseForm(form) {
    const vm = this;
    return new Promise((resolve, reject) => {
      const formData = [...document.forms[form].querySelectorAll('input, textarea, select')];

      const parsedForm = {};

      if (!formData.some(vm.checkFormForErrors)) {
        formData.forEach((input) => {
          const reference = input.getAttribute('reference');

          switch (input.type) {
            case 'checkbox':
              if (input.checked) {
                if (parsedForm[reference]) {
                  parsedForm[reference].push(input.value);
                } else {
                  parsedForm[reference] = [input.value];
                }
              }
              break;
            case 'radio':
              if (input.checked) {
                parsedForm[reference] = input.value;
              }
              break;
            case 'date':
              parsedForm[reference] = new Date(input.value);
              break;
            case 'number':
              parsedForm[reference] = Number(input.value);
              break;
            default:
              parsedForm[reference] = input.value;
          }
        });

        Object.entries(parsedForm).forEach((entry) => {
          if (Array.isArray(entry[1])) {
            parsedForm[entry[0]] = entry[1].toString();
          }
        });

        resolve(parsedForm);
      } else {
        reject('Form had errors');
      }
    });
  },

  checkFormForErrors: function checkFormForErrors(el) {
    if (!el.value || el.value === '') {
      el.focus();
      el.classList.add('is-error');
      setTimeout(() => {
        el.classList.remove('is-error');
      }, 2000);
      return true;
    }
    return false;
  },
};
