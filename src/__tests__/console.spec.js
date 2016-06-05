/* eslint-disable no-console, no-unused-expressions */
import 'isomorphic-fetch';

import { expect } from 'chai';
import { spy } from 'sinon';
import { enhanceFetch } from 'http-client';
import {
  print,
  log,
  info,
  warn,
  error,
} from '../console';

const echoResponse = (response) =>
  enhanceFetch(
    () => Promise.resolve(response)
  );

describe('print', () => {
  it('should return function when console methods provided', () => {
    expect(print('log')).to.be.a('function');
    expect(print('info')).to.be.a('function');
    expect(print('warn')).to.be.a('function');
    expect(print('error')).to.be.a('function');
  });
});

describe('log', () => {
  beforeEach(() => {
    spy(console, 'log');
  });

  afterEach(() => {
    console.log.restore();
  });

  it('should call console.log', () => {
    const res = { hello: 'world' };
    log()(echoResponse(res)).then(response => {
      expect(response).to.equal(res);
      expect(console.log.called).to.be.true;
    });
  });

  it('should call console.log with part of response', () => {
    const res = {
      hello: {
        text: 'world',
      },
    };
    log('hello.text')(echoResponse(res)).then(response => {
      expect(response).to.equal(res);
      expect(console.log.calledWith(
        'Get "response.hello.text": ',
        'world'
      )).to.be.true;
    });
  });
});

describe('info', () => {
  let _info;
  beforeEach(() => {
    _info = console.info;
    console.info = spy();
  });

  afterEach(() => {
    console.info = _info;
  });

  it('should call console.info', () => {
    const res = { hello: 'world' };
    info()(echoResponse(res)).then(response => {
      expect(response).to.equal(res);
      expect(console.info.called).to.be.true;
    });
  });

  it('should call console.info with part of response', () => {
    const res = {
      hello: {
        text: 'world',
      },
    };
    info('hello.text')(echoResponse(res)).then(response => {
      expect(response).to.equal(res);
      expect(console.info.calledWith(
        'Get "response.hello.text": ',
        'world'
      )).to.be.true;
    });
  });
});

describe('warn', () => {
  let _warn;
  beforeEach(() => {
    _warn = console.warn;
    console.warn = spy();
  });

  afterEach(() => {
    console.warn = _warn;
  });

  it('should call console.warn', () => {
    const res = { hello: 'world' };
    warn()(echoResponse(res)).then(response => {
      expect(response).to.equal(res);
      expect(console.warn.called).to.be.true;
    });
  });

  it('should call console.warn with part of response', () => {
    const res = {
      hello: {
        text: 'world',
      },
    };
    warn('hello.text')(echoResponse(res)).then(response => {
      expect(response).to.equal(res);
      expect(console.warn.calledWith(
        'Get "response.hello.text": ',
        'world'
      )).to.be.true;
    });
  });
});

describe('error', () => {
  let _error;
  beforeEach(() => {
    _error = console.error;
    console.error = spy();
  });

  afterEach(() => {
    console.error = _error;
  });

  it('should call console.error', () => {
    const res = { hello: 'world' };
    error()(echoResponse(res)).then(response => {
      expect(response).to.equal(res);
      expect(console.error.called).to.be.true;
    });
  });

  it('should call console.error with part of response', () => {
    const res = {
      hello: {
        text: 'world',
      },
    };
    error('hello.text')(echoResponse(res)).then(response => {
      expect(response).to.equal(res);
      expect(console.error.calledWith(
        'Get "response.hello.text": ',
        'world'
      )).to.be.true;
    });
  });
});
