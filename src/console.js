/* eslint-disable no-console */
import { onResponse } from 'http-client';
import _get from 'lodash.get';

export const print = (method) => (path) =>
  onResponse(response => {
    let args;
    if (path) {
      args = [
        `Get "response.${path}": `,
        _get(response, path),
      ];
    } else {
      args = [
        'Get "response": ',
        response,
      ];
    }
    console[method](...args);
    return response;
  });

export const log = print('log');
export const info = print('info');
export const warn = print('warn');
export const error = print('error');
