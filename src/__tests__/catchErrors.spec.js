import 'isomorphic-fetch';

import { expect } from 'chai';
import { catchErrors } from '../index';

const echo = (input, options) =>
  Promise.resolve({ input, options });

describe('catchErrors', () => {
  it('do notthing for normal request', () => {
    expect(() => {
      catchErrors()(echo, 'url', {
        method: 'post',
        body: JSON.stringify({ name: 'catchErrors' }),
      });
    }).to.not.throw();
  });

  describe('when the options has a data property', () => {
    it('throws an error', () =>
      expect(() => {
        catchErrors()(echo, 'url', {
          method: 'post',
          data: JSON.stringify({ name: 'catchErrors' }),
        });
      }).to.throw(/Did you try to use 'body:/)
    );
  });

  describe('when the options has a POJO body property', () => {
    it('throws an error', () =>
      expect(() => {
        catchErrors()(echo, 'url', {
          method: 'post',
          body: { name: 'catchErrors' },
        });
      }).to.throw(/Did you forgot to 'JSON\.stringify/)
    );
  });
});
