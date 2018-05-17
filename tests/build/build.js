/* global describe, it */

import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { expect } from 'chai';

var rootDir = path.resolve(__dirname, '../..');

describe('CommonJS build', () => {
  var libPath = path.resolve(rootDir, 'lib/react-input-mask.production.min.js');
  var InputElement = require(libPath);

  it('should return a string', () => {
    var result = ReactDOMServer.renderToString(<InputElement value="some" mask="799" />);
    expect(typeof result).to.equal('string');
  });
});

describe('UMD build', () => {
  var libPath = path.resolve(rootDir, 'dist/react-input-mask.min.js');
  var InputElement = require(libPath);

  it('should return a string', () => {
    var result = ReactDOMServer.renderToString(<InputElement value="some" mask="799" />);
    expect(typeof result).to.equal('string');
  });
});