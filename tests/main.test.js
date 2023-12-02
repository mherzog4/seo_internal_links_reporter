// main.test.js
import { test, expect } from '@jest/globals';
import { normalizeURL } from '../src/main.js';


test('normalizeURL removes trailing slash', () => {
  const url = 'http://example.com/path/';
  const expected = 'example.com/path';
  const result = normalizeURL(url);
  expect(result).toEqual(expected);
});
