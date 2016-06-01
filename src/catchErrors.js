const OptionsKeyValidators = [
  {
    name: 'data',
    validate: (input, options) => {
      const verb = (options.method || 'GET').toUpperCase();
      if (verb === 'GET' || verb === 'HEAD') {
        return;
      }
      throw new Error(`Did you try to use 'body: ${JSON.stringify(options.data)}'?`);
    },
  },
  {
    name: 'body',
    validate: (input, options) => {
      const verb = (options.method || 'GET').toUpperCase();
      if (verb === 'GET' || verb === 'HEAD') {
        return;
      }
      function isPojo(obj) {
        // Just copy for now.
        // https://github.com/nickb1080/is-pojo/blob/master/lib/index.js
        if (obj === null || typeof obj !== 'object') {
          return false;
        }
        return Object.getPrototypeOf(obj) === Object.prototype;
      }
      // https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch#Parameters
      if (isPojo(options.body)) {
        throw new Error(`Did you forgot to 'JSON.stringify(${JSON.stringify(options.body)})'`);
      }
    },
  },
];

function checkOptions(input, options) {
  OptionsKeyValidators.forEach(({ name, validate }) => {
    if (name in options) {
      validate(input, options);
    }
  });
}

/**
 * Check agains the final input and options to check if there's missing/misconfigured
 * properties.
 */
export const catchErrors = () => (
  (fetch, input, options = {}) => {
    checkOptions(input, options);

    return fetch(input, options);
  }
);
