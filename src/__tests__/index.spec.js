import { expect } from 'chai';
import {
  print,
  log,
  info,
  warn,
  error,
} from '../';

it('should export functions correctly', () => {
  expect(print).to.be.a('function');
  expect(log).to.be.a('function');
  expect(info).to.be.a('function');
  expect(warn).to.be.a('function');
  expect(error).to.be.a('function');
});
